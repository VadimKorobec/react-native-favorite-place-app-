import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { LocationCoords } from "../types/locationCoords";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IconButton from "../components/ui/IconButton";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AddPlace">;

const MapScreen = () => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationCoords | null>(null);

  const navigation = useNavigation<NavigationProp>();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSelectLocation = (event: MapPressEvent) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  };

  const handleSavePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked!", "You have to pick a location");
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={handleSavePickedLocation}
        />
      ),
    });
  }, [navigation, handleSavePickedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={handleSelectLocation}
    >
      <Marker
        title="Picked Location"
        coordinate={
          selectedLocation
            ? {
                latitude: selectedLocation.lat,
                longitude: selectedLocation.lng,
              }
            : { latitude: 0, longitude: 0 }
        }
      />
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
