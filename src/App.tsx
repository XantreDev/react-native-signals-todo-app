import "../global.css";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { ReadonlySignal, computed, signal } from "@preact-signals/safe-react";

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
  value: ReadonlySignal<string>;
  onChange: (value: string) => void;
}) => (
  <TextInput
    className="border self-stretch"
    value={value.value}
    onChangeText={onChange}
  />
);

const state = signal("");
const stateLength = computed(() => state.value.length);

const Ui = () => (
  <>
    <Input
      value={state}
      onChange={(newState) => {
        state.value = newState;
      }}
    />
    <Text className="text-3xl">
      Here is your text: {state}
      {"\n"}Here is text length: {stateLength}
    </Text>
  </>
);

export const App = () => {
  return (
    <View className="flex-1 items-center justify-center px-4">
      <Text className="text-2xl mb-2">Here is our input</Text>
      <CrazyComponent />
      <Ui />
      <Ui />
      <StatusBar style="auto" />
    </View>
  );
};
