import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({
    topping: '',
    size: '',
    vegetarian: false
  })

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

  function handleAddPizzaToEdit(pizzaObj) {
    setEditPizza(pizzaObj)
  }

  function handleUpdatePizza(pizzaObj) {
    fetch(`http://localhost:3001/pizzas/${pizzaObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: pizzaObj.topping,
        size: pizzaObj.size,
        vegetarian: pizzaObj.vegetarian
      })
    })
    .then(res => res.json())
    .then(data => {
      const newArray = pizzas.map(pizza => {
        if (pizza.id === data.id) {
          return data;
        } else {
          return pizza
        }
      })
      setPizzas(newArray)
    })
  }

  return (
    <>
      <Header />
      <PizzaForm onUpdatePizza={handleUpdatePizza} editPizza={editPizza} />
      <PizzaList handleAddPizzaToEdit={handleAddPizzaToEdit} pizzas={pizzas} />
    </>
  );
}

export default App;
