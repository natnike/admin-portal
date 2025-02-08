import { Apple } from "lucide-react";
import Link from "next/link";


//https://lucide.dev/icons/
export default function MainNav () {
    return <div className='hidden md:flex'>
        <Link href='/'><Apple /></Link>
        <nav className='flex items-center gap-3 lg:gap-4 ml-8'>
            <Link href='/project'>Project</Link>
            <Link href='/about'>about</Link>
            <Link href='/test'>test</Link>
        </nav>
    </div>;
}