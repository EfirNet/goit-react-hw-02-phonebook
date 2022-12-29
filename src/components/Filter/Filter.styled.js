import styled from 'styled-components';

export const Label = styled.label`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 20px 0;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
`;

export const Input = styled.input`
  background-color: #ffffff7f;
  width: 190px;
  border-radius: 5px;
  margin: 0 auto;
  height: 23px;
  margin-top: 15px;
  border: 1px solid #f3b9ee;
  &::placeholder {
    color: #000;
    text-transform: lowercase;
    font-size: 12px;
    letter-spacing: 1px;
    padding-left: 3px;
  }
`;
