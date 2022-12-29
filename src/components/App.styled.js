import styled from 'styled-components';

export const Title = styled.h1`
      font-size: 30px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 700;
      color: #B4A7B3;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
border-radius: 5px;
    `;

export const Wrap = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 250px;
      margin: 50px auto;
      padding: 20px;
      background-color: #00000090;
      border-radius: 5px;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
      &:hover {
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      }
    `;

export const Subtitle = styled.h2`
    margin-top: 20px;
   font-size: 26px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      color: #B4A7B3;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      border-radius: 5px;
    `;
