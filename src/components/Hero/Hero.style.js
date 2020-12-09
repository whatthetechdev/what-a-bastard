import styled, { keyframes } from "styled-components"

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  background-color: #000000;
  padding: 20px;
  color: #ffffff;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 2.5em;
  animation: ${fadeInLeft} 1s;
`
