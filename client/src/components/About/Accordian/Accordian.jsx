import { useState } from "react";
import data from "./data";
import "./Accordian.scss";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected);
  return (
    <div className="acc-wrapper">
        <h1 className="faq-heading">FAQ</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h5>{dataItem.question}</h5>
                <span>+</span>
              </div>
              {selected === dataItem.id && (
                <div className="acc-content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
