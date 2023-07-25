import React from "react";
import {  ScrollView } from "react-native";
//components
import Historia from "./historia";
import Tecnicas from "./tecnicas";
import Jogo from "./jogo";
import Conclusao from "./conclusao";

export function TelaNitendo(){
  return(
    <ScrollView>
     <Historia />
     <Tecnicas/>
     <Jogo/>
     <Conclusao/>
     </ScrollView>

  )
};

