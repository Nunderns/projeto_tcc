"use client";

import Link from "next/link";

export default function Suggestions() {
  const users = [
    { id: 1, name: "joaosilva", username: "@joaosilva" },
    { id: 2, name: "mariarodrigues", username: "@mariarodrigues" },
  ];

  return (
    <aside className="fixed top-16 right-0 w-64 bg-black text-white p-6 border-l border-gray-800">
      <h2 className="text-lg font-bold mb-4">Sugestões para você</h2>
      {users.map(({ id, name, username }) => (
        <div key={id} className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-400">{username}</p>
          </div>
          <Link href="#" className="text-blue-400 text-sm hover:underline">Seguir</Link>
        </div>
      ))}
    </aside>
  );
}
