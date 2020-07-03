import styled from 'styled-components';

export const CardContainer = styled.div`
  /* min-width: 100px; */
  width: 100%;
  display: ${({ display }) => display === 'horizontal' && 'flex'};
  /* display: flex; */
`;

export const ProductLabel = styled.div`
  margin-top: 5px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-size: 12px;
  width: ${({ width }) => width || '100%'};
  margin-left: ${({ display }) => display === 'horizontal' && '10px'};
`;

export const CardImage = styled.div`
  position: relative;
`;

export const CardContent = styled.div`
  display: ${({ display }) => display === 'horizontal' ? 'block' : 'flex'};
  width: 100%;
  color: black;
`;

export const LovedBtnWrapper = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 5px;
`;
