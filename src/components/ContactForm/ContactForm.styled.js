import styled from 'styled-components';

export const Form = styled.form`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 250px;
      padding: 30px 25px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      background-color: #00000090;
    `;

export const Label = styled.label`
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 600;
    `;

export const Input = styled.input`
      width: 240px;
      height: 23px;
      border-radius: 5px;
      padding: 3px;
      margin: 5px 0 20px;
      background-color: #ffffff7f;
      border: 1px solid #f3b9ee;
      &::placeholder {
        color: #000;
        text-transform: lowercase;
        font-size: 12px;
        letter-spacing: 1px;
        padding-left: 3px;
        /* &:hover {
          box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
            rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
        } */
      }
    `;

export const Button = styled.button`
      width: 200px;
      height: 23px;
      padding: 2px;
      border-radius: 5px;
      margin: 0 auto;
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: #ffffff7f;
      border: 0;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        background-color: #ffffff2f;
      }
    `;
