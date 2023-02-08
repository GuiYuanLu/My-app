// 重复渲染两次 两个MyButton组件共享一个状态
import { useState } from 'react';

export default function Myapp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>一起更新的计数器---将子组件的状态提升到父组件共同管理同享一个状态</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

