// import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusStatusBar } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text> {item.name}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
