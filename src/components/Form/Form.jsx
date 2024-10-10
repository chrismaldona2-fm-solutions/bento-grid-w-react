import { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

const CARD_STYLES = [
  "card--yellow",
  "card--purple",
  "card--light-purple",
  "card--white",
  "card--cream",
];

export function Form({ saveCardToBento, cardsCount, updateCardsCount }) {
  const [newCardTitle, setNewCardTitle] = useState("Create your own cards.");
  const [newCardDesc, setNewCardDesc] = useState("Using react components!");
  const [newCardStyle, setNewCardStyle] = useState("");
  const [cardTypeCount, setCardTypeCount] = useState(0);

  const getRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * CARD_STYLES.length);
    return CARD_STYLES[randomIndex];
  };

  const getBoxType = (count) => {
    const cyclePosition = count % 6;
    if (cyclePosition === 0 || cyclePosition === 4) {
      return "doublecell-box card--medium";
    } else {
      return "singlecell-box card--small";
    }
  };

  const handleAddCard = () => {
    const boxType = getBoxType(cardTypeCount);
    saveCardToBento((cards) => [
      ...cards,
      {
        id: cardsCount + 1,
        style: `${
          newCardStyle === "" ? getRandomStyle() : newCardStyle
        } ${boxType}`,
        title: newCardTitle,
        description: newCardDesc,
      },
    ]);
    updateCardsCount((prevCardCount) => ++prevCardCount);
    setCardTypeCount((prevCardTypeCount) => ++prevCardTypeCount);
  };
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddCard();
      }}
    >
      <div className="form__input">
        <label htmlFor="cardTitleInp">
          Title<span>*</span>
        </label>
        <input
          type="text"
          id="cardTitleInp"
          name="cardTitle"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
          required
        />
      </div>
      <div className="wrap">
        <div className="form__input">
          <label htmlFor="cardDescInp">Description</label>
          <input
            type="text"
            id="cardDescInp"
            name="cardDesc"
            value={newCardDesc}
            onChange={(e) => setNewCardDesc(e.target.value)}
          />
        </div>
        <div className="form__input">
          <label htmlFor="cardStyleInp">Color</label>
          <select
            id="cardStyleInp"
            name="cardStyle"
            value={newCardStyle}
            onChange={(e) => setNewCardStyle(e.target.value)}
          >
            <option value="">Random</option>
            <option value="card--yellow">Yellow</option>
            <option value="card--white">White</option>
            <option value="card--cream">Cream</option>
            <option value="card--purple">Purple</option>
            <option value="card--light-purple">Light purple</option>
          </select>
        </div>
      </div>

      <button className="form__submit">Add card</button>
    </form>
  );
}

Form.propTypes = {
  saveCardToBento: PropTypes.func.isRequired,
  cardsCount: PropTypes.number.isRequired,
  updateCardsCount: PropTypes.func.isRequired,
};
