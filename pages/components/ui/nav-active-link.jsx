import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function NavActiveLink({path, scroll, name}) {
    const pathname = usePathname()
    return (
        <Link className={`nav-link ${pathname === path ? 'text-white' : ''}`} href={path} scroll={scroll}>{name}</Link>
    )
}