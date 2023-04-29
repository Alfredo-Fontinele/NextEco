import Link from "next/link";

export interface IMenuItems {
    name: string;
    href: string;
}

interface IMenuItemsProps {
    menuItems: IMenuItems[];
}

export default function MenuItems({ menuItems }: IMenuItemsProps) {
    return (
        <div className="hidden md:flex items-center ">
            <ul className="flex items-center gap-7">
                {menuItems.map((item, i) =>
                    i === 5 ? (
                        <Link
                            key={i}
                            href={item.href}
                            className="text-white bg-black py-2 px-8 rounded-md"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <Link key={i} href={item.href} className="text-black">
                            {item.name}
                        </Link>
                    )
                )}
            </ul>
        </div>
    );
}
