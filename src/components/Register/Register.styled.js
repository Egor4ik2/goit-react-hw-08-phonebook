import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  font-size: 16px;
  color: #666;
`;

export { Form, Label };
