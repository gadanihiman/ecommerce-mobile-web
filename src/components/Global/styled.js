/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Image = styled.img`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '100px'};
  object-fit: cover;
`;

export const Section = styled.section`
  margin-bottom: 20px;
`;
