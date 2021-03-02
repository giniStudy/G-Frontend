import React from "react";

function Board(porps) {
  return (
    <tr>
      <td>{porps.id}</td>
      <th>
        <a href="#!">{porps.content}</a>
      </th>
      <td>2017.06.15</td>
    </tr>
  );
}

export default Board;
