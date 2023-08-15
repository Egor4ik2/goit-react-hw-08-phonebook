import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 24px;
  width: 140px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: #3388cc;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d5d89;
  }
`;

const Text = styled.p`
  padding: 8px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #555;
`;

export { Button, Text };
