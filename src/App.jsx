import data from "./data.js";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const cards = data.map((log) => {
    return <Card {...log} />;
  });
  console.log(cards);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {cards}
      </div>
    </div>
  );
}
