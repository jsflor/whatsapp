import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

interface BoxedIconProps {
  name: typeof Ionicons.defaultProps;
  backgroundColor: string;
}

export function BoxedIcon({ backgroundColor, name }: BoxedIconProps) {
  return (
    <View style={{ backgroundColor, padding: 4, borderRadius: 6 }}>
      <Ionicons name={name} size={22} color={"white"} />
    </View>
  );
}
