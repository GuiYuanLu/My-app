import { useState } from "react";

function Myapp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return(
    <div>
        <MyButton onClick={handleClick} count={count}/>
        <MyButton onClick={handleClick} count={count}/>

    </div>
  )
}

function MyButton({count,onClick}){
    return(
         <button onClick={onClick}>{count}</button>
    )
}