"use client";

interface BudgetOverviewProps {
  budget: number;
  onBudgetChange: (budget: number) => void;
}

export default function BudgetOverview({
  budget,
  onBudgetChange,
}: BudgetOverviewProps) {
  const spent = 0; // This will be calculated based on shopping list later

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600">Total Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => onBudgetChange(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Spent So Far</label>
          <div className="p-2 bg-gray-50 rounded">${spent}</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${(spent / budget) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
