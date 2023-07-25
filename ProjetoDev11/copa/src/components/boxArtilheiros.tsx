import { View, Text, Image, ImageBackground } from 'react-native';
import estilos from '../pages/Artilheiros/estilos';



interface propsArtilheiros {
    fundo: object;
    nome: string;
    gols: string;
    anos: string;
}

export function BoxArtilheiros(props: propsArtilheiros) {
    return (

        <View style={estilos.container}>

            <ImageBackground borderRadius={20} blurRadius={0.88} source={props.fundo} style={estilos.box}>

                <View style={estilos.fundo}>
                        <Text style={estilos.nome}>{props.nome}</Text>

                        <View style={estilos.boxGols}>
                            <Text style={estilos.gols}>{props.gols}</Text>
                        </View>
                   


                </View>
                <View style={estilos.boxAnos}>

                    <Text style={estilos.anos}>{props.anos}</Text>

                </View>
            </ImageBackground>

        </View>
    )
}