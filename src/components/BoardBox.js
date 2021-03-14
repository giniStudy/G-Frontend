import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync';
import Board from './Board';
import '../css/Board.css';

async function getBoards(page) {
  const response = await axios.get(`/board?page=${page}&size=3`);
  return response.data;
}

function BoardBox() {
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(0);
  const [state] = useAsync(() => getBoards(page), [page]);
  // const { loading, data: { content: _boards, totalPages } = { content: [], totalPages: 1 }, error } = state.data? state: {};
  const { loading, data, error } = state;
  const { content: newBoard, totalPages } = data || {};

  const fetchBoards = () => setPage(page + 1);

  useEffect(() => {
    setBoards([...boards, ...(newBoard || [])]);
  }, [newBoard]);

  return (
    <section>
      <div className="page-title">
        <div className="container">
          <h3>게시판</h3>
        </div>
      </div>
      <div className="board-list">
        <table className="board-table">
          <thead>
            <tr>
              <th scope="col" className="th-num">
                번호
              </th>
              <th scope="col" className="th-title">
                제목
              </th>
              <th scope="col" className="th-date">
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            {boards &&
              boards.map((board) => (
                <Board key={board.bid} id={board.bid} content={board.content} />
              ))}
            {loading && (
              <tr>
                <td>로딩중...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td>error</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {totalPages - 1 !== page && <button onClick={fetchBoards}>다음</button>}
    </section>
  );
}
export default BoardBox;
