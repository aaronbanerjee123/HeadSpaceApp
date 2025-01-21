import { FlatList, Text, View } from "react-native";
import { meditations } from "./../data";
import MeditationListItem from "./components/MeditationListItem";
//711


export default function HomeScreen() {
  return (
    <FlatList
      contentContainerClassName="gap-8 p-3"
      className="bg-white"
      data={meditations}
      renderItem={({ item }) => <MeditationListItem meditation={item} />}
    />
  );
}
