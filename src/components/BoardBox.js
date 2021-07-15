import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAsync from '../hook/useAsync';
import Board from './Board';
import '../css/Board.sass';
import { Button } from 'antd';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import '../css/Navi.sass';
import { Spin, Switch, Modal } from 'antd';
import stringHelper from '../util/stringHelper';

async function getBoards(page, category) {
  const response = await axios.get(
    `/board?page=${page}&size=3${
      // TODO 예외처리 != ?? 처리 필요
      category != 0 ? '&categoryId=' + category : ''
    }`
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

  const [state] = useAsync(
    () => getBoards(page, categorySeq),

    [page, categorySeq]
  );

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
    <section className="mainSection">
      <PlusButton>
        <Link to="/board/add">
          <Button type="primary" shape="circle" style={ButtonSize}>
            +
          </Button>
        </Link>
      </PlusButton>
      <div className="navBox">
        <div className="navHeader">목록</div>
        <ol className="">
          <NavLink
            to={`/boards/0`}
            className="navTab"
            activeClassName="on"
            key={0}
            onClick={() => {
              setBoards([]);
              setPage(0);
            }}
          >
            전체보기
          </NavLink>
          {category &&
            category.map((cc) => (
              <NavLink
                to={`/boards/${cc.category_id}`}
                className="navTab"
                key={cc.category_id}
                activeClassName="on"
                onClick={() => {
                  setBoards([]);
                  setPage(0);
                }}
              >
                {cc.name}
              </NavLink>
            ))}
        </ol>
      </div>
      <div className="boardRow boardBox">
        <div className="boardList">
          {boards &&
            boards.map((board) => (
              <Board
                key={board.board_id}
                id={board.board_id}
                title={board.title}
                content={board.content}
              />
            ))}
          {loading && <Spin spinning={loading}></Spin>}
          {error && (
            <div>
              <div>error</div>
            </div>
          )}

          {totalPages - 1 !== page && (
            <Button block onClick={fetchBoards}>
              더보기
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
export default BoardBox;
