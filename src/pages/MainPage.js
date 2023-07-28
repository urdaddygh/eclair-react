import React from "react";
import { Routes } from "react-router-dom";
import s from "./MainPage.module.scss";
import Header from "../components/header/Header";

const MainPage = () => {
  return (
    <div className={s.container}>
      <>
      <Header/>
      </>

      <div className={s.content}>
        <Routes>
          {/* <Route path='/auth' element={< />} /> */}
          {/* <Route path='/main/*' element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
