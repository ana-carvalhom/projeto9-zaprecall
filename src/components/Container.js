
import { useState } from 'react';
import styled from 'styled-components';
import CardPergunta from './CardPergunta';

export default function Container({perguntas}) {

    const [perguntaAberta, setPerguntaAberta] = useState(null)
    const [respondida, setRespondida] = useState([])
    

    function resposta(opcaoSelecionada){
        if (perguntaAberta !== null) {

            const repostasNew = [...respondida, {index: perguntaAberta, opcaoSelecionada:opcaoSelecionada }]
            setRespondida(repostasNew)
            setPerguntaAberta(null)
            console.log(repostasNew)
        }
         
        
        
    }

    function definirOpcaoSelecionada(i){
        const perguntas = respondida.find((p) => p.index === i)
        if(perguntas !== null && perguntas !== undefined){
            return perguntas.opcaoSelecionada
        } else {
            return "a pergunta ainda não foi respondida"
        }
    }

    return (
       <>
       {perguntas.map((pergunta, i) => (
        <CardPergunta 
        key={i} 
        numeroPergunta={i+1}
        abrirPergunta={() => setPerguntaAberta(i)}
        cardAberto= {i === perguntaAberta}
        pergunta={pergunta.question}
        resposta={resposta}
        opcaoSelecionada={definirOpcaoSelecionada(i)}
    
        />
       
       ))}
       <FooterConcluidos>
       0/{perguntas.length} CONCLUÍDOS
       </FooterConcluidos>
       </>
       
    )
}

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
  
`

