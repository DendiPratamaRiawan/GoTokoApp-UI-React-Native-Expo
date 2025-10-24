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
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  category: string;
}

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // === DATA PRODUK DENGAN GAMBAR LOKAL ===
  const products: Product[] = [
    // ===== FASHION =====
    { id: "F1", name: "Kaos Polos Premium", price: "Rp120.000", image: require("../../assets/products/baju.jpg"), category: "Fashion" },
    { id: "F2", name: "Kemeja Denim Pria", price: "Rp230.000", image: require("../../assets/products/baju.jpg"), category: "Fashion" },
    { id: "F3", name: "Jaket Hoodie Wanita", price: "Rp280.000", image: require("../../assets/products/baju.jpg"), category: "Fashion" },
    { id: "F4", name: "Celana Jeans Slim Fit", price: "Rp350.000", image: require("../../assets/products/baju.jpg"), category: "Fashion" },
    { id: "F5", name: "Kemeja Batik Modern", price: "Rp270.000", image: require("../../assets/products/baju.jpg"), category: "Fashion" },

    // ===== ELEKTRONIK =====
    { id: "E1", name: "Headphone Bass Pro", price: "Rp650.000", image: require("../../assets/products/headphone.jpeg"), category: "Elektronik" },
    { id: "E2", name: "Smartphone Galaxy S22", price: "Rp12.500.000", image: require("../../assets/products/headphone.jpeg"), category: "Elektronik" },
    { id: "E3", name: "Smartwatch FitPro", price: "Rp950.000", image: require("../../assets/products/headphone.jpeg"), category: "Elektronik" },
    { id: "E4", name: "Laptop Ultrabook 14”", price: "Rp9.800.000", image: require("../../assets/products/headphone.jpeg"), category: "Elektronik" },
    { id: "E5", name: "Kamera Mirrorless", price: "Rp6.500.000", image: require("../../assets/products/headphone.jpeg"), category: "Elektronik" },

    // ===== AKSESORIS =====
    { id: "A1", name: "Jam Tangan Kulit", price: "Rp350.000", image: require("../../assets/products/headphone.jpeg"), category: "Aksesoris" },
    { id: "A2", name: "Topi Baseball Klasik", price: "Rp150.000", image: require("../../assets/products/headphone.jpeg"), category: "Aksesoris" },
    { id: "A3", name: "Kacamata Stylish", price: "Rp210.000", image: require("../../assets/products/headphone.jpeg"), category: "Aksesoris" },
    { id: "A4", name: "Gelang Etnik Handmade", price: "Rp180.000", image: require("../../assets/products/headphone.jpeg"), category: "Aksesoris" },
    { id: "A5", name: "Cincin Perak Minimalis", price: "Rp220.000", image: require("../../assets/products/headphone.jpeg"), category: "Aksesoris" },

    // ===== TAS =====
    { id: "T1", name: "Tas Ransel Kulit", price: "Rp550.000", image: require("../../assets/products/tasRansel.jpeg"), category: "Tas" },
    { id: "T2", name: "Tas Selempang Kanvas", price: "Rp320.000", image: require("../../assets/products/tasRansel.jpeg"), category: "Tas" },
    { id: "T3", name: "Tote Bag Trendy", price: "Rp280.000", image: require("../../assets/products/tasRansel.jpeg"), category: "Tas" },
    { id: "T4", name: "Tas Laptop Anti Air", price: "Rp480.000", image: require("../../assets/products/tasRansel.jpeg"), category: "Tas" },
    { id: "T5", name: "Clutch Elegant", price: "Rp350.000", image: require("../../assets/products/tasRansel.jpeg"), category: "Tas" },
  ];``

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedProducts =
    searchQuery.trim() === "" ? products : filteredProducts;

  return (
    <ScrollView style={styles.container}>
      {/* Header Pencarian */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛍️ Jelajahi Produk</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari produk favoritmu..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#aaa"
          /> 
        </View>
      </View>

      {/* Grid Produk */}
      <View style={styles.productGrid}>
        {displayedProducts.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.cartButton}>
                <Ionicons name="cart-outline" size={18} color="#F7941D" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Beli</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {displayedProducts.length === 0 && (
          <Text style={styles.noResultText}>
            😔 Produk yang kamu cari tidak ditemukan.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    padding: 20,
    backgroundColor: "#f19422ff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#002B5B",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#002B5B",
  },
  productPrice: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#F7941D",
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buyButton: {
    backgroundColor: "#F7941D",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  cartButton: {
    borderColor: "#F7941D",
    borderWidth: 1.5,
    padding: 6,
    borderRadius: 8,
  },
  noResultText: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    marginTop: 30,
    width: "100%",
  },
});
