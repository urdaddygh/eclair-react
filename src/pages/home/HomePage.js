import React from "react";
import { airmanas, cake_icon, fireworks } from "../../Images";
import s from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <>
      <section className={s.first_section}>
        <div className={s.first_section__cont}>
          <img src={airmanas} alt="" />
          <div className={s.first_section__text}>
            <h3 className={s.aboutus}>About us:</h3>
            <p className={s.first_text}>
              Lorem ipsum dolor sit amet consectetur. Duis quam aliquam nunc
              cursus commodo nullam sed. Cras arcu sit fermentum mus elementum.
              Nunc eu lectus odio ut lectus auctor. Et quam ullamcorper sapien
              nibh posuere diam. Phasellus morbi amet ipsum eget gravida tempus.
              Magnis ut est odio non elit eu egestas. Arcu feugiat lectus orci
              augue justo libero. Tellus fames pretium augue porta arcu sagittis
              tincidunt sociis vel. Cras nisl tempus egestas in nulla.
            </p>
          </div>
        </div>
      </section>

      <section className={s.second_section}>
        <div className={s.first_box}>
          <h2>announcements</h2>
          <ul>
            <div className={s.first_box__flex}>
              <li>Kondrat Olegovich:</li>
              <p>
                Lorem ipsum dolor sit amet consectetur. Enim neque aenean
                imperdiet turpis vitae nibh hac.
              </p>
              <h6>2hr ago</h6>
            </div>
          </ul>
          <ul>
            <div className={s.first_box__flex}>
              <li>Kondrat Olegovich:</li>
              <p>
                Lorem ipsum dolor sit amet consectetur. Enim neque aenean
                imperdiet turpis vitae nibh hac.
              </p>
              <h6>2hr ago</h6>
            </div>
          </ul>
          <ul>
            <div className={s.first_box__flex}>
              <li>Kondrat Olegovich:</li>
              <p>
                Lorem ipsum dolor sit amet consectetur. Enim neque aenean
                imperdiet turpis vitae nibh hac.
              </p>
              <h6>2hr ago</h6>
            </div>
          </ul>
          <ul>
            <div className={s.first_box__flex}>
              <li>Kondrat Olegovich:</li>
              <p>
                Lorem ipsum dolor sit amet consectetur. Enim neque aenean
                imperdiet turpis vitae nibh hac.
              </p>
              <h6>2hr ago</h6>
            </div>
          </ul>
        </div>
        <div className={s.second_box}>
          <div className={s.birthday}>
            <h2>Birthdays at february</h2>
            <img src={cake_icon} />
          </div>
          <div className={s.birthday_list}>
            <div style={{ display: "flex" }}>
              
              {/* <p>2 - Burov Artem Evgenievich</p> */}
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              
              <p>12 - Knyazev Kondrat Olegovich</p>
              <img
                src={fireworks}
                alt=""
                style={{ position: "absolute", bottom: "30px", right: "150px" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              
              <p>22 - Gerasimov Svyatoslav Stanislavovich</p>
            </div>
            <div style={{ display: "flex" }}>
           
              <p>27 - Bobylev Ovid Lavrentievich</p>
            </div>
            <div style={{ display: "flex" }}>
            
              <p>28 - Kondratiev Artem Yaroslavovich</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
