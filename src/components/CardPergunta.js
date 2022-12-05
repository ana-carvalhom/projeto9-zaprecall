import { useState } from "react"
import styled from "styled-components"
import setaPlay from "../img/seta_play.png"
import setaVirar from "../img/seta_virar.png"



export default function ({ numeroPergunta, abrirPergunta, cardAberto, pergunta, resposta, opcaoSelecionada }) {

const [mostrarResposta, setMostrarResposta] = useState(false)

function abrirCard(){
    if (opcaoSelecionada === "a pergunta ainda não foi respondida"){
        abrirPergunta()
    } 
}

function definirCor(){
    switch(opcaoSelecionada){
        case "Não lembrei":
            return vermelho
        case "Quase não lembrei":
            return amarelo
        case "Zap!":
            return verde
        default:
            return cinza
    }
}

    return (

        <>
            {!cardAberto ? (
                <PerguntaFechada onClick={abrirCard}> 
                <PerguntaFechadaConteudo cor={definirCor()}>Pergunta {numeroPergunta}
                </PerguntaFechadaConteudo>
                    <img src={setaPlay} alt="botão de play para inicar o jogo" />
                </PerguntaFechada>

            ) : (
                <PerguntaAberta>

                    {mostrarResposta ? (
                        <p>{resposta}</p>
                        )
                :              
                
                    (
                    <>{pergunta}
                    <img 
                    src={setaVirar} 
                    alt="clique nesse botão para virar o card e ver a resposta"
                    onClick={() => setMostrarResposta(true)}/>
                    
                    <ContainerBotoes>
                        <Botoes cor={vermelho} onClick={() => resposta("Não lembrei")}>Não lembrei</Botoes>
                        <Botoes cor={amarelo} onClick={() => resposta("Quase não lembrei")}>Quase não lembrei</Botoes>
                        <Botoes cor={verde} onClick={() => resposta("Zap!")}>Zap!</Botoes>
                    </ContainerBotoes>
                    </>
                )}
                
                
                </PerguntaAberta>

            )}

        </>



    )
}

const vermelho = "#FF3030"
const amarelo = "#FF922E"
const verde = "#2FBE34"
const cinza = "#333333"

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
  color: ${props => props.cor};
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
        background: ${props => props.cor};
        border-radius: 5px;
        border: 1px solid ${props => props.cor};
        padding:5px;
        margin-left: 8px;

`

