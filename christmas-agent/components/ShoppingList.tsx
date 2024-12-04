"use client";

export interface Person {
  id: string;
  name: string;
  interests: string;
  age: number;
  budget: number;
}

interface ShoppingListProps {
  items: Person[];
  onItemsChange: (items: Person[]) => void;
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
}: ShoppingListProps) {
  const addPerson = () => {
    const newPerson: Person = {
      id: Date.now().toString(),
      name: "",
      interests: "",
      age: 0,
      budget: 0,
    };
    onItemsChange([...items, newPerson]);
  };

  const generateRandomFamily = () => {
    const familySize = Math.floor(Math.random() * 4) + 2; // 2-5 people
    const randomFamily: Person[] = Array.from({ length: familySize }, () => {
      const randomName =
        RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
      const randomInterests =
        RANDOM_INTERESTS[Math.floor(Math.random() * RANDOM_INTERESTS.length)];
      const randomAge = Math.floor(Math.random() * 70) + 1;
      const randomBudget = Math.floor(Math.random() * 190) + 10; // 10-200

      return {
        id: Date.now().toString() + Math.random(),
        name: randomName,
        interests: randomInterests,
        age: randomAge,
        budget: randomBudget,
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
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Person
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
            <div className="grid grid-cols-3 gap-4">
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
                placeholder="Age"
                value={person.age}
                onChange={(e) => {
                  const updated = items.map((p) =>
                    p.id === person.id
                      ? { ...p, age: Number(e.target.value) }
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
                  const updated = items.map((p) =>
                    p.id === person.id
                      ? { ...p, budget: Number(e.target.value) }
                      : p,
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
