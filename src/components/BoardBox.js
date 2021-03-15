import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync';
import Board from './Board';
import '../css/Board.css';
import { Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  const PlusButton = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
  `;
  return (
    <section>
      <PlusButton>
        <Link to="/boards/add">
          <Button type="primary" shape="circle">
            +
          </Button>
        </Link>
      </PlusButton>
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
                <Board
                  key={board.b_id}
                  id={board.b_id}
                  content={board.content}
                />
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
        {totalPages - 1 !== page && (
          <Button block onClick={fetchBoards}>
            다음
          </Button>
        )}
      </div>
    </section>
  );
}
export default BoardBox;
