import React from "react";
import {View, Pressable, Text, Image} from 'react-native';

//imagens
import Logo from './assets/xbox.png';
import  Consoles from './assets/console.png';
import Jogos from './assets/jogos.png';
import Nuvem from './assets/xcloud.png';
//estilo
import estilos from './style';

export default function TelaInical (props){
    return(
        <View style={estilos.container}>
            
            <Image 
              source={ Logo }
              style={estilos.logo}
            />
            <Text style={estilos.titulo}>
                Xbox
            </Text>
            
            <Text style={estilos.texto}>
                Xbox é uma marca de consoles criada pela microsoft. 
                      Toque nos cards para conhecer.
            </Text>
            
                
            

            <Pressable
             
             onPress={() => { props.navigation.navigate('Consoles')}}
             style={ estilos.btn}
            >
                <Image 
                source={ Consoles }
                style={estilos.imageConsole}
               />
                <Text style={estilos.textobtn}> Conheça os consoles</Text>
            </Pressable>
              
            <Pressable
             onPress={() => { props.navigation.navigate('Jogos')}}
             style={ estilos.btn}
            >
               <Image 
                source={ Jogos }
                style={estilos.imageJogos}
               />
                 <Text style={estilos.textobtn}> Conheça os jogos</Text>
            </Pressable>
            
            <Pressable
            onPress={() => { props.navigation.navigate('Nuvem')}}
             style={ estilos.btn}
            >

              <Image 
                source={ Nuvem }
                style={estilos.imageNuvem}
               />
               <Text style={estilos.textobtn}> Conheça o xCloud</Text>
            </Pressable>
        </View>
    )
}