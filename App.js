import AppNavigator from "./src/screens/Navigation";
import { AuthenticationContext } from "./src/context/authContext";
import { NavigationContainer } from "@react-navigation/native";
import { MqttContext } from "./src/context/mqttContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationContext>
        <MqttContext>
          <AppNavigator />
        </MqttContext>
      </AuthenticationContext>
    </NavigationContainer>
  );
}
