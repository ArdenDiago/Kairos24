import Header from "./components/Home/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Forms from "./components/Forms/Forms";
import Loader from "./components/Loader.jsx/Loader";
import CardEvents from "./components/Events/CardEvents.jsx";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <CardEvents />
        <Forms />
        <AboutUs />
      </Suspense>
    </>
  );
}

export default App;
