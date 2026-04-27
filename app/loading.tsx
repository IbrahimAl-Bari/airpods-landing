import Image from "next/image";

export default function Loading() {
    return (
        <div className={"w-screen h-screen flex items-center justify-center bg-black z-60"}>

            <Image src="/logo.svg" alt={"Logo"} width={50} height={50}/>

        </div>
    )
}
