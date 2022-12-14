import React from "react";
import styled from "styled-components";
import { useTodoState } from '../TodoContext';

const TodoHeaderBlock = styled.div`
  padding: 48px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHeader() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <TodoHeaderBlock>
      <h1>2022년 8월 17일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeaderBlock>
  );
}

export default TodoHeader;
