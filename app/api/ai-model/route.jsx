import { NextResponse } from "next/server";
import OpenAI from "openai";
import { QUESTIONS_PROMPT } from "../../../services/Constants";


export async function POST(req) {
  try {
    const { jobPosition, jobDescription, Duration, type } = await req.json();

    const FINAL_PROMPT = QUESTIONS_PROMPT
      .replace("{{jobTitle}}", jobPosition)
      .replace("{{jobDescription}}", jobDescription)
      .replace("{{duration}}", Duration)
      .replace("{{type}}", type);

    console.log("FINAL PROMPT", FINAL_PROMPT);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: 'mistralai/mistral-7b-instruct:free',

      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (e) {
    console.error("Error in OpenAI API", e);
    return NextResponse.json({ error: e.message }, { status: 500 }); // ✅ fixed
  }
}
