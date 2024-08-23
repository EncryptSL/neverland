import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavActiveLink({path, scroll, name, active = 'active', className = 'nav-link'}) {
    const pathname = usePathname()
    return (
        <Link className={`${className} ${pathname === path ? active : ''}`} href={path} scroll={scroll}>{name}</Link>
    )
}