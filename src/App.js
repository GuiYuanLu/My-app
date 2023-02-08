import Doing from "./components/demo1/TodoList.jsx";
import  MyApp  from "./components/demo2/StateUpBefore.jsx";
import  MyApp2  from "./components/demo2/StateUpAfter.jsx";
import House from "./components/demo3/SolidList.jsx";
import Gallery from "./components/demo4/Gallery.jsx";
import Profile from "./components/demo5/Parent.jsx";
import PackingList from './components/demo6/FlagTodo.jsx'
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
      <hr />
      <Gallery/>
      <hr />
      <Profile/>
      <hr />
      <PackingList/>
    </div>
  );
}

export default App;
