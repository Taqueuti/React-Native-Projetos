import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TelaInicio } from "../pages/Inicio";
import { TelaFinais } from "../pages/Finais";
import { TelaArtilheiros } from "../pages/Artilheiros";
import { TelaTitulos } from "../pages/Titulos";

const Navegacao = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Navegacao.Navigator>
                <Navegacao.Screen name="Inicio" component={TelaInicio} />
                <Navegacao.Screen name="Finais" component={TelaFinais} />
                <Navegacao.Screen name="Artilheiros" component={TelaArtilheiros} />
                <Navegacao.Screen name="Titulos" component={TelaTitulos} />
            </Navegacao.Navigator>
        </NavigationContainer>
    )
}