import { COLORS, scale, verticalScale } from '@common'
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    headerStyle: {
        height: verticalScale(120),
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        marginHorizontal: scale(10),
        marginTop: scale(20),
        paddingVertical: verticalScale(10),
    },
})