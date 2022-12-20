import { useState } from "react";

function Card(props) {
  let name = props.name;
  let price = props.price;

  const [quantity, setQuantity] = useState(1);

  let total = Number(props.total);
  let setTotal = props.setTotal;

  let decrease_quantity = () => {
    if (quantity === 1) {
    } else {
      setQuantity(quantity - 1);
      setTotal(total - price);
    }
  };

  let increase_quantity = () => {
    setQuantity(quantity + 1);
    let new_total = Number(total) + Number(price);
    setTotal(new_total);
  };

  return (
    <h2>
      {" "}
      {name} ${price} <span onClick={decrease_quantity}> - </span> {quantity}{" "}
      <span onClick={increase_quantity}> + </span>{" "}
    </h2>
  );
}

export default Card;
