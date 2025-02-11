"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const pageTitles: Record<string, string> = {
    "/": "Página Inicial",
    "/search": "Pesquisar",
    "/new": "Novo Post",
    "/likes": "Curtidas",
    "/profile": "Perfil",
  };

  return (
    <header className="fixed top-0 left-16 w-[calc(100%-16rem)] bg-black text-white py-4 px-6 border-b border-gray-800">
      <h1 className="text-xl font-bold">{pageTitles[pathname] || "Threads"}</h1>
    </header>
  );
}
