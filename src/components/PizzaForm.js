import React, {useState, useEffect} from "react";

function PizzaForm({onUpdatePizza, editPizza}) {

  const [formData, setFormData] = useState({
    id: editPizza.id,
    topping: editPizza.topping,
    size: editPizza.size,
    vegetarian: editPizza.vegetarian
  })

  //Change Handlers
  function handleChangeTopping(e) {
    console.log(e.target.value)
    setFormData({...formData, topping: e.target.value})
  }
  function handleSizeChange(e) {
    console.log(e.target.value)
    setFormData({...formData, size: e.target.value})
  }
  function handleVegetarianChange(e) {
    console.log(e.target.value)
    if (e.target.value === "Vegetarian") {
      setFormData({...formData, vegetarian: true})
    }
    if (e.target.value === "Not Vegetarian") {
      setFormData({...formData, vegetarian: false})
    }
  }

  //set Form Data
  useEffect(() => {
    setFormData({
      id: editPizza.id,
      topping: editPizza.topping,
      size: editPizza.size,
      vegetarian: editPizza.vegetarian
    })
  }, [editPizza])

  function handleSubmit(e) {
    e.preventDefault()
    onUpdatePizza(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            value={formData.topping}
            onChange={handleChangeTopping}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select value={formData.size} onChange={handleSizeChange} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleVegetarianChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleVegetarianChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
