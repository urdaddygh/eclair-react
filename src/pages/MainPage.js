import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./MainPage.module.scss";
import Header from "../components/header/Header";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import TakeVacation from "./takeVacation/TakeVacation";
import "../styles/Text.scss"

const MainPage = () => {
  return (
    <div className={s.container}>
      <>
      <Header/>
      </>

      <div className={s.content}>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/take_vacation' element={<TakeVacation />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
