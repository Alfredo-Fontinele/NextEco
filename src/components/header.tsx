import { Bars4Icon } from "@heroicons/react/24/outline";
import MenuItems, { IMenuItems } from "./menu-items";

const headerItems: IMenuItems[] = [
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

export default function Header() {
    return (
        <div className="flex w-full items-center justify-between h-20 px-4">
            <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-sky-500"></div>
                <h1 className="text-black text-2xl">Finsweet</h1>
            </div>
            <MenuItems menuItems={headerItems} />
            <Bars4Icon className="flex md:hidden text-sm text-black h-8 w-8 cursor-pointer" />
        </div>
    );
}
