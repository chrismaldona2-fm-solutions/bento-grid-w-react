import "./Bento.css";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card/Card.jsx";

export function Bento({ cards }) {
  return (
    <div className="bento">
      {cards.map((card) =>
        React.isValidElement(card) ? (
          React.cloneElement(card)
        ) : (
          <Card
            key={card?.id}
            style={card.style}
            title={card.title}
            description={card.description}
          />
        )
      )}
    </div>
  );
}

Bento.propTypes = {
  cards: PropTypes.array,
};
