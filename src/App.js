import "./App.css";
import NavBar from "./components/navBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cardElms = data.map(card => {
    return <Card 
      key={card.id} 
      items = {card}
      />
  })
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <section className="card--list">
        {cardElms}
      </section>
    </div>
  );
}

export default App;
