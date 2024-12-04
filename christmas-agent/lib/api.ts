export async function searchGiftIdeas() {
  console.log("Searching for gift ideas");
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: "Suggest 3 Christmas gift ideas for a tech-savvy person",
    }),
  });

  return response.json();
}
