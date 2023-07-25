import React from "react";
import {  ScrollView } from "react-native";
//components
import Historia from "./historia";
import Tecnicas from "./tecnicas";
import Jogo from "./jogo";

export function TelaPlay(){
  return(
    <ScrollView>
     <Historia />
     <Tecnicas/>
     <Jogo/>
     </ScrollView>

  )
};

