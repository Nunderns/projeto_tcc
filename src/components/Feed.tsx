"use client";

export default function Feed() {
  const posts = [
    { id: 1, user: "charlescosta_oficial", text: "É real.", time: "22h" },
    { id: 2, user: "mixdeseries", text: "O que aconteceu no capítulo 12 de Beleza Fatal?", time: "18h" },
  ];

  return (
    <main className="flex-1 mt-16 px-6 text-white">
      {posts.map(({ id, user, text, time }) => (
        <div key={id} className="bg-gray-900 p-4 rounded-lg mb-4 border border-gray-800">
          <p className="text-sm text-gray-400">{user} • {time}</p>
          <p className="mt-2 text-lg">{text}</p>
        </div>
      ))}
    </main>
  );
}
