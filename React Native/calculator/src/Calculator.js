import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCalculator } from "./use-calculator";

export const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

export default function Calculator() {
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();

  const Button = ({ text, onPress, flex, type, isSelected }) => {
    const backgroundColor =
      type === "reset"
        ? COLOR.RESET
        : type === "operator"
        ? COLOR.OPERATOR
        : type === "num"
        ? COLOR.NUM
        : "transparent";
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderWidth: isSelected ? 1 : 0.2,
          borderColor: "black",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 25 }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      {__DEV__ && (
        <>
          <Text>input : {input}</Text>
          <Text>currentOperator : {currentOperator}</Text>
          <Text>result : {result}</Text>
          <Text>tempInput : {tempInput}</Text>
          <Text>tempOperator : {tempOperator}</Text>
        </>
      )}

      {/* 결과 */}
      <View style={styles.inputContainer}>
        <Text style={{ color: "#fff", fontSize: 35, textAlign: "right" }}>
          {input}
        </Text>
      </View>

      {/* [AC ~ /] */}
      <View style={styles.rowContainer}>
        <Button
          type="reset"
          text={hasInput ? "C" : "AC"}
          onPress={onPressReset}
          flex={3}
        />
        <Button
          type="operator"
          text="%"
          onPress={() => onPressOperator("/")}
          flex={1}
          isSelected={currentOperator === "/"}
        />
      </View>

      {/* [7 ~ x] */}
      <View style={styles.rowContainer}>
        {[7, 8, 9].map((num) => (
          <Button
            type="num"
            text={String(num)}
            onPress={() => onPressNum(num)}
            flex={1}
            key={num}
          />
        ))}
        <Button
          type="operator"
          text="X"
          onPress={() => onPressOperator("X")}
          flex={1}
          isSelected={currentOperator === "X"}
        />
      </View>

      {/* [4 ~ -] */}
      <View style={styles.rowContainer}>
        {[4, 5, 6].map((num) => (
          <Button
            type="num"
            text={String(num)}
            onPress={() => onPressNum(num)}
            flex={1}
            key={num}
          />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator("-")}
          flex={1}
          isSelected={currentOperator === "-"}
        />
      </View>

      {/* [1~ +] */}
      <View style={styles.rowContainer}>
        {[1, 2, 3].map((num) => (
          <Button
            type="num"
            text={String(num)}
            onPress={() => onPressNum(num)}
            flex={1}
            key={num}
          />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator("+")}
          isSelected={currentOperator === "+"}
          flex={1}
        />
      </View>

      {/* [0 ~ =] */}
      <View style={styles.rowContainer}>
        <Button type="num" text="0" onPress={() => onPressNum("0")} flex={3} />
        <Button
          type="operator"
          text="="
          onPress={() => onPressOperator("=")}
          isSelected={currentOperator === "="}
          flex={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#4e4c51",
    minHeight: "50",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  rowContainer: {
    flexDirection: "row",
    width: "100%",
  },
});
