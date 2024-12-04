"use client";

interface GiftSearchBotProps {
  onSearch: (query: string) => void;
}

export default function GiftSearchBot({ onSearch }: GiftSearchBotProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Gift Search Bot</h2>
      <button
        onClick={() => onSearch("default search")}
        className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Start Gift Search
      </button>
      <div className="mt-4 p-4 bg-gray-50 rounded min-h-[200px]">
        <p className="text-gray-500 text-center">
          Click &quot;Start Gift Search&quot; to begin finding perfect gifts for
          everyone on your list
        </p>
      </div>
    </div>
  );
}
