import { useSelector } from "react-redux";

import { FlatList, StyleSheet } from "react-native";

import { RootState } from "../../store/store";
import PlaceItem from "./PlaceItem";

const PlacesList = () => {
  const places = useSelector((state: RootState) => state.places.places);
  return (
    <FlatList data={places} renderItem={({ item }) => <PlaceItem place={item} /> } keyExtractor={(item) => item.id} />
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
