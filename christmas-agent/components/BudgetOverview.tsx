"use client";

import { useState } from "react";

interface BudgetOverviewProps {
  totalBudget: number;
  spent: number;
  budgetPerPerson: number;
  onBudgetChange: (budget: number) => void;
}

export default function BudgetOverview({
  totalBudget,
  spent,
  budgetPerPerson,
  onBudgetChange,
}: BudgetOverviewProps) {
  const progressPercentage =
    totalBudget > 0 ? Math.min((spent / totalBudget) * 100, 100) : 0;
  const isOverBudget = spent > totalBudget;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600">
            Budget Per Person
          </label>
          <input
            type="number"
            value={budgetPerPerson}
            onChange={(e) => {
              const value = Number(e.target.value);
              onBudgetChange(value);
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Spent So Far</label>
          <div
            className={`p-2 rounded ${
              isOverBudget ? "bg-red-50" : "bg-green-50"
            }`}
          >
            {formatCurrency(spent)}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              isOverBudget ? "bg-red-600" : "bg-green-600"
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
