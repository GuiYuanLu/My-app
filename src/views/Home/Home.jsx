import React from "react";
import { useState } from "react";
import "./Home.css";
import About from "../About/About";
import Login from "../Login/Login";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Routes, Route } from "react-router-dom";
const { Header, Sider, Content } = Layout;
export default function Home() {
	const [collapsed, setCollapsed] = useState(false);
	function getItem(label, key, icon, children) {
		return {
			key,
			icon,
			children,
			label
		};
	}

	const items = [getItem("Home", "1", <Link to="/home"></Link>), getItem("About", "2", <Link to="/about"></Link>)];
	const {
		token: { colorBgContainer }
	} = theme.useToken();
	return (
		<div>
			<Layout className="abc">
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} />
				</Sider>
				<Layout className="site-layout">
					<Header
						style={{
							padding: 0,
							background: colorBgContainer
						}}
					>
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: "trigger",
							onClick: () => setCollapsed(!collapsed)
						})}
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
							background: colorBgContainer
						}}
					>
						<Routes>
							<Route path="/about" element={<Login />}></Route>
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
}
