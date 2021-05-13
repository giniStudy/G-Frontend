import React from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync';

async function getBoardDetail(id) {
  const response = await axios.get(`/board/${id}`);
  
  return response.data;
}

function BoardDetail({match}) {
  const { id } = match.params;
  const [data] = useAsync(() => getBoardDetail(id), [id]);
  const {loading, data:board, error} = data;
  const {content, board_id, title} = board || {};
 
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{board_id}</div>
      <div>{content}</div>
    </div>
  );
}

export default BoardDetail;
