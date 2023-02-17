import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Posts from "../components/Posts";
import PostLists from "../components/PostLists";
import Post from "../components/Post";

export default function Mrouter() {
  // 1
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        {/* 路由重定向 也是404的写法*/}
        <Route path="*" element={<Navigate to="about" />} />
      </Routes>
    </>
  );
}
