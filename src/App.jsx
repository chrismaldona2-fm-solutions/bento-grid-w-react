import { useState } from "react";
import { Bento } from "./components/Bento/Bento.jsx";
import { Form } from "./components/Form/Form.jsx";
import "./App.css";
import {
  CardFive,
  CardFour,
  CardOne,
  CardThree,
  CardTwo,
  CardSix,
  CardSeven,
  CardEight,
} from "./components/Card/DefaultCards/DefaultCards.jsx";

const CARDS = [
  <CardOne key={1} />,
  <CardTwo key={2} />,
  <CardThree key={3} />,
  <CardFour key={4} />,
  <CardFive key={5} />,
  <CardSix key={6} />,
  <CardSeven key={7} />,
  <CardEight key={8} />,
];

function App() {
  const [cards, setCards] = useState(CARDS);
  const [cardsCount, setCardsCount] = useState(CARDS.length);
  return (
    <>
      <main className="hero">
        <Form
          saveCardToBento={setCards}
          cardsCount={cardsCount}
          updateCardsCount={setCardsCount}
        />
        <Bento cards={cards} />
      </main>
    </>
  );
}

export default App;
