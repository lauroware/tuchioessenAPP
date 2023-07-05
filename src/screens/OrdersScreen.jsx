import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../store/actions/orders.action";
import OrderItem from "../components/OrderItem/Index";
import { getOrders } from "../store/actions/orders.action";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleDeleteOrder = (orderId) => {
    dispatch(removeOrder(orderId));
  };

  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handleDeleteOrder} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default OrdersScreen;
