import React from "react";
import style from "./CounterItem.module.css";

// const style = {
//     background: "red",
//     color: "white",
//     margin: "1rem",
//     padding: "1rem",
//     fontSize: "18px",
//     borderRadius: "1rem",
//   };
const CounterItems = ({ id, title, handleDelete, handleUpdate }) => {
  return (
    <div className={style.title}>
      <span>
        <input
          className={style.input}
          type="text"
          value={title}
          key={id}
          onChange={(e) => {
            handleUpdate(e.target.value, id);
          }}
        />
      </span>
      <button
        className={style.delete}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CounterItems;
