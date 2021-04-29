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
  const {content, board_id} = board || {};
  return (
    <section>
      <div>{id}</div>
      <div>{board_id}</div>
      <div>{content}</div>
    </section>
  );
}

export default BoardDetail;
