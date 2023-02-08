import Doing from "./components/demo1/TodoList.jsx";
import  MyApp  from "./components/demo2/StateUpBefore.jsx";
import  MyApp2  from "./components/demo2/StateUpAfter.jsx";
import House from "./components/demo3/SolidList.jsx";

function App() {
  return (
    <div className="App">
      <Doing />
      <hr></hr>
      <MyApp />
      <hr></hr>
      <MyApp2 />
      <hr></hr>
      <House/>
    </div>
  );
}

export default App;
