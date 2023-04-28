import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotationAnimation} 2s linear infinite;
  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🔥</Emoji>
        <Emoji as='p'>💭</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
