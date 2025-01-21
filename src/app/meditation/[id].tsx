import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { meditations } from "@/data";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const MeditationDetails = () => {
  const { id } = useLocalSearchParams();
  const {top} = useSafeAreaInsets();

  const router = useRouter();
  const meditation = meditations.find((med) => med.id == Number(id));

  if (!meditation) {
    return <Text className="text-3xl">Meditation not found!</Text>;
  }

  return (
    <>
      <SafeAreaView >
        <View className="flex flex-row justify-between p-4">
        <Text className="text-2xl">{meditation?.title}</Text>
        <AntDesign
          onPress={() => router.back()}
          name="close"
          size={24}
          color="black"
        />
        </View>
      </SafeAreaView>
    </>
  );
};

export default MeditationDetails;
