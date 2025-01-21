import { Text, View } from "react-native";
import { Meditation } from "../../types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <View className="flex flex-row items-center gap-5">
      <View className="bg-green-600 p-2 rounded-full">
        <FontAwesome name="check" size={16} color="white" />
      </View>
      <View className="flex-1 p-5 py-8 rounded-2xl border-gray-300 border-2">
        <Text className="text-4xl font-semibold mb-2">{meditation.title}</Text>

        <View className="flex flex-row gap-2 items-center">
          <FontAwesome6 name="clock-four" size={18} color="6B7288" />
          <Text className="text-gray-600">{meditation.duration} min</Text>
        </View>
      </View>
    </View>
  );
};
export default MeditationListItem;
