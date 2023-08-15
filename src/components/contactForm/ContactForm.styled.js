import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 400px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3388cc;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
  color: #777;
`;

const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: #3388cc;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d5d89;
  }
`;

export { StyledContactForm, Input, Label, Button };
