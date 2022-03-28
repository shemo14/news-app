import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { COLORS } from "../../common";
import { Spinner } from "../Spinner";
// import { LogoSpinner } from "../LogoSpinner";
import Constants from "expo-constants";
import { NoInternet } from "./NoInternet";
import { useSelector } from "react-redux";

export const Container = ({
  children,
  scrollEnabled = false,
  keyboardShouldPersistTaps,
  loading = false,
  saveArea = true,
  header = false,
  style,
  contentContainerStyle,
  keyboardVerticalOffset,
  ...props
}) => {
  const { network } = useSelector((state) => state.general);

  let renderContent = () => {
    return scrollEnabled ? (
      // <View style={{ flex: 1 }}>
      <ScrollView
        style={[styles.containerScrollView, style]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
      </ScrollView>
    ) : (
      // </View>
      <View style={[styles.Container, style]}>{children}</View>
    );
  };

  return loading ? (
    <Spinner mode="full" />
  ) : // <LogoSpinner fullStretch />
  network ? (
    saveArea ? (
      <SafeAreaView style={header ? { flex: 1 } : styles.saveArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={keyboardVerticalOffset || -10}
        >
          {renderContent()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    ) : (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardVerticalOffset || -10}
      >
        {renderContent()}
      </KeyboardAvoidingView>
    )
  ) : (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NoInternet />
    </View>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  Container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: COLORS.bgLight,
  },
  containerScrollView: {
    // flex: 1,
    backgroundColor: COLORS.bgLight,
    // borderColor: "red",
    // borderWidth: 1,
  },
});
