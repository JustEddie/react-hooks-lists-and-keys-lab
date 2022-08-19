import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyElements = technologies.map((element)=>
  <span key={element}>{element}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyElements/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
