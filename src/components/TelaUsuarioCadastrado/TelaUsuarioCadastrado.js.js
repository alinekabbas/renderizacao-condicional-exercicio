import { Div, Titulo, Button } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <Button onClick={() => props.mudarTela(1)}>Voltar para a tela inicial.</Button>
        </Div>
    )
}

export default TelaUsuarioCadastrado;