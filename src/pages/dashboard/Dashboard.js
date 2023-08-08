import React, { useState } from "react";
import s from "./Dashboard.module.scss";
import { arrow, double_arrow, search } from "../../Images";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return (
    <>
      <section className={s.first_section}>
        <img src={arrow} alt="" />
        <label className={s.search}>
          <input type="text" name="search" id="" placeholder="Search..." />
          <img src={search} alt="" className={s.search_icon} />
        </label>

        <div className={s.select} onClick={toggle}>
          <p>Sort by...</p>
          <img src={double_arrow} className={s.arrow_sort} />
        </div>
        {state && (
          <div className={s.sort}>
            <form>
              <select size="4" className={s.sort_select}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Vacation">Vacations</option>
                <option value="Vacation">Vacations</option>
              </select>
            </form>
          </div>
        )}
      </section>

      <section className={s.second_section}>
            <div className={s.tabel}>
                <div className={s.cell}>
                    <h4 style={{maxWidth: "162px"}}>Employee ID</h4>
                    <h4>Name</h4>
                    <h4>Email</h4>
                    <h4>Vacation days</h4>
                    <h4>Status</h4>
                </div>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>
                <NavLink to ="/main/profile" className={s.cell} >
                    <p style={{display: "flex", justifyContent: "right", padding: "0px 13px 0 0", maxWidth: "162px"}}>4325</p>
                    <p>Amir Bakirov</p>
                    <p>bakirov_am@auca.kg</p>
                    <p>13 days</p>
                    <p>On Vacation</p>
                </NavLink>

            </div>
        </section>

    </>
  );
};

export default Dashboard;
