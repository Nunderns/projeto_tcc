"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Plus, Heart, User } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={28} /> },
    { href: "/search", label: "Pesquisar", icon: <Search size={28} /> },
    { href: "/new", label: "Novo Post", icon: <Plus size={28} /> },
    { href: "/likes", label: "Curtidas", icon: <Heart size={28} /> },
    { href: "/profile", label: "Perfil", icon: <User size={28} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-black border-r border-gray-800 flex flex-col items-center py-6 space-y-8">
      {navLinks.map(({ href, label, icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center text-gray-400 hover:text-white transition ${
            pathname === href ? "text-white" : ""
          }`}
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </aside>
  );
}
