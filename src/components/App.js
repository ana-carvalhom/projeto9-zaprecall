import GlobalStyle from "../css/GlobalStyle";
import styled from 'styled-components';
import Container from "./Container";
import Topo from "./Topo";




export default function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Topo/>
      <Container />
      </ScreenContainer>
  );
}


const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`