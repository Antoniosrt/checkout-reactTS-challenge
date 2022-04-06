import styled from "styled-components";
export const Div = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "label " "input";
`;
export const LabelInput = styled.label`
grid-area: label;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 15px;


  /* identical to box height */

  /* Gray 2 */
  color: #4f4f4f;
`;
export const Input = styled.input`
  /* Gray 3 */
  grid-area: input;
  border: 1px solid #828282;
  height: 40px;
  box-sizing: border-box;
  color: #828282;
  width: 100%;
  border-radius: 12px;
`;
