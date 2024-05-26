import Header from "./components/Home/Header/Header";

//import Events from "./components/Events/Events";
import AboutUs from "./components/AboutUs/AboutUs";

import Forms from "./components/Forms/Forms";
import Loader from "./components/Loader.jsx/Loader";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        {/* <Events /> */}
        <Forms />
        <AboutUs />
      </Suspense>
    </>
  );
}

export default App;
