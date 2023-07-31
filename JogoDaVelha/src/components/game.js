import { useState } from 'react';
import { Pressable, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Casas from './casas';
import estilos from '../style/estilos';


import Fundo from '../../assets/fundo.jpg'
import { Ionicons } from '@expo/vector-icons';


import { verificaResultado } from '../servicos/logica';

export default function Game() {

    const [posicaoJogo, setPosicaoJogo] = useState(new Array(9));
    const [jogadorAtual, setJogadorAtual] = useState("X");

    const [venceuJogo, setVenceuJogo] = useState(false);
    const [empatouJogo, setEmpatouJogo] = useState(false);

    const [vitoriaX, setVitoriaX] = useState(0);
    const [vitoriaO, setVitoriaO] = useState(0);

    const mudarCorTexto = (jogadorAtual == 'X') ? '#983131' : '#4C4CFF';
    const desabilitarTexto = (venceuJogo || empatouJogo == true) ? 'none' : '';

    const MudarTextodeVitoria = (jogadorAtual == 'X') ? 'Jogador O' : 'Jogador X';




    function defineCasaEscolhida(casa) {
        let novoArrayPosicao = posicaoJogo;
        novoArrayPosicao[casa] = jogadorAtual;
        setPosicaoJogo(novoArrayPosicao);
    };


    function defineJogadorAtual() {
        const proximoJogador = (jogadorAtual == 'X' ? 'O' : 'X');
        setJogadorAtual(proximoJogador);
    };

    function handleEcolheCasa(casa) {
        if (posicaoJogo[casa] !== undefined || venceuJogo) {
            return;
        }

        defineCasaEscolhida(casa);
        defineJogadorAtual();

        const resultado = verificaResultado(posicaoJogo);

        setVenceuJogo(resultado.venceu);
        setEmpatouJogo(resultado.empatou);
    }

    function handleReiniciarPartida() {
        setJogadorAtual("X");
        setPosicaoJogo(new Array(9));
        setVenceuJogo(false);
        setEmpatouJogo(false);

        if (venceuJogo === true && jogadorAtual === 'O') {
            setVitoriaX((prevVitoriaX) => prevVitoriaX + 1);
        } else if (venceuJogo === true && jogadorAtual === 'X') {
            setVitoriaO((prevVitoriaO) => prevVitoriaO + 1);
        }
    };
    
    function handlerReinicarPlacar(){
        setVitoriaX(0);
        setVitoriaO(0);
    }




    return (



        <ImageBackground source={Fundo} resizeMode='cover' style={estilos.container}>



            <Text style={estilos.titulo}>Jogo da Velha</Text>
            <Text style={[estilos.jogadorAtual, { color: mudarCorTexto, display: desabilitarTexto }]}>Jogador da vez: {jogadorAtual} </Text>

            {
                (venceuJogo) ?
                    <View style={estilos.areaReinicio}>
                        <Text style={[estilos.status, { color: '#DCDC29' }]}>Vitória do {MudarTextodeVitoria}</Text>
                    </View>
                    : ""
            }
            {
                (empatouJogo) ?
                    <View style={estilos.areaReinicio}>
                        <Text style={estilos.status}>Empate!</Text>
                    </View>
                    : ""
            }
            {
                (venceuJogo || empatouJogo) ?
                    <Pressable style={estilos.botaoReiniciar} onPress={handleReiniciarPartida}>
                        <Ionicons name="reload-circle" size={30} color="#fff" />
                        <Text style={estilos.textoBotao}>Reiniciar</Text>
                    </Pressable>
                    :
                    ""
            }
            <View style={estilos.tabuleiro}>
                <View style={estilos.linha}>

                    <Pressable onPress={() => handleEcolheCasa(0)}>
                        <Casas
                            jogador={posicaoJogo[0]}
                            temBordaDireta={true}
                            temBordaInferior={true}
                        />
                    </Pressable>

                    <Pressable onPress={() => handleEcolheCasa(1)}>
                        <Casas
                            jogador={posicaoJogo[1]}
                            temBordaDireta={true}
                            temBordaInferior={true}
                        />
                    </Pressable>

                    <Pressable onPress={() => handleEcolheCasa(2)}>
                        <Casas
                            jogador={posicaoJogo[2]}
                            temBordaInferior={true}
                        />
                    </Pressable>

                </View>

                <View style={estilos.linha}>

                    <Pressable onPress={() => handleEcolheCasa(3)}>
                        <Casas
                            jogador={posicaoJogo[3]}
                            temBordaDireta={true}
                            temBordaInferior={true}
                        />
                    </Pressable>

                    <Pressable onPress={() => handleEcolheCasa(4)}>
                        <Casas
                            jogador={posicaoJogo[4]}
                            temBordaDireta={true}
                            temBordaInferior={true}
                        />
                    </Pressable>

                    <Pressable onPress={() => handleEcolheCasa(5)}>
                        <Casas
                            jogador={posicaoJogo[5]}
                            temBordaInferior={true}
                        />
                    </Pressable>

                </View>

                <View style={estilos.linha}>

                    <Pressable onPress={() => handleEcolheCasa(6)}>
                        <Casas
                            jogador={posicaoJogo[6]}
                            temBordaDireta={true}
                        />
                    </Pressable>

                    <Pressable onPress={() => handleEcolheCasa(7)}>
                        <Casas
                            jogador={posicaoJogo[7]}
                            temBordaDireta={true}
                        />
                    </Pressable>

                    <Pressable onPress={() => handleEcolheCasa(8)}>
                        <Casas
                            jogador={posicaoJogo[8]}
                        />
                    </Pressable>

                </View>

            </View>

            <View style={estilos.boxPlacar}>
                <View style={estilos.placar}>
                    <Text style={{ fontWeight: 'bold' }}>Placar</Text>
                    <Text style={[estilos.textoPLacar, { color: '#983131' }]}>X: {vitoriaX}</Text>
                </View>

                <TouchableOpacity style={estilos.botaoPlacar} onPress={handlerReinicarPlacar}>
                      <Ionicons name="reload-circle" size={50} color="#fff" />
                </TouchableOpacity>

                <View style={estilos.placar}>
                    <Text style={{ fontWeight: 'bold' }}>Placar</Text>
                    <Text style={[estilos.textoPLacar, { color: '#4C4CFF' }]}>O: {vitoriaO}</Text>
                </View>

            </View>
        </ImageBackground>
    );
}
