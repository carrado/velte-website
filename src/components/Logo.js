import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex lg:w-1/5 md:w-1/4 w-full h-9 z-10 my-3 mx-3">
            <Link href="/" className="flex">
                <Image src="/velte.png" width={43} height={43} alt='Velte' />
                <div className="lg:flex md:flex hidden flex-col justify-end -ml-2">
                    <p className="text-base font-semibold text-white">elte</p>
                </div>
            </Link>
        </div>
    )
}