"use client";

import { useState } from "react";
import ShoppingList from "@/components/ShoppingList";
import BudgetOverview from "@/components/BudgetOverview";
import GiftSearchBot from "@/components/GiftSearchBot";
import type { Person } from "@/components/ShoppingList";
import { GiftIdea } from "@/lib/api";

export default function Home() {
  const [budgetPerPerson, setBudgetPerPerson] = useState<number>(500);
  const [shoppingList, setShoppingList] = useState<Person[]>([]);

  const [giftIdeas, setGiftIdeas] = useState<GiftIdea[]>([]);
  const spent = giftIdeas.reduce((total, idea) => total + idea.gift.price, 0);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-8 p-8 max-w-7xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Christmas Shopping Agent
        </h1>
        <p className="text-gray-600">
          Organize your holiday shopping with AI assistance
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-8">
          <BudgetOverview
            totalBudget={budgetPerPerson * shoppingList.length}
            onBudgetChange={setBudgetPerPerson}
            budgetPerPerson={budgetPerPerson}
            spent={spent}
          />
          <ShoppingList
            items={shoppingList}
            onItemsChange={setShoppingList}
            totalBudget={budgetPerPerson}
          />
        </div>
        <GiftSearchBot
          shoppingList={shoppingList}
          budget={budgetPerPerson}
          onSearch={(giftIdeas) => {
            setGiftIdeas(giftIdeas);

            console.log("Search", { budget: budgetPerPerson, shoppingList });
            console.log("Response", giftIdeas);
          }}
        />
      </div>
    </div>
  );
}
