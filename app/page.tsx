import Scene from "./components/Scene";
import Hero from "./components/Hero";
import {Suspense} from "react";
import Loading from "@/app/loading";
import Showcase from "./components/Showcase";
import Look from "./components/Look";
import MaskVid from "./components/MaskVid";

const Page = () => {
    return (
        <Suspense fallback={<Loading />}>
        <main>
            <Scene />
            <Hero  />
            <Showcase />
            <Look />
            <MaskVid />
        </main>
</Suspense>
    )
}
export default Page