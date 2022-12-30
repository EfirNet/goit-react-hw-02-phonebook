import styled from 'styled-components';

export const Label = styled.label`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 20px 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  background-color: #00000090;
`;

export const Input = styled.input`
  background-color: #ffffff7f;
  width: 240px;
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
