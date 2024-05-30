import Header from "./components/Home/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Forms from "./components/Forms/Forms";
import Loader from "./components/Loader.jsx/Loader";
import CardEvents from "./components/Events/CardEvents.jsx";
// import OurTeam from "./components/OurTeam/OurTeam.jsx";
import { Suspense } from "react";

// Making the Routing Feature

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <OurTeam />  */}
        <Header />
        <CardEvents />
        <Forms />
        <AboutUs />
      </Suspense>
    </>
  );
}

