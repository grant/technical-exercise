import Anthropic from "@anthropic-ai/sdk";

export class AnthropicAPI {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const response = await this.client.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      if (!response.content[0].type || response.content[0].type !== "text") {
        throw new Error("Unexpected response format from Anthropic API");
      }

      if (!response.content[0].text) {
        throw new Error("No text content in response");
      }

      return response.content[0].text;
    } catch (error) {
      console.error("Error generating response:", error);
      throw error;
    }
  }
}
