import React, { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
const cards = [
  "Things Fall Apart",
  "The Fairy tales",
  "The Divine Comedy",
  "The Epic Of Gilgamesh",
  "The Book Of Job",
];
function App() {
  useEffect(() => {
    const spiner = gsap.timeline({
      repeat: 0,
      onComplete: displayRandomCard,
    });
    spiner.to(".reel", { rotation: 360, duration: 8 });
  }, []);
  const displayRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    document.getElementById("random-card").innerText = randomCard;
  };
  return (
    <div className="App">
      <div className="reel">
        <h1 className="text">OMAD</h1>
        <div className="spokes"></div>
      </div>
      <div className="random-card" id="random-card"></div>
    </div>
  );
}
export default App;
