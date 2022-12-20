import "./styles.css";
import { useState } from "react";
import Card from "./item_card";

export default function App() {
  const [total, setTotal] = useState(130);
  return (
    <div className="App">
      <h2>hELLO Moto </h2>
      <Card name="Noodles" price="30" total={total} setTotal={setTotal} />
      <Card name="Biriyani" price="90" total={total} setTotal={setTotal} />
      <Card name="Chips" price="10" total={total} setTotal={setTotal} />

      <p> Total : {total}</p>
    </div>
  );
}
