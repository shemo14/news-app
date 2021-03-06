import React, { useCallback } from "react";
import { FlatList, RefreshControl, ActivityIndicator } from "react-native";
import i18n from "@locale";
import { EmptyList } from "@components";
import { COLORS, moderateScale, verticalScale } from "@common";
import {useSelector} from "react-redux";

export const List = ({
  data,
  emptyIcon,
  emptyMessage,
  refreshing,
  onRefresh,
  loadMore,
  onEndReached,
  ListFooterComponent,
  ListEmptyComponent,
  ...props
}) => {
  const { theme } = useSelector((state) => state.general);
  const color     = theme === 'dark' ? COLORS.white : COLORS.mainDark

  const renderFooter = () => {
    if (!loadMore) return null;
    return (
      <ActivityIndicator
        size={moderateScale(22)}
        color={color}
        style={{ marginBottom: verticalScale(9) }}
      />
    );
  };

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data}
      ListEmptyComponent={() =>
        ListEmptyComponent || (
          <EmptyList
            image={Images.noData}
            icon={emptyIcon && emptyIcon}
            message={emptyMessage || i18n.t("common.noResult")}
          />
        )
      }
      // For Pull To Refresh
      refreshControl={
        onRefresh && (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh && onRefresh}
            colors={[color]}
            tintColor={color}
          />
        )
      }
      showsVerticalScrollIndicator={false}
      //For Handle Load More Items
      ListFooterComponent={ListFooterComponent || renderFooter}
      onEndReachedThreshold={0.4}
      onEndReached={data?.length > 5 && onEndReached}
      // Performance Setting
      // removeClippedSubviews={true} // Unmount components when outside of window
      // initialNumToRender={9} // Reduce initial render amount
      // maxToRenderPerBatch={1} // Reduce number in each render batch
      // updateCellsBatchingPeriod={100} // Increase time between renders
      {...props}
    />
  );
};
