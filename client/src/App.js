import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CardsPage from "./Components/Pages/cards/CardsPage";
import TablePage from "./Components/Pages/tables";
import Header from "./Components/header";
import Login from "./Components/Pages/auth/LoginPage";
import Registration from "./Components/Pages/auth/RegistrPage";
import About from "./Components/Pages/main/AboutPage";
import { PrivateRoute } from "./utils/router/PrivateRoute";
import "./style.css";
import { useSelector } from "react-redux";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  // main component, logic of the

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "88vh" }}>
        {isLogin ? <Header /> : null}
        <Layout style={{ backgroundColor: "white" }}>
          <Content>
            <Routes>
              {/* no registration, no applicatiom*/}
              <Route element={<PrivateRoute />}>
                <Route path="cards" element={<CardsPage />} />
                <Route path="about" element={<About />} />
                <Route path="table/:id" element={<TablePage />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="/" element={<Registration />} />
              {/* bad url, go first page  */}
              <Route
                path="*"
                element={
                  isLogin ? <Navigate to="/about" /> : <Navigate to="/" />
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
