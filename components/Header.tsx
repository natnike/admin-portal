import Link from "next/link";
import { Smile } from "lucide-react";
import MainNav from "./MainNav";
import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-14 container flex items-center container mx-auto p-3">
        {/* Desktop */}
        <MainNav />
        <div className="flex md:hidden ml-4">
          <h1>PFCB Admin Portal</h1>
          <SidebarTrigger className="flex md:hidden ml-4" />
        </div>

        {/* Desktop * Mobile */}
        <h1 className="flex items-center justify-end flex-1 gap-3 lg:gap-4 ml-8">
          <Link href="/">
            <Smile />
          </Link>
        </h1>
      </div>
    </header>
  );
}
