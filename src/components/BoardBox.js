import React from 'react';
import Board from './Board';

function BoardBox({boards}) {
    return (
        <ul>
            {process.env.REACT_APP_API_HOST}
            {boards.map(  board =>
                <Board key={board.id} id={board.id} content={board.content}/>
                )}
        </ul>
    );
}
export default BoardBox;