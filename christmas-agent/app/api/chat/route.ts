import { AnthropicAPI } from "@/lib/anthropic";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const anthropic = new AnthropicAPI();
    const response = await anthropic.generateResponse(prompt);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
