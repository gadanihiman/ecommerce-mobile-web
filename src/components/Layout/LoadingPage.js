import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 60px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #d31145;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

// const Image = styled.img`
//   width: 84px;
//   height: 84px;
// `

const Title = styled.h4`
  margin-top: 50px;
  margin-bottom: 10px;
  font-weight: bold;
  font-stretch: normal;
`

const Desc = styled.div`
  margin-bottom: 50px;
  font-size: medium;
  font-weight: 500;
`

const Loading = () => {
  return (
    <Wrapper id="snipper_loading">
      <Title>HANG ON A MOMENT</Title>
      <Desc>Your page is loading...</Desc>
      <Spinner />
    </Wrapper>
  )
}

export default Loading
