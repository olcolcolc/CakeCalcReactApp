import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/Button";


function App() {
  return (
    <>
      <Navbar />
      <Button name="start"/>
      <Button name="again"/>
      <Button name="next"/>
      <Button name="previous"/>
    </>
  );
}

export default App;
