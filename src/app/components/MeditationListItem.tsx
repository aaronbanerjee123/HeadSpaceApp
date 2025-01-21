import { Text, View } from "react-native";
import { Meditation } from "../../types";

const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <View className="p-5 rounded-2xl border-gray-300 border-2">
      <Text className="text-4xl font-semibold">{meditation.title}</Text>
    </View>
  );
};
export default MeditationListItem;