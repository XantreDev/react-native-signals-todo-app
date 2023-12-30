import "../global.css";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View } from "react-native";

const CrazyComponent = () => {
  let a = 0;
  for (let i = 0; i < 50_000_000; i++) {
    a += i;
    a |= 0;
  }
  return <Text>{a}</Text>;
};

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <TextInput
    className="border self-stretch"
    value={value}
    onChangeText={onChange}
  />
);

export const App = () => {
  const [state, setState] = React.useState("");

  return (
    <View className="flex-1 items-center justify-center px-4">
      <Text className="text-2xl mb-2">Here is our input</Text>
      <CrazyComponent />
      <Input value={state} onChange={setState} />
      <Text className="text-3xl">Here is your text: {state}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
