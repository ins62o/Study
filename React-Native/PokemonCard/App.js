import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const fireMonsterData = {
    name: "fireMonster",
    image: require("./assets/fire.jpg"),
    type: "Fire",
    hp: 39,
    move: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "squirtl",
    image: require("./assets/flower.png"),
    type: "water",
    hp: 44,
    move: ["Tackle", "Water Gun", "Tail whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "bulbasaur",
    image: require("./assets/tunder.png"),
    type: "electric",
    hp: 39,
    move: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...fireMonsterData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
