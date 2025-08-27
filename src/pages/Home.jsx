

import Hero from "./Home_components/Hero";
import MainInfo from "./Home_components/MainInfo";
import Houses from "./Home_components/Houses";
import NewsLetters from "./Home_components/NewsLetters";
import Agents from "./Home_components/Agents";
import StayUpdated from "./Home_components/StayUpdated";

export default function Home() {
   
    return (
        <>
        <Hero />
        <MainInfo/>
        <Houses/>
        <NewsLetters />
        <Agents />
        <StayUpdated />
        </>
    )
}