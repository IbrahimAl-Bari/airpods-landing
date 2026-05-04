import Link from 'next/link'

export default function NotFound() {
    return (
            <div className={"mt-10 w-full h-full flex flex-col items-center justify-center"}>
                <h1 className={"text-5xl max-md:text-3xl absolute top-1/7 z-1"}>Sorry But I Didn't</h1>
                <h1 className={"text-5xl max-md:text-3xl absolute top-1/4 z-1"}>Make The Other Pages</h1>

                <button className={"button mt-70 z-50"}> <Link href="/">Let's Get You Back Home</Link></button>

                <p>I Can Make Them If You Want Just Tell Me :)</p>


            </div>
    )
}