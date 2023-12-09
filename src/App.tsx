import './App.css'
import Card from './components/card'

function App() {
  const cards: Card[] = [
    {
      img: "https://i.etsystatic.com/20213817/r/il/dc8b4a/1945244162/il_570xN.1945244162_r7k8.jpg",
      title: "Card title",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Special title treatment",
      description: "With supporting text below as a natural lead-in to additional content.",
    },
  ]

  type Card = {
    img?: string,
    title: string,
    description: string,
  }

  return (
    <div className="container">
      {cards.map((el, index) => 
        <Card key={index} img={el.img}>
          <div className="card-body">
            <h5 className="card-title">{el.title}</h5>
            <p className="card-text">{el.description}</p>
            <a href="#" className="btn">Go somewhere</a>
          </div>
        </Card>
      )}
    </div>
  )
}

export default App
