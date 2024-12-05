"use client";

import { GiftIdea, searchGiftIdeas } from "@/lib/api";
import { Person } from "./ShoppingList";
import { useState } from "react";

interface GiftSearchBotProps {
  shoppingList: Person[];
  budget: number;
  onSearch: (response: GiftIdea[]) => void;
}

export default function GiftSearchBot({
  shoppingList,
  budget,
  onSearch,
}: GiftSearchBotProps) {
  const [giftIdeas, setGiftIdeas] = useState<GiftIdea[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    try {
      setIsSearching(true);
      const ideas = await searchGiftIdeas(shoppingList, budget);
      setGiftIdeas(ideas);
      onSearch(ideas);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Gift Search Bot</h2>
      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-red-400"
      >
        {isSearching ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
            <span>Searching...</span>
          </div>
        ) : (
          "Start Gift Search"
        )}
      </button>
      <div className="mt-4 p-4 bg-gray-50 rounded min-h-[200px]">
        {giftIdeas.length > 0 ? (
          <div className="space-y-4">
            {giftIdeas.map((idea, index) => (
              <div key={index} className="p-4 bg-white rounded shadow">
                <h3 className="font-medium text-gray-900">
                  Gift for {idea.person}
                </h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-gray-600">{idea.gift.name}</span>
                  <span className="font-medium text-green-600">
                    {formatCurrency(idea.gift.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Click &quot;Start Gift Search&quot; to begin finding perfect gifts
            for everyone on your list
          </p>
        )}
      </div>
    </div>
  );
}
