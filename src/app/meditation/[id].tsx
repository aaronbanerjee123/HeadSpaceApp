import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { meditations } from "@/data";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";

const MeditationDetails = () => {
  const { id } = useLocalSearchParams();
  const { top } = useSafeAreaInsets();

  const router = useRouter();
  const meditation = meditations.find((med) => med.id == Number(id));

  if (!meditation) {
    return <Text className="text-3xl">Meditation not found!</Text>;
  }

  return (
    <>
      <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
        <View className="flex-1">
          <View className="flex-row justify-between items-center p-10">
            <AntDesign name="infocirlceo" size={24} color="black" />

            <View className="rounded-lg bg-zinc-800">
              <Text className="text-zinc-100 p-3 font-semibold">
                Today's Meditation
              </Text>
            </View>

            <AntDesign
              onPress={() => router.back()}
              name="close"
              size={28}
              color="black"
            />
          </View>

          <Text className="text-2xl mt-10 text-center text-zinc-800 font-semibold">
            {meditation?.title}
          </Text>
        </View>

        <Pressable className="bg-zinc-700 self-center w-20 aspect-square items-center justify-center rounded-full">
          <FontAwesome6 name="play" size={24} color="snow" />
        </Pressable>

        <View className="flex-1">
          <View className="p-5 mt-auto gap-5">
            <View className="flex-row justify-between">
              <MaterialIcons name="airplay" size={24} color="#3A3937" />

              <MaterialCommunityIcons
                name="cog-outline"
                size={24}
                color="#3A3937"
              />
            </View>

            {/* PLAYBACK INDICATOR */}
            <View>
              <Slider
                style={{ width: '100%', height: 3 }}
                value={0.5}
                onSlidingComplete={(value) => console.log(value)}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3A3937"
                maximumTrackTintColor="#3A393755"
                thumbTintColor="#3A3937"
              />
            </View>

            <View className="flex flex-row justify-between">
              <Text>03:24</Text>
              <Text>13:14</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MeditationDetails;
