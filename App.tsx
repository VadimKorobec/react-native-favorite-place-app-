import { StatusBar } from "expo-status-bar";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlacesScreen from "./screens/AllPlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import MapScreen from "./screens/MapScreen";
import IconButton from "./components/ui/IconButton";

import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle:{backgroundColor: Colors.gray700}
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlacesScreen}
            options={({ navigation }) => ({
              title: "Your Favorite Places ",
              headerTitleAlign: "center",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlaceScreen} options={{
            title: 'Add a new Place',
            headerTitleAlign:'center'
          }} />
          <Stack.Screen name='Map' component={MapScreen} options={{
            title: 'Map',
            headerTitleAlign:'center'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
