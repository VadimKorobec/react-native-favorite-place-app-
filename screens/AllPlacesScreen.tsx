import { StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const AllPlacesScreen = () => {
  const { places } = useSelector((state: RootState) => state.places);

  return <PlacesList places={places} />;
};

export default AllPlacesScreen;

const styles = StyleSheet.create({});
