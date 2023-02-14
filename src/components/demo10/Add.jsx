import { useState } from "react";

// 这里我们已经知道react会直接运行所以每次只会加1
export function OneAdd() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <h2>这里我们已经知道react会直接运行所以每次只会加1</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        False click+3
      </button>
    </>
  );
}

//如果给setNumber传入一个匿名函数 React队列将会在运行完 最后状态改变的时候把三个调用的值一次传递拿到
// queued update	n	returns
// n => n + 1	0	0 + 1 = 1
// n => n + 1	1	1 + 1 = 2
// n => n + 1	2	2 + 1 = 3
export function ThreeAdd() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <h2>
        如果给setNumber传入一个匿名函数 React队列将会在运行完
        最后状态改变的时候把三个调用的值一次传递拿到
      </h2>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        True click+3
      </button>
    </>
  );
}
//[e.target.name]: e.target.value, <input name="email" value={person.email} onChange={handleChange} />
//动态属性匹配
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
//如果是这种情况就结合上面两者情况 第一句setNumber React拿到值为5 然后运算完给他赋值 所以结果为6
export function SixAdd() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <h2>
        这种情况就结合上面两者情况 第一句setNumber React拿到值为5
        然后运算完给他赋值 所以结果为6
      </h2>
      <h3>
        这确保当您递增或递减计数器时，您是根据其最新状态而不是单击时的状态进行操作这就是更新函数的意义
      </h3>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        click+6
      </button>
    </>
  );
}
//
