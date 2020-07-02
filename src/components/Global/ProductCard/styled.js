import styled from 'styled-components';

export const CardContainer = styled.div`
  /* min-width: 100px; */
  width: 100%;
  /* display: flex; */
`;

export const ProductName = styled.div`
  margin-top: 5px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-size: 12px;
`;

export const CardImage = styled.div`
  position: relative;
`;

export const LovedBtnWrapper = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 5px;
`;
