import { COLORS, scale, verticalScale, moderateScale, width } from '@common'
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    headerStyle: {
        height: verticalScale(120),
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        marginHorizontal: scale(10),
        marginTop: scale(20),
        paddingVertical: verticalScale(10),
    },
    settingsTab: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scale(10),
        backgroundColor: COLORS.white,
        borderRadius: scale(10),
        width: width - scale(20),
        alignSelf: "center",
        marginBottom: moderateScale(15),
    }
})