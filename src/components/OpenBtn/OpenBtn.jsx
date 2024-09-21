import styled from "styled-components";
import Timer from "../Timer/Timer";

const Title = styled.h1`
  text-transform: uppercase;
  color: #eee;
  width: 550px;
`;

const Block = styled.div`
  position: absolute;
  right: 30px;
  /* top: 50%; */
  bottom: 45%;
`;
const Button = styled.button`
  background-color: #77b901;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  border-radius: 1px;
`;
const Box = styled.div`
  display: flex;
  padding-top: 10px;
  padding-right: 20px;
  justify-content: space-between;
  align-content: center;
`;
const OpenBtn = ({ openModal }) => {
  return (
    <Block>
      <Title>Buy the newest RTX 4090 for the lowest price</Title>
      <Box>
        <Timer>01:23:45</Timer>
        <Button onClick={openModal}>Purchase</Button>
      </Box>
    </Block>
  );
};

export default OpenBtn;
