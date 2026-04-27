import NavBar from './components/NavBar'
import Scene from "@/app/components/Scene";
import Hero from "@/app/components/Hero";
import {Suspense} from "react";
import Loading from "@/app/loading";

const Page = () => {
    return (
        <main>
            <NavBar />
            <Suspense fallback={<Loading />}>
            <Scene />
            </Suspense>
            <Hero  />
        </main>
    )
}
export default Page