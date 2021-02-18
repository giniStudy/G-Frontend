import React from 'react';
import Board from './Board';

function BoardBox({boards}) {
    return (
        <ul>
            {boards.map(  board =>
                <Board key={board.id} id={board.id} content={board.content}/>
                )}
        </ul>
    );
}
export default BoardBox;