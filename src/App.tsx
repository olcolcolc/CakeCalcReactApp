import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import WelcomePage from "./components/welcomePage/WelcomePage";
import MainContainerComponent from "./components/mainContainer/MainContainer";
import Sprinkles from "./components/sprinkles/Sprinkles";

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

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

export default App;
