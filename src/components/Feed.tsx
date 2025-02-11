"use client";

import { Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";

export default function Feed() {
  const posts = [
    {
      id: 1,
      user: "charlescosta_oficial",
      username: "@charlescosta",
      avatar: "/avatars/avatar1.jpg", // Caminho da imagem
      text: "É real.",
      time: "22h",
    },
    {
      id: 2,
      user: "mixdeseries",
      username: "@mixdeseries",
      avatar: "/avatars/avatar2.jpg",
      text: "O que aconteceu no capítulo 12 de Beleza Fatal?",
      time: "18h",
    },
  ];

  return (
    <main className="flex-1 mt-16 px-6 text-white">
      {posts.map(({ id, user, username, avatar, text, time }) => (
        <div key={id} className="bg-gray-900 p-4 rounded-lg mb-4 border border-gray-800">
          <div className="flex items-center space-x-3">
            <Image src={avatar} alt={user} width={40} height={40} className="rounded-full" />
            <div>
              <p className="text-sm font-semibold">{user} <span className="text-gray-400">{username} • {time}</span></p>
            </div>
          </div>

          <p className="mt-3 text-lg">{text}</p>

          {/* Ações: Like, Comentar, Compartilhar */}
          <div className="flex items-center space-x-6 mt-3 text-gray-400">
            <button className="flex items-center space-x-1 hover:text-red-500 transition">
              <Heart size={20} />
              <span>318</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-400 transition">
              <MessageCircle size={20} />
              <span>10</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-400 transition">
              <Send size={20} />
              <span>19</span>
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
