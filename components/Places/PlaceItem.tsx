import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Place } from "../../types/place";

interface PlaceProps {
  place: Place;
}

const PlaceItem = ({ place }: PlaceProps) => {
  return (
    <Pressable>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
