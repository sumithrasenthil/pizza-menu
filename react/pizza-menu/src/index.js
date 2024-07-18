import React from "react";
import ReactDom from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function Header () {
  const style = {};
  return(
    <header className="header">
        <h1 style={style}>Fast Pizzeria.co</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaLength = pizzas.length;
  return(
    <main className="menu">
      <h2>Our Menu</h2>
      {
        pizzaLength > 0 ? 
        <>
          <p>Authentic Italian cusien , 6 creative dishes to choose from.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) =>  <Pizza pizzaObj={pizza} key={pizza.name}/>)}
          </ul> </> : 
        (<p>We are working on the menu please come back later</p>)
      }
    </main>
  )
}

function Pizza({pizzaObj}){
  

  return(
      <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
          <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{ pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
          </div>
      </li>
  )
}

function Footer(){
  const hours = new Date().getHours();
  const isOpen = hours >= 12 && hours <=22;
  return(
    <footer className="footer">
      <div className="order">
      {
        isOpen ? <p>We are open untill 22::00 come visit us or order online</p> : <p>We are closed please visit later</p>
      }
      <button className="btn">Order Now</button>
      </div>
    </footer>
  )
}


function App(){
    return(
    <div className="container">
        <h1>Hello Pizza Menu</h1>
        < Header />
        < Menu />
        < Footer/>
    </div>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
