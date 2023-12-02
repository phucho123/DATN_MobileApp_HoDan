import AppNavigator from "./src/screens/Navigation";
import { AuthenticationContext } from "./src/context/authContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationContext>
        <AppNavigator />
      </AuthenticationContext>
    </NavigationContainer>
  );
}
