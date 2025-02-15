import React from "react";
import Pizza from "./Pizza";

function PizzaList({handleAddPizzaToEdit, pizzas}) {
  const pizzaList = pizzas.map(pizza => {
    return <Pizza key={pizza.id} onAddPizzaToEdit={handleAddPizzaToEdit} pizza={pizza} />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaList}
      </tbody>
    </table>
  );
}

export default PizzaList;
