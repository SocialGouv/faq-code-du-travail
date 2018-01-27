import styled from "styled-components";
import { Block } from "./components";

export const Textarea = styled.textarea`
  border: 1px solid silver;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 5px;
  margin-top: 10px;
  resizable: false;
  outline: none;
`;

export const SubmitButton = styled.button`
  background: #00419c;
  color: white;
  border: 1px solid silver;
  font-size: 1em;
  padding: 5px;
  position: relative;
  right: 0;
  outline: none;
  :hover {
    background: #0056cf;
  }
  :active {
    background: #0061e9;
  }
`;

export const RightAlign = styled.div`
  text-align: right;
  width: 100%;
`;

const SendMessage = () => (
  <Block style={{ padding: "10px 20px" }}>
    <Textarea placeholder="Posez votre question" defaultValue="" />
    <RightAlign>
      <SubmitButton>Envoyer</SubmitButton>
    </RightAlign>
  </Block>
);

export default SendMessage;
