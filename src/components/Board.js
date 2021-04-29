import React from 'react';
import { Link } from 'react-router-dom';

function Board(porps) {
  return (
    <tr>
      
      <td><Link to={`/board/${porps.id}`}>{porps.id}</Link></td>
      <td>
        <a href="#!">{porps.content}</a>
      </td>
      <td>2017.06.15</td>
      
    </tr>
  );
}

export default Board;
