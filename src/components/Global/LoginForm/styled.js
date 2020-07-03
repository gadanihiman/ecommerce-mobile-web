import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  margin-top: 30px;
  border: 1px solid black;
  padding: 20px 10px;
  background-color: white;
  /* min-width: 100px;
  display: flex; */
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonSection = styled.div`
  display: flex;
  place-content: space-between;
`;

export const SocialButton = styled(Button)`
  width: 200px;
  margin-bottom: 10px;
  color: white;
`;