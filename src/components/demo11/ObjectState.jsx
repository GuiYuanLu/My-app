import { useState } from "react";

export function User() {
  const [person, setPerson] = useState({
    firstName: "Liu",
    lastName: "Ray",
    email: "rliu32@gmail.com",
  });

  const handleChangeFirstName = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };

  const handleChangeLastName = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };

  const handleChangeemail = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  return (
    <div>
      <h1>User</h1>
      <h2>使用的是分开的写法 三个函数 控制三个输入框</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          value={person.firstName}
          onChange={handleChangeFirstName}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={person.lastName}
          onChange={handleChangeLastName}
        />
        <label>Email</label>
        <input type="text" value={person.email} onChange={handleChangeemail} />
        <p>
          {person.firstName}
          {""}
          {person.lastName}
          {""}({person.email})
        </p>
      </form>
    </div>
  );
}

// 使用 setPerson({
//     ...person,
//     [e.target.name]: e.target.value
//   });
//这种写法 动态匹配 属性 这样只需要写一种方法
export function User2() {
  const [person, setPerson] = useState({
    firstName: "Liu",
    lastName: "Ray",
    email: "rliu32@gmail.com",
  });

  const handleChangeName = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>User</h1>
      <h2>
        动态匹配 name属性 这样只需要写一种方法 [e.target.name]: e.target.value
      </h2>
      <form>
        <label>First Name:</label>
        <input
          name="firstName"
          type="text"
          value={person.firstName}
          onChange={handleChangeName}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChangeName}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleChangeName}
        />
        <p>
          {person.firstName}
          {""}
          {person.lastName}
          {""}({person.email})
        </p>
      </form>
    </div>
  );
}
