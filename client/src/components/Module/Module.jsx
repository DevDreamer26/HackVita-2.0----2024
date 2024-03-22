import React from "react";
import "./Module.scss";
import modules from "../../assets/module.json"
const Module = () => {
  
  

  return (
    <>
      <div className="courses-container">
        <div className="course-about">
          <h2>Our Courses</h2>
          {/* <p className="course-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam doloribus ab possimus sapiente deserunt vel incidunt eligendi, accusantium, assumenda quia! Quod, id adipisci ipsum expedita quos sint molestiae nemo.
          </p> */}
        </div>
        <div className="courses-list">
          {modules.map((module) => (
            <div key={module.id} className="course">
              <img src={module.image} alt={`${module.name} Image`} />
              <h2>{module.name}</h2>
              <p>{module.description}</p>
              <button>Read more...</button>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Module;


