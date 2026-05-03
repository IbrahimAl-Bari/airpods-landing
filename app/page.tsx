import NavBar from './components/NavBar'
import Scene from "@/app/components/Scene";
import Hero from "@/app/components/Hero";
import {Suspense} from "react";
import Loading from "@/app/loading";
import Showcase from "@/app/components/Showcase";
import Look from "@/app/components/Look";

const Page = () => {
    return (
        <Suspense fallback={<Loading />}>
        <main>
            <NavBar />
            <Scene />
            <Hero  />
            <Showcase />
            <Look />
        </main>
</Suspense>
    )
}
export default Page