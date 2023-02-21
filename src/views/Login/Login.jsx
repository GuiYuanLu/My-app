import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <form action="">
      <label htmlFor="">
        账号:
        <input type="text" name="number" />
      </label>
      <label htmlFor="" id="pwd">
        密码:
        <input type="password" name="pwd" id="pwd" />
      </label>
      <button
        onClick={() => {
          localStorage.setItem("token", "123");
        }}
      >
        登陆
      </button>
    </form>
  );
}
