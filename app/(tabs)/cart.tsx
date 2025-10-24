// ============================================
// TUGAS PROJECT : PERANGKAT MOBILE I
// Nama          : Dendi Pratama Riawan
// Github        : https://github.com/DendiPratamaRiawan
// Linkedin      : www.linkedin.com/in/dendipratamar
// UNIVERSITAS FALETEHAN
// ============================================

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
  selected: boolean;
  description?: string;
};

const initialCart: CartItem[] = [
  {
    id: "1",
    name: "T-Shirt Premium",
    price: 120000,
    quantity: 2,
    image: require("../../assets/products/baju.jpg"),
    selected: true,
    description: "Ukuran: L, Warna: Merah",
  },
  {
    id: "2",
    name: "Sneakers Sport",
    price: 450000,
    quantity: 1,
    image: require("../../assets/products/sepatu.jpg"),
    selected: true,
    description: "Size: 42",
  },
  {
    id: "3",
    name: "Wireless Headphone",
    price: 650000,
    quantity: 1,
    image: require("../../assets/products/headphone.jpeg"),
    selected: true,
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [selectAll, setSelectAll] = useState(true);

  const toggleSelectItem = (id: string) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setCartItems(updated);
    setSelectAll(updated.every((item) => item.selected));
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    const updated = cartItems.map((item) => ({ ...item, selected: newSelectAll }));
    setCartItems(updated);
    setSelectAll(newSelectAll);
  };

  const changeQuantity = (id: string, delta: number) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updated);
  };

  const removeItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalItems = cartItems.filter((item) => item.selected)
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Keranjang Belanja</Text>
        </View>

        {/* Select All */}
        <View style={styles.selectAllContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={toggleSelectAll}
          >
            <Ionicons
              name={selectAll ? "checkbox" : "square-outline"}
              size={24}
              color="#F7941D"
            />
            <Text style={styles.selectAllText}>Pilih Semua</Text>
          </TouchableOpacity>
        </View>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleSelectItem(item.id)}
            >
              <Ionicons
                name={item.selected ? "checkbox" : "square-outline"}
                size={24}
                color="#F7941D"
              />
            </TouchableOpacity>

            <Image source={item.image} style={styles.productImage} />

            <View style={styles.itemInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              {item.description && (
                <Text style={styles.productDesc}>{item.description}</Text>
              )}
              <Text style={styles.productPrice}>
                Rp {item.price.toLocaleString()}
              </Text>

              {/* Quantity and Remove */}
              <View style={styles.quantityRow}>
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => changeQuantity(item.id, -1)}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyNumber}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => changeQuantity(item.id, 1)}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="#F7941D" />
                </TouchableOpacity>
              </View>

              {/* Voucher UI */}
              <View style={styles.voucherBtn}>
                <Text style={styles.voucherText}>Tersedia Voucher diskon →</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer Total */}
      <View style={styles.footer}>
        <View style={styles.totalCard}>
          <Text style={styles.totalText}>
            Total ({totalItems} items): Rp {totalPrice.toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7FAFC" },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f19422ff",
    elevation: 4,
  },
  headerText: { marginTop: 25,fontSize: 20, fontWeight: "bold", color: "#002B5B" },
  selectAllContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    backgroundColor: "#fff",
  },
  checkboxContainer: { flexDirection: "row", alignItems: "center", marginRight: 8 },
  selectAllText: { marginLeft: 8, fontSize: 16, fontWeight: "500", color: "#002B5B" },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 10,
    alignItems: "flex-start",
    elevation: 2,
  },
  productImage: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  itemInfo: { flex: 1 },
  productName: { fontSize: 16, fontWeight: "bold", color: "#002B5B" },
  productDesc: { fontSize: 12, color: "#555", marginVertical: 2 },
  productPrice: { fontSize: 14, color: "#F7941D", marginVertical: 4 },
  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
  },
  quantityControl: { flexDirection: "row", alignItems: "center" },
  qtyButton: {
    backgroundColor: "#F7941D",
    width: 28,
    height: 28,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  qtyNumber: { marginHorizontal: 8, fontSize: 14, fontWeight: "500" },
  voucherBtn: { marginTop: 4 },
  voucherText: { color: "#007BFF", fontSize: 13 },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  totalCard: {
    backgroundColor: "#F2F6FF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  totalText: { fontSize: 16, fontWeight: "bold", color: "#002B5B" },
  addVoucherBtn: {
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#F7941D",
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  addVoucherText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  checkoutButton: {
    backgroundColor: "#F7941D",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
