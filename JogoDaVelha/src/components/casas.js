import React from "react";
import { View, Text } from "react-native";
import estilos from "../style/estilos";


export default function Casas(
    {
        jogador = null,
        temBordaDireta = false,
        temBordaInferior = false,

    }) {

    const larguraBordaDireita = (temBordaDireta) ? 3 : 0;
    const larguraBordaInferior = (temBordaInferior) ? 3 : 0;
    const corDoTexto = (jogador === 'X' ? '#983131' : '#4C4CFF')

    return (
        <View style={[estilos.colunas, {
            borderRightWidth: larguraBordaDireita,
            borderBottomWidth: larguraBordaInferior
        }]}>

            <Text style={[estilos.jogador, {
                color: corDoTexto
            }]}>{jogador}</Text>

        </View>
    )
};

