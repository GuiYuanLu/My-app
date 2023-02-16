import Doing from "./components/demo1/TodoList.jsx";
import MyApp from "./components/demo2/StateUpBefore.jsx";
import MyApp2 from "./components/demo2/StateUpAfter.jsx";
import House from "./components/demo3/SolidList.jsx";
import Gallery from "./components/demo4/Gallery.jsx";
import Profile from "./components/demo5/Parent.jsx";
import PackingList from "./components/demo6/FlagTodo.jsx";
import List from "./components/demo7/Scients.jsx";
import Home from "./components/demo8/Test.jsx";
import Gallery2 from "./components/demo9/Two.jsx";
import { OneAdd, ThreeAdd, SixAdd } from "./components/demo10/Add.jsx";
import { User, User2 } from "./components/demo11/ObjectState.jsx";
import ShapeEditor from "./components/demo12/ArrayState.jsx";
import ShoppingCart from "./components/demo12/ArrayState2.jsx";

function App() {
  return (
    <div className="App">
      <Doing />
      <hr></hr>
      <MyApp />
      <hr></hr>
      <MyApp2 />
      <hr></hr>
      <House />
      <hr />
      <Gallery />
      <hr />
      <Profile />
      <hr />
      <PackingList />
      <hr />
      <List />
      <hr />
      <Home />
      <hr />
      <Gallery2 />
      <hr />
      <OneAdd />
      <ThreeAdd />
      <SixAdd />
      <hr />
      <User />
      <hr />
      <User2 />
      <hr />
      <ShapeEditor />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;
