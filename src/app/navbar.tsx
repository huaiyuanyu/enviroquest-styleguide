import Link from "next/link"
import Image from "next/image"

export default function Navbar () {
    return (
        <div className="flex flex-row justify-items-center place-items center h-auto w-full fixed top-0 bg-[#311D08] text-[#69CA29] font-bold">
            <div className="p-3">
                <Link href="/">
                    <Image src="/images/fullcolor.png" alt="Full Color Logo" width={25} height={25} />
                </Link>
            </div>
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