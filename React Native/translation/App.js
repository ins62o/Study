import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "./src/use-translation";
import Button from "./src/Button";
import { useCookie } from "./src/use-cookie";

export default function App() {
  const { t, locale, setLocale } = useTranslation();
  const { cookieKey } = useCookie();

  if (locale === null) return null;

  const onPress = (lang) => {
    setLocale(lang);
  };

  return (
    <View style={styles.container}>
      <Text>{t(`${cookieKey}`)}</Text>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => onPress("ko")}
          isSelected={locale == "ko"}
          text={"KO"}
        />
        <Button
          onPress={() => onPress("en")}
          isSelected={locale == "en"}
          text={"EN"}
        />
        <Button
          onPress={() => onPress("ja")}
          isSelected={locale == "ja"}
          text={"JA"}
        />
        <Button
          onPress={() => onPress("zh")}
          isSelected={locale == "zh"}
          text={"ZH"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
