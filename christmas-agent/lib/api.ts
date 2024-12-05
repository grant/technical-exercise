import { Person } from "@/components/ShoppingList";

export interface GiftIdea {
  person: string;
  gift: {
    name: string;
    price: number;
  };
}

export async function searchGiftIdeas(
  shoppingList: Person[],
  budget: number,
): Promise<GiftIdea[]> {
  console.log("Searching for gift ideas");

  const giftIdeas = await Promise.all(
    shoppingList.map(async (person) => {
      const prompt = `Suggest 1 Christmas gift idea related to ${person.interests} for ${person.name} with a budget of $${budget}. 
          Return only a JSON object with this exact format:
          {
            "name": "item name",
            "price": number
          }
          The price must be less than or equal to $${person.budget}.`;
      console.log("Prompt", prompt);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();
      return {
        person: person.name,
        gift: JSON.parse(data.response),
      };
    }),
  );

  return giftIdeas;
}
