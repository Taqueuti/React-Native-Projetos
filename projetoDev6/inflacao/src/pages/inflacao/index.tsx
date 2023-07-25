import React from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import { ItemValor } from "../../components/itemValor";
//estilos
import globalEstilo from "../../styles/global";

export default function TelaInflacao() {
   return (
      <SafeAreaView>
         <ScrollView>
            <ItemValor estilo={globalEstilo.odd} ano="Ano" valor="Inflação" />
            <ItemValor ano="2010" valor="5,91%" />
            <ItemValor estilo={globalEstilo.odd} ano="2011" valor="6,50%" />
            <ItemValor ano="2012" valor="5,84%" />
            <ItemValor estilo={globalEstilo.odd} ano="2013" valor="5,91%" />
            <ItemValor ano="2014" valor="6,41%" />
            <ItemValor estilo={globalEstilo.odd} ano="2015" valor="10,67%" />
            <ItemValor ano="2016" valor="6,29%" />
            <ItemValor estilo={globalEstilo.odd} ano="2017" valor="2,95%" />
            <ItemValor ano="2018" valor="3,75%" />
            <ItemValor estilo={globalEstilo.odd} ano="2019" valor="4,31%" />
            <ItemValor ano="2020" valor="4,52%" />
         </ScrollView>
      </SafeAreaView>
   )
}