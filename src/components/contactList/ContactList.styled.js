import styled from 'styled-components';

const StyledContactsList = styled.ul`
  margin: 0;
  padding: 20px 2px;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Text = styled.span`
  flex-grow: 1;
  padding: 0 10px;
  color: #333;
  font-size: 16px;
`;

const Number = styled.span`
  margin-left: 10px;
  color: #555;
  font-size: 14px;
`;

const DeleteBtn = styled.button`
  width: 80px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #3388cc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d5d89;
  }
`;

export { StyledContactsList, ListItem, Text, Number, DeleteBtn };
