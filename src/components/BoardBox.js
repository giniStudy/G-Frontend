import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync';
import Board from './Board';
import '../css/Board.css';
import { Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../css/Navi.sass';

async function getBoards(page, category) {
  const response = await axios.get(
    `/board?page=${page}&size=3${
      // TODO 예외처리 != ?? 처리 필요
      category != 0 ? '&categoryId=' + category : ''
    }`,
  );
  return response.data.data;
}

async function getCategory() {
  const response = await axios.get(`/category`);
  return response.data;
}

function BoardBox({ match }) {
  const [categorys] = useAsync(getCategory, []);
  const { data: category } = categorys;

  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(0);
  const { categorySeq } = match.params;

  const [state] = useAsync(() => getBoards(page, categorySeq), [
    page,
    categorySeq,
  ]);

  // const { loading, data: { content: _boards, totalPages } = { content: [], totalPages: 1 }, error } = state.data? state: {};
  const { loading, data, error } = state;
  const { content: newBoard, total_pages: totalPages } = data || {};

  const fetchBoards = () => setPage(page + 1);

  useEffect(() => {
    setBoards([...boards, ...(newBoard || [])]);
  }, [newBoard]);

  const PlusButton = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
  `;

  const ButtonSize = {
    fontSize: '1.9em',
    width: '1.9em',
    height: '1.9em',
  };

  return (
    <section>
      <PlusButton>
        <Link to="/board/add">
          <Button type="primary" shape="circle" style={ButtonSize}>
            +
          </Button>
        </Link>
      </PlusButton>
      <ol className="nav-box">
        <Link
          to={`/boards/0`}
          className="nav-tab"
          key={0}
          onClick={() => {
            setBoards([]);
            setPage(0);
          }}
        >
          전체보기
        </Link>
        {category &&
          category.map((cc) => (
            <Link
              to={`/boards/${cc.category_id}`}
              className="nav-tab"
              key={cc.category_id}
              onClick={() => {
                setBoards([]);
                setPage(0);
              }}
            >
              {cc.name}
            </Link>
          ))}
      </ol>
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
                    key={board.board_id}
                    id={board.board_id}
                    content={board.title}
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
