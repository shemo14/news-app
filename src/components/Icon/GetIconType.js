import {
  Ionicons,
  Zocial,
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  EvilIcons,
  Entypo,
  FontAwesome,
  SimpleLineIcons,
  Feather,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default (type) => {
  switch (type) {
    case "Zocial":
      return Zocial;

    case "Octicon":
      return Octicons;
    case "Material":
      return MaterialIcons;
    case "Material-community":
      return MaterialCommunityIcons;
    case "Ionicons":
      return Ionicons;
    case "Foundation":
      return Foundation;
    case "Fontisto":
      return Fontisto;
    case "Evilicon":
      return EvilIcons;
    case "Entypo":
      return Entypo;
    case "Font-awesome":
      return FontAwesome;
    case "Simple-line-icon":
      return SimpleLineIcons;
    case "Feather":
      return Feather;
    case "Antdesign":
      return AntDesign;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return Ionicons;
  }
};
