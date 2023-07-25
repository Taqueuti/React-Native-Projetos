import { View, Text, Image, ImageBackground } from 'react-native';
import estilos from '../pages/Finais/estilo';


interface propsFinais {
     fundo: object;
     titulo: string;
     bandeira1: object;
     bandeira2: object;
     placar: string;
}

export function BoxFinais(props: propsFinais) {
    return (
        <View style={estilos.container}>
            <ImageBackground borderRadius={20} blurRadius={2} source={props.fundo} style={estilos.box}>
                <View style={estilos.fundo}>
                    <Text style={estilos.titulo}>{props.titulo}</Text>
                    <View style={estilos.boxPlacar}>
                        <Image style={estilos.bandeira} source={props.bandeira1} />
                        <Text style={estilos.placar}>{props.placar}</Text>
                        <Image style={estilos.bandeira} source={props.bandeira2} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}