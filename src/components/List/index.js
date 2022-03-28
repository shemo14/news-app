import React, { useCallback } from "react";
import { FlatList, RefreshControl, ActivityIndicator } from "react-native";
import i18n from "@locale";
import { EmptyList } from "../EmptyList";
import { COLORS, Images } from "@common";
import { moderateScale, verticalScale } from "../../common/Scalling";

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
  const renderFooter = () => {
    if (!loadMore) return null;
    return (
      <ActivityIndicator
        size={moderateScale(22)}
        color={COLORS.main}
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
            colors={[COLORS.main, "#df6799", "#e78db2"]}
          />
        )
      }
      showsVerticalScrollIndicator={false}
      //For Handle Load More Items
      ListFooterComponent={ListFooterComponent || renderFooter}
      onEndReachedThreshold={0.4}
      onEndReached={data?.length > 9 && onEndReached}
      // Performance Setting
      // removeClippedSubviews={true} // Unmount components when outside of window
      // initialNumToRender={9} // Reduce initial render amount
      // maxToRenderPerBatch={1} // Reduce number in each render batch
      // updateCellsBatchingPeriod={100} // Increase time between renders
      {...props}
    />
  );
};
