import styled from 'styled-components';

export const Ul = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
  list-style: none;
padding: 20px 0;
margin: 0;
background-color: #00000090;
 border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;


export const Button = styled.button`
      width: 200px;
      height: 20px;
      padding: 2px;
      border-radius: 5px;
      margin: 5px auto 15px;
      /* text-transform: uppercase; */
      letter-spacing: 2px;
      background-color: #ffffff7f;

      border: 0;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

      /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset; */
      &:hover {
        box-shadow:rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      background-color: #ffffff2f;
      }
    `;

export const Name = styled.div`
font-size: 20px;
font-weight: 600;
  color: black;
`;

export const Number = styled.div`
font-size: 16px;
font-style: italic;
  color: black;
`;
