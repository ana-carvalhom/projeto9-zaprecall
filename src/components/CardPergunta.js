import styled from "styled-components"
import setaPlay from "../img/seta_play.png"
import setaVirar from "../img/seta_virar.png"



export default function (){
    return (
        <>
        <PerguntaFechada>
            <PerguntaFechadaConteudo>Pergunta 1</PerguntaFechadaConteudo>
            <img src={setaPlay} alt="botão de play para inicar o jogo"/>
            </PerguntaFechada>
            <PerguntaFechada>
            <PerguntaFechadaConteudo>Pergunta 1</PerguntaFechadaConteudo>
            <img src={setaPlay} alt="botão de play para inicar o jogo"/>
            </PerguntaFechada>
            
        <PerguntaAberta>Aqui tem uma pergunta aberta
            <img src={setaVirar} alt="botão para virar o card para ver a resposta"/>
        </PerguntaAberta>
        <ContainerBotoes>
        <Botoes>Não lembrei</Botoes>
        <Botoes>Quase não lembrei</Botoes>
        <Botoes>Zap!</Botoes>
        </ContainerBotoes>
        </>
        
    )
}


const ContainerBotoes = styled.div`

display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;

`

const Botoes = styled.button`
 
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;

`

const PerguntaFechada = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

`

const PerguntaFechadaConteudo = styled.p`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`
    
const PerguntaAberta = styled.div`
 width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}

`

