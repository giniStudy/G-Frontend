import React from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync';

async function getBoardDetail(page, category) {
  const response = await axios.get(`/test`);
  return response.data;
}

function BoardDetail(match) {
  const { id } = match.params;
  const [board] = useAsync(() => getBoardDetail(id), [id]);
  return (
    <section>
      <div>{board.id}</div>
    </section>
  );
}

export default BoardDetail;
