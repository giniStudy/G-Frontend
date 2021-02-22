import React from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync'
import Board from './Board';

async function getUsers(){
    const response = await axios.get(
        `/board`
    )
    console.log(response.data);
    return response.data.content;
}

function BoardBox({boards}) {
    const [state, refetch] = useAsync(getUsers, []);
    const { loading, data: content, error } = state;

    if(loading) 
        return <div>로딩중...</div>;
    if(error) 
        return <div>error</div>;
    if(!content) 
        return null;
    return (
        <ul>
            {process.env.REACT_APP_API_HOST}
            {content.map( board =>
                <Board key={board.bid} id={board.bid} content={board.content}/>
                )}
        </ul>
    );
}
export default BoardBox;