import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { remove_item, confirm_cart } from "../store/actions/cart.action";
import CartItem from "../components/CartItem/Index";

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleDeleteItem = (id) => {
    dispatch(remove_item(id));
  };

  const handleConfirmCart = () => {
    if (items.length > 0) {
      dispatch(confirm_cart(items, total));

      Alert.alert("Orden confirmada", "¡La orden ha sido confirmada!");
    } else {
      Alert.alert(
        "Carrito vacío",
        "No hay elementos en el carrito para confirmar la orden."
      );
    }
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.confirmText}>Confirmar</Text>
          <View>
            <Text style={styles.priceText}>Total: {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
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
  confirmText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
