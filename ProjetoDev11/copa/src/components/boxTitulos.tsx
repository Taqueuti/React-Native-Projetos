import { View, Text, ImageBackground, Image } from 'react-native';
import estilos from '../pages/Titulos/estilos';



interface propsTitulos {
    fundo: object;
    estrelas: object;
    pais: string;
    ano: string;
}

export function BoxTitulos(props: propsTitulos) {
    return (

        <View style={estilos.container}>

            <ImageBackground borderRadius={20} blurRadius={0.88} source={props.fundo} style={estilos.box}>

                <View style={estilos.fundo}>
                    <View style={estilos.boxInfos}>
                        <Text style={estilos.pais}>{props.pais}</Text>
                        <Image style={[props.estrelaEstilo]} source={props.estrelas} />
                    </View>
                    <Text style={estilos.ano}>{props.ano}</Text>
                </View>
            </ImageBackground>

        </View>
    )
}