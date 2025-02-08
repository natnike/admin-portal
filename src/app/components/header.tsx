import Link from "next/link";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { Smile } from "lucide-react";


export default function Header () {
    return (
        <header className="sticky top-0 w-full border-b">
            <div className='h-14 container flex items-center'>
                {/* Desktop */}
                <MainNav />

                {/* Desktop */}
                <MobileNav />

                {/* Desktop * Mobile */}
                <h1 className='flex items-center justify-end flex-1'>
                    <Link href='/'><Smile /></Link>
                </h1>
            </div>
        </header>
    );
}