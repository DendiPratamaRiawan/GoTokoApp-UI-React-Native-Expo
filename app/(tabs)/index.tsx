// ============================================
// TUGAS PROJECT : PERANGKAT MOBILE I
// Nama          : Dendi Pratama Riawan
// Github        : https://github.com/DendiPratamaRiawan
// Linkedin      : www.linkedin.com/in/dendipratamar
// UNIVERSITAS FALETEHAN
// ============================================

import {
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
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

type Product = {
  id: string;
  name: string;
  price: string;
  image: any;
};

const products: Product[] = [
  {
    id: "1",
    name: "T-Shirt Premium",
    price: "Rp120.000",
    image: require("../../assets/products/baju.jpg"),
  },
  {
    id: "2",
    name: "Sneakers Sport",
    price: "Rp450.000",
    image: require("../../assets/products/sepatu.jpg"),
  },
  {
    id: "3",
    name: "Wireless Headphone",
    price: "Rp650.000",
    image: require("../../assets/products/headphone.jpeg"),
  },
  {
    id: "4",
    name: "Laptop Pro 14”",
    price: "Rp12.500.000",
    image: require("../../assets/products/leptop.jpeg"),
  },
];

const HomeScreen = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const categories = [
    { icon: <MaterialIcons name="checkroom" size={30} color="#F7941D" />, label: "Fashion" },
    { icon: <FontAwesome5 name="mobile-alt" size={28} color="#F7941D" />, label: "Elektronik" },
    { icon: <Feather name="watch" size={30} color="#F7941D" />, label: "Aksesoris" },
    { icon: <FontAwesome5 name="book" size={28} color="#F7941D" />, label: "Buku" },
    { icon: <Ionicons name="game-controller-outline" size={30} color="#F7941D" />, label: "Game" },
    { icon: <Entypo name="tools" size={30} color="#F7941D" />, label: "Perkakas" },
    { icon: <FontAwesome5 name="baby" size={28} color="#F7941D" />, label: "Bayi" },
    { icon: <MaterialIcons name="sports-soccer" size={30} color="#F7941D" />, label: "Olahraga" },
    { icon: <MaterialCommunityIcons name="sofa" size={30} color="#F7941D" />, label: "Furniture" },
    { icon: <MaterialCommunityIcons name="car" size={30} color="#F7941D" />, label: "Otomotif" },
  ];

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleMenuOption = (option: string) => {
    console.log("Pilih menu:", option);
    setMenuVisible(false);
    if (option === "Sign Out") {
      // router.push("/login");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/LogoGT.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <View>
          <TouchableOpacity onPress={toggleMenu}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>

          {menuVisible && (
            <View style={styles.dropdownMenuSmall}>
              <TouchableOpacity
                style={styles.menuItemSmall}
                onPress={() => handleMenuOption("Profil")}
              >
                <TouchableOpacity onPress={() => router.push("/profile")}>
                <Text style={styles.menuText}>Profil</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItemSmall}
                onPress={() => handleMenuOption("Sign Out")}
              >
                <Text style={styles.menuText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView style={styles.container}>
        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require("../../assets/products/bannerPromo.jpeg")}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>
            Belanja hemat & nikmati promo menarik setiap hari hanya di{" "}
            <Text style={{ fontWeight: "bold" }}>GoToko.id</Text> 🎉
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.categoryContainer}>
          <Text style={styles.sectionTitle}>Kategori</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {categories.map((item, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <View style={styles.iconWrapper}>{item.icon}</View>
                <Text style={styles.categoryText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Produk */}
        <View style={styles.productContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Produk Unggulan</Text>
            <TouchableOpacity onPress={() => router.push("/explore")}>
              <Text style={styles.viewMore}>Lihat selengkapnya →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productGrid}>
            {products.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>

                <View style={styles.actionRow}>
                  <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Beli Sekarang</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cartButton}>
                    <Ionicons name="cart-outline" size={20} color="#F7941D" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    backgroundColor: "#f19422ff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    zIndex: 999,
  },
  logoImage: {
    marginTop: 30,
    width: 150,
    height: 40,
  },
  profileImage: {
    marginTop: 25,
    width: 40,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#002B5B",
  },
  dropdownMenuSmall: {
    position: "absolute",
    top: 65,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    width: 120,
    paddingVertical: 5,
    zIndex: 9999,
  },
  menuItemSmall: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
  },
  menuText: {
    fontSize: 14,
    color: "#002B5B",
    fontWeight: "500",
  },
  banner: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  bannerImage: {
    width: "100%",
    height: width * 0.45,
  },
  bannerText: {
    padding: 12,
    fontSize: 15,
    textAlign: "center",
    color: "#002B5B",
  },
  categoryContainer: {
    height: 150,
    marginTop: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#002B5B",
    marginBottom: 10,
  },
  categoryScroll: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    elevation: 3,
    width: 90,
    height: 90,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  categoryText: {
    marginTop: 6,
    fontSize: 13,
    color: "#002B5B",
    textAlign: "center",
  },
  productContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  viewMore: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "600",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  productName: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "bold",
    color: "#002B5B",
  },
  productPrice: {
    fontSize: 14,
    color: "#F7941D",
    marginVertical: 4,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  buyButton: {
    backgroundColor: "#F7941D",
    paddingVertical: 6,
    borderRadius: 8,
    flex: 1,
  },
  buyButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
  },
  cartButton: {
    borderWidth: 1,
    borderColor: "#F7941D",
    borderRadius: 8,
    padding: 6,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
