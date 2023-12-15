import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import WelcomePage from "./components/welcomePage/WelcomePage";
import MainContainerComponent from "./components/mainContainer/MainContainer";
import Sprinkles from "./components/sprinkles/Sprinkles";
import { Suspense } from "react";

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const handleStartClick = () => {
    setShowWelcomePage(false);
  };

  return (
    <>
      <Navbar />
      <Sprinkles />
      {showWelcomePage ? (
        <WelcomePage onStartClick={handleStartClick} />
      ) : (
        <MainContainerComponent />
      )}
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
