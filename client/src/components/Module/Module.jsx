import React from "react";
import "./Module.scss";

const Module = () => {
  const modules = [
    {
      id: 1,
      name: "XXX",
      description:
        "asskfkgngfgjijgrnfkb fgnhgidhifgndi gdgdi djfdj ",
      image: "/images/",
    },
    {
      id: 2,
      name: "KJSDBVJKDJ VKDNK",
      description:
        "Ainlj gjjbfd fbj fjbfj fb fjf fjbfj f",
      image: "/images/",
    },
    {
      id: 3,
      name: "cjhsvdhs",
      description:
        "Ancksb c sjhjs dsbdsjd ",
      image: "/images/",
    },
    {
      id: 4,
      name: "dfghsfghg",
      description:
        "dfgdfgfgfdgfg",
      image: "/images/",
    },
    {
      id: 5,
      name: "sadfsd",
      description:
        "sfsdfsdfdsf gkdsfkgf dg dkgkd gk dkg dg ytuyiuyj sdwd",
      image: "/images/",
    },
    {
      id: 6,
      name: "AA ssknk sk cs",
      description:
        "huismcisnc sicsicn scjnsincs knkxscs",
      image: "/images/",
    },
    
  ];
  

  return (
    <>
      <div className="courses-container">
        <div className="course-about">
          <h2>Our Courses</h2>
          <p className="course-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam doloribus ab possimus sapiente deserunt vel incidunt eligendi, accusantium, assumenda quia! Quod, id adipisci ipsum expedita quos sint molestiae nemo.
          </p>
        </div>
        <div className="courses-list">
          {modules.map((module) => (
            <div key={module.id} className="course">
              <img src={module.image} alt={`${module.name} Image`} />
              <h2>{module.name}</h2>
              <p>{module.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Module;


