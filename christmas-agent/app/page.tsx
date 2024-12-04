"use client";

import { useState } from "react";
import ShoppingList from "@/components/ShoppingList";
import BudgetOverview from "@/components/BudgetOverview";
import GiftSearchBot from "@/components/GiftSearchBot";
import type { Person } from "@/components/ShoppingList";

export default function Home() {
  const [budget, setBudget] = useState<number>(500);
  const [shoppingList, setShoppingList] = useState<Person[]>([]);

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
          <BudgetOverview budget={budget} onBudgetChange={setBudget} />
          <ShoppingList items={shoppingList} onItemsChange={setShoppingList} />
        </div>
        <GiftSearchBot
          onSearch={(query: string) => {
            console.log("Search", { query, budget, shoppingList });
          }}
        />
      </div>
    </div>
  );
}
