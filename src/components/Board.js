import React from 'react';
import { withRouter } from 'react-router-dom';

function Board(props) {
  const {history} = props;
  return (
    <tr onClick={() => {history.push(`/board/${props.id}`)}}>   
      <td>{props.id}</td>
      <td>
        {props.content}
      </td>
      <td>2017.06.15</td>
    </tr>
  );
}

export default withRouter( Board );
