import { useState } from "react";
import "./TodoList.css";
function Verification() {
  // 获取元素实例
  const drag = document.querySelector(".drag-child");

  // 图形被校验区域
  const check = document.querySelector(".check-child");

  // 通过校验回调
  const success = () => {
    console.log("通过校验");
  };

  // 声明鼠标按下事件
  const dragMouseDown = (event) => {
    // 添加鼠标移动事件
    document.addEventListener("mousemove", dragMouseMove);
  };
  // 监听鼠标移动事件
  const dragMouseMove = (event) => {
    // 获取当前 x 轴坐标
    const { pageX } = event;
    if (pageX < 0 || pageX > 350) {
      return;
    }
    // 修改可移动盒子的 x 轴坐标
    drag.style.transform = `translateX(${pageX}px)`;

    // 修改被校验区域坐标
    check.style.transform = `translateX(${pageX}px)`;

    if (pageX >= 278 && pageX <= 285) {
      // 执行回调
      success();
    }
  };
  // 结束鼠标监听事件
  const dragMouseUP = (event) => {
    // 移除鼠标移动事件
    document.removeEventListener("mousemove", dragMouseMove);

    // 获取当前 x 轴坐标
    const { pageX } = event;

    if (pageX < 278 || pageX > 285) {
      // 修改可移动盒子的 x 轴坐标
      drag.style.animation = "move 0.5s ease-in-out";
      // 修改被校验区域坐标
      check.style.animation = "move 0.5s ease-in-out";

      // 动画结束监听回调
      const animationEnd = () => {
        // 修改可移动盒子的 x 轴坐标
        drag.style.transform = `translateX(${0}px)`;
        // 修改被校验区域坐标
        check.style.transform = `translateX(${0}px)`;

        // 清除动画属性
        drag.style.animation = "";
        check.style.animation = "";
        // 移出动画结束监听
        document.removeEventListener("animationend", animationEnd);
      };
      // 添加动画结束监听
      document.addEventListener("animationend", animationEnd);
    }
  };

  // 添加鼠标按下事件
  document.addEventListener("mousedown", dragMouseDown);
  // 添加鼠标弹起事件
  document.addEventListener("mouseup", dragMouseUP);
  return (
    <>
      <div className="check">
        <div className="check-child"></div>
      </div>
      <div className="drag">
        <div className="drag-tips">
          <span>按住左边按钮向右拖动完成上方图像验证</span>
        </div>
        <div className="drag-child"></div>
      </div>
    </>
  );
}

function Doing() {
  const products = [
    { title: "Cabbage", id: 1, isFruit: false },
    { title: "Garlic", id: 2, isFruit: false },
    { title: "Apple", id: 3, isFruit: true },
  ];
  const flag = true;
  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? "red" : "blue" }}>
      {flag && product.title}
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

// function MyButton(){
//   const [count, setCount] = useState(0);

//   const handleClick=()=>{
//     setCount(count+1)
//   }
//   return(
//     <>
//       <button onClick={handleClick}>click{count}times</button>
//     </>
//   )
// }

export default Doing;
