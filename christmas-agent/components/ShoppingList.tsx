"use client";

export interface Person {
  id: string;
  name: string;
  interests: string;
  budget: number;
}

interface ShoppingListProps {
  items: Person[];
  onItemsChange: (items: Person[]) => void;
  totalBudget: number;
}

const RANDOM_NAMES = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Oliver",
  "Isabella",
  "William",
  "Sophia",
  "James",
  "Charlotte",
  "Benjamin",
  "Mia",
  "Lucas",
  "Harper",
];

const RANDOM_INTERESTS = [
  "Reading",
  "Video Games",
  "Art",
  "Sports",
  "Music",
  "Cooking",
  "Photography",
  "Gardening",
  "Travel",
  "Technology",
  "Fashion",
  "Movies",
  "Board Games",
  "Dancing",
  "Crafts",
];

export default function ShoppingList({
  items,
  onItemsChange,
  totalBudget,
}: ShoppingListProps) {
  const addPerson = () => {
    const newPersonBudget =
      items.length === 0 ? totalBudget : totalBudget / (items.length + 1);
    const newPerson: Person = {
      id: Date.now().toString(),
      name: "",
      interests: "",
      budget: newPersonBudget,
    };

    // Update budgets for all people to be even
    const updatedItems = items.map((item) => ({
      ...item,
      budget: newPersonBudget,
    }));

    onItemsChange([...updatedItems, newPerson]);
  };

  const generateRandomFamily = () => {
    const familySize = Math.floor(Math.random() * 4) + 2; // 2-5 people
    const budgetPerPerson = Math.round((totalBudget / familySize) * 100) / 100;

    const randomFamily: Person[] = Array.from({ length: familySize }, () => {
      const randomName =
        RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
      const randomInterests =
        RANDOM_INTERESTS[Math.floor(Math.random() * RANDOM_INTERESTS.length)];

      return {
        id: Date.now().toString() + Math.random(),
        name: randomName,
        interests: randomInterests,
        budget: budgetPerPerson,
      };
    });

    onItemsChange(randomFamily);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Shopping List</h2>
        <div className="space-x-2">
          <button
            onClick={generateRandomFamily}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Generate Random Family
          </button>
          <button
            onClick={addPerson}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
          >
            Add
          </button>
          <button
            onClick={() => onItemsChange(items.slice(0, -1))}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((person) => (
          <div key={person.id} className="p-4 border rounded">
            <input
              type="text"
              placeholder="Name"
              value={person.name}
              onChange={(e) => {
                const updated = items.map((p) =>
                  p.id === person.id ? { ...p, name: e.target.value } : p,
                );
                onItemsChange(updated);
              }}
              className="w-full p-2 border rounded mb-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Interests"
                value={person.interests}
                onChange={(e) => {
                  const updated = items.map((p) =>
                    p.id === person.id
                      ? { ...p, interests: e.target.value }
                      : p,
                  );
                  onItemsChange(updated);
                }}
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Budget"
                value={person.budget}
                onChange={(e) => {
                  const newBudget = Number(e.target.value);
                  const updated = items.map((p) =>
                    p.id === person.id ? { ...p, budget: newBudget } : p,
                  );
                  onItemsChange(updated);
                }}
                className="p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
