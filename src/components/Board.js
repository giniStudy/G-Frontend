import React from 'react';
import { withRouter } from 'react-router-dom';

function Board(props) {
  const {history} = props;
  return (
    <div className="board" onClick={() => {history.push(`/board/${props.id}`)}}>   
      <div className="title">{props.title}</div>
      <p>
        {props.content}
      </p>
      <div className="subInfo">2017.06.15</div>
    </div>
  );
}

export default withRouter( Board );
