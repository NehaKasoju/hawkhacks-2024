/* eslint-disable react/prop-types */
import "./Opportunity.css"

const Opportunity = ({ name, location, date, description, tags }) => {

  return (
    <div className="parent">
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h2>{date}</h2>
      <p>{description}</p>
      {tags.map((tag) => (
        <div key={tag} className="tags"><p>{tag}</p></div>
      ))}
    </div>
  );
};

export default Opportunity;
