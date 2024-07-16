import Colors from "@/constants/Colors";
import { FlatList, ScrollView, Text, View } from "react-native";
import Chats from "@/assets/data/chats.json";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";

export default function Page() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 40, backgroundColor: "#fff" }}
      >
        <FlatList
          scrollEnabled={false}
          data={Chats}
          ItemSeparatorComponent={() => (
            <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow {...item} />}
        />
      </ScrollView>
    </View>
  );
}
