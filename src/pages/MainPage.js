import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./MainPage.module.scss";
import Header from "../components/header/Header";
import HomePage from "./home/HomePage";

const MainPage = () => {
  return (
    <div className={s.container}>
      <>
      <Header/>
      </>

      <div className={s.content}>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          {/* <Route path='/main/*' element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
