import { Bars4Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface IMenuItems {
    name: string;
    href: string;
}

export default function Header() {
    const menuItems: IMenuItems[] = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "What We Do",
            href: "/what-we-do",
        },
        {
            name: "Media",
            href: "/media",
        },
        {
            name: "Contact",
            href: "/contact",
        },
        {
            name: "Donate",
            href: "/donate",
        },
    ];
    return (
        <div className="flex w-full items-center justify-between h-20 px-2">
            <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-sky-500"></div>
                <h1 className="text-black text-2xl">Finsweet</h1>
            </div>
            <div className="hidden sm:flex">
                <ul className="flex gap-7">
                    {menuItems.map((item, i) => (
                        <Link key={i} href={item.href} className="text-black">
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
            <Bars4Icon className="flex sm:hidden text-sm text-white h-8 w-8 cursor-pointer" />
        </div>
    );
}
