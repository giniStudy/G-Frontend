import React from 'react';

function Board(porps){
    
    return (
        <li>
            <div>
                {porps.content}
            </div>
        </li>
    );
}

export default Board;