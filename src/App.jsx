import Header from "./components/Home/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
// import EventList from "./components/Gridbox/EventList.jsx";
import Forms from "./components/Forms/Forms";
import Loader from "./components/Loader.jsx/Loader";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        {/* <EventList /> */}
        <Forms />
        <AboutUs />
      </Suspense>
    </>
  );
}

export default App;
