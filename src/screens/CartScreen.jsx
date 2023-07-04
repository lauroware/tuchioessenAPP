import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CART } from "../data/cart";
import CartItem from "../components/CartItem/Index";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_item, confirm_cart } from "../store/actions/cart.action";

const CartScreen = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleDeleteItem = (id) => {
    console.log(id);
    dispatch(remove_item(id));
  };

  const handleConfirmCart = () => {
    dispatch(confirm_cart(item, total));
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={item}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirm}
          onPress={() => console.log("first")}
        >
          <Text>Confirmar</Text>
          <View>
            <Text style={styles.priceText}>Total: {total} </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    //paddingBottom: 120
  },
  list: {
    flex: 3,
  },
  footer: {
    flex: 1,
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 18,
  },
});
