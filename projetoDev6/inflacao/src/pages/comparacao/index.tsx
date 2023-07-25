import React from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { ItemComparacao, } from "../../components/itemComparacao";
import globalEstilo from "../../styles/global";
import ValoresEstilos from "../../styles/valores";
///icones
import { Entypo } from '@expo/vector-icons';
const positivo = <Entypo name="arrow-up" size={22} color="green" />
const negativo = <Entypo name="arrow-down" size={22} color="red" />

export default function TelaComparacao() {
   return (
      <SafeAreaView>
         <ScrollView>
            <View style={[globalEstilo.container, globalEstilo.odd]}>
               <Text style={ValoresEstilos.textoComparacao}>Ano</Text>
               <Text style={ValoresEstilos.textoComparacao}>Salário</Text>
               <Text style={ValoresEstilos.textoComparacao}>Inflação</Text>
               <Text style={ValoresEstilos.textoComparacao}>Cresc.  Salarial</Text>
               <Text style={ValoresEstilos.textoComparacao}>Status Salário</Text>
            </View>

            <ItemComparacao
               ano="2010"
               salario="R$ 510,00"
               inflacao="5,91%"
               cresc="    -"
            />

             <ItemComparacao
               ano="2011"
               salario="R$ 545,00"
               inflacao="6,50%"
               cresc="6,86%"
               status={positivo}
               estilo={globalEstilo.odd}
            />
             <ItemComparacao
               ano="2012"
               salario="R$ 622,00"
               inflacao="5,84%"
               cresc="14,13%"
               status={positivo}
            />
              <ItemComparacao
               ano="2013"
               salario="R$ 678,00"
               inflacao="5,91%"
               cresc="9,00%"
               status={positivo}
               estilo={globalEstilo.odd}
            />
            <ItemComparacao
               ano="2014"
               salario="R$ 724,00"
               inflacao="6,41%"
               cresc="6,78%"
               status={positivo}
            />
            <ItemComparacao
               ano="2015"
               salario="R$ 788,00"
               inflacao="10,67%"
               cresc="8,84%"
               status={negativo}
               estilo={globalEstilo.odd}
            />
             <ItemComparacao
               ano="2016"
               salario="R$ 880,00"
               inflacao="6,29%"
               cresc="11,68%"
               status={positivo}
            />
            <ItemComparacao
               ano="2017"
               salario="R$ 937,00"
               inflacao="2,95%"
               cresc="6,48%"
               status={positivo}
               estilo={globalEstilo.odd}
            />
            <ItemComparacao
               ano="2018"
               salario="R$ 954,00"
               inflacao="3,75%"
               cresc="1,81%"
               status={negativo}
            />
            <ItemComparacao
               ano="2019"
               salario="R$ 998,00"
               inflacao="4,31%"
               cresc="4,61%"
               status={positivo}
               estilo={globalEstilo.odd}
            />
            <ItemComparacao
               ano="2020"
               salario="R$ 1045,00"
               inflacao="4,52%"
               cresc="4,71%"
               status={positivo}
            />
            


         </ScrollView>
      </SafeAreaView>
   )
}