import Link from "next/link"

export default function Navbar () {
    return (
        <div className="flex flex-row justify-items-center place-items center h-auto w-full fixed top-0 bg-[#311D08] text-[#69CA29] font-bold">
            <div className="p-3">
                <Link href="/logo">
                    Logo
                </Link>
            </div>
            <div className="p-3">
                <Link href="/palette">
                    Palette
                </Link>
            </div>
            <div className="p-3">
                <Link href="/typography">
                    Typography
                </Link>
            </div>
            <div className="p-3">
                <Link href="/graphics">
                    Graphics
                </Link>
            </div>
        </div>
    )
}