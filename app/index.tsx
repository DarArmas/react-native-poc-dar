import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
      <View className="flex-1 justify-center items-center">
          <Text className="text-5xl font-bold">Setup inicial</Text>
          <Link href="/onboarding" className="text-blue-500">Onboarding</Link>
          <Link href="/movie/avengers" className="text-blue-500">Avengers</Link>
          <Link href="/movie/starwars" className="text-blue-500">Star wars</Link>
      </View>
  );
}
