import React from "react";
import Item from "./Item";

export default function Items() {
  const book = ["Buku 1", "Buku 2", "Buku 3"];

  return (
    <ul>
      {book.map((item) => (
        <Item key={item} item={item} />
      ))}
    </ul>
  );
}
