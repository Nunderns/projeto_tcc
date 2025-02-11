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
    <header className="fixed top-0 left-20 w-[calc(100%-20rem)] bg-black text-white py-5 px-8 border-b border-gray-800">
      <h1 className="text-2xl font-semibold">{pageTitles[pathname] || "Threads"}</h1>
    </header>
  );
}
