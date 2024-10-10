import "./Card.css";
import PropTypes from "prop-types";

export function Card(props) {
  const { style, title, description } = props;
  const cardClass = `card ${style}`;
  return (
    <div className={cardClass}>
      <h2 className="card__title">{title}</h2>
      {description ? <p className="card__description">{description}</p> : ""}
    </div>
  );
}

Card.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
