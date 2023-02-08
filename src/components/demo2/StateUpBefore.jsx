// 理解状态提升
// 重复渲染两次 每个MyButton组件互不影响
const { useState } = require("react");

function MyButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>click{count}times</button>
    </>
  );
}

function MyApp() {
  return (
    <div>
      <h1>单独更新的计数器---一个组件就是一个整体 重复使用互不影响</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}



export default MyApp
