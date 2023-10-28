import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/Button";
import MainContainerComponent from "./components/mainContainer/MainContainer";
import WelcomePage from "./components/welcomePage/WelcomePage";


function App() {
  return (
    <>
      <Navbar />
      {/* <MainContainerComponent/> */}
      {/* <Button name="start"/>
      <Button name="again"/>
      <Button name="next"/>
      <Button name="previous"/> */}
      <WelcomePage/>
    </>
  );
}

export default App;
