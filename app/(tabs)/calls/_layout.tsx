import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Calls",
          headerLargeTitle: true,
          headerShadowVisible: false,
          // headerBlurEffect: "regular",
          // headerTransparent: true,
          headerStyle: { backgroundColor: Colors.background },
          headerSearchBarOptions: {
            placeholder: "Search",
          },
        }}
      />
    </Stack>
  );
}
