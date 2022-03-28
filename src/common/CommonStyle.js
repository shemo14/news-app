import { Platform } from "react-native";
import { COLORS } from "./Colors";

export const CommonStyle = {
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.mainLight,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
};
