// ============================================
// TUGAS PROJECT : PERANGKAT MOBILE I
// Nama          : Dendi Pratama Riawan
// Github        : https://github.com/DendiPratamaRiawan
// Linkedin      : www.linkedin.com/in/dendipratamar
// UNIVERSITAS FALETEHAN
// ============================================

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 1️⃣ Definisikan tipe icon yang valid
type IconName =
  | "tag-outline"
  | "truck-outline"
  | "ticket-percent-outline"
  | "heart-outline";

// 2️⃣ Definisikan tipe Notification
type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: IconName;
};

// 3️⃣ Data notifikasi
const notifications: Notification[] = [
  {
    id: "1",
    title: "Promo Spesial Hari Ini!",
    message: "Nikmati diskon hingga 50% untuk produk pilihan di GoToko.id.",
    time: "2 jam yang lalu",
    icon: "tag-outline",
  },
  {
    id: "2",
    title: "Pesanan Anda Sedang Dikirim",
    message: "Pesanan #GKT202510 sedang dalam perjalanan menuju alamat Anda.",
    time: "5 jam yang lalu",
    icon: "truck-outline",
  },
  {
    id: "3",
    title: "Voucher Baru Tersedia!",
    message: "Klaim voucher cashback Rp20.000 sebelum habis!",
    time: "Kemarin",
    icon: "ticket-percent-outline",
  },
  {
    id: "4",
    title: "Produk Favorit Anda Diskon!",
    message: "Cek wishlist Anda, beberapa produk sedang promo menarik!",
    time: "2 hari yang lalu",
    icon: "heart-outline",
  },
];

const NotificationScreen: React.FC = () => {
  // 4️⃣ Render setiap notifikasi
  const renderItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item.icon} size={28} color="#F7941D" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🔔 Notifikasi</Text>
      </View>

      {/* List Notifikasi */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

// 5️⃣ Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFfff",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F7941D",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FFF1E5",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationScreen;
