import { Apple } from "lucide-react";
import Link from "next/link";

//https://lucide.dev/icons/
export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <Link href="/">
        <Apple />
      </Link>
      <nav className="flex items-center gap-3 lg:gap-8 ml-8">
        <Link href="/store">Stores Information</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
}
