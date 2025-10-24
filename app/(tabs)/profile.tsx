// ============================================
// TUGAS PROJECT : PERANGKAT MOBILE I
// Nama          : Dendi Pratama Riawan
// Github        : https://github.com/DendiPratamaRiawan
// Linkedin      : www.linkedin.com/in/dendipratamar
// UNIVERSITAS FALETEHAN
// ============================================

import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
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

type MenuItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

type StatusItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const ProfileScreen = () => {
  const menuItems: MenuItem[] = [
    { id: "1", icon: <Ionicons name="person-outline" size={24} color="#F7941D" />, label: "Akun Saya" },
    { id: "2", icon: <MaterialIcons name="location-on" size={24} color="#F7941D" />, label: "Alamat & Pengiriman" },
    { id: "3", icon: <FontAwesome5 name="credit-card" size={24} color="#F7941D" />, label: "Metode Pembayaran" },
    { id: "4", icon: <Ionicons name="clipboard-outline" size={24} color="#F7941D" />, label: "Pesanan Saya" },
    { id: "5", icon: <Ionicons name="pricetag-outline" size={24} color="#F7941D" />, label: "Voucher" },
    { id: "6", icon: <Ionicons name="log-out-outline" size={24} color="#F7941D" />, label: "Logout" },
  ];

  const orderStatus: StatusItem[] = [
    { id: "1", icon: <Ionicons name="card-outline" size={28} color="#F7941D" />, label: "Belum Bayar" },
    { id: "2", icon: <Ionicons name="cube-outline" size={28} color="#F7941D" />, label: "Dikemas" },
    { id: "3", icon: <Ionicons name="car-outline" size={28} color="#F7941D" />, label: "Dikirim" },
    { id: "4", icon: <Ionicons name="star-outline" size={28} color="#F7941D" />, label: "Penilaian" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil Saya</Text>
      </View>

      {/* Profile Info Card */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Dendi Riawan</Text>
          <Text style={styles.profileEmail}>dendi@example.com</Text>
        </View>
      </View>

      {/* Order Status */}
      <View style={styles.statusContainer}>
        {orderStatus.map((status) => (
          <View key={status.id} style={styles.statusItem}>
            <View style={styles.statusIcon}>{status.icon}</View>
            <Text style={styles.statusLabel}>{status.label}</Text>
          </View>
        ))}
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <View style={styles.menuIcon}>{item.icon}</View>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Versi aplikasi 1.0.0 • Hak Cipta © 2025 GoToko.id
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7FAFC" },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#F7941D",
    elevation: 3,
  },
  headerText: { marginTop: 25, fontSize: 20, fontWeight: "bold", color: "#002B5B" },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#F7941D",
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: { fontSize: 18, fontWeight: "bold", color: "#002B5B" },
  profileEmail: { fontSize: 14, color: "#555", marginTop: 4 },

  // Order Status (di bawah card)
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 10,
    elevation: 2,
  },
  statusItem: {
    alignItems: "center",
    width: (width - 64) / 4, // 4 item
  },
  statusIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F2F6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  statusLabel: { fontSize: 12, color: "#002B5B", textAlign: "center" },

  // Menu
  menuContainer: { marginHorizontal: 16, marginTop: 16 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 6,
    elevation: 2,
  },
  menuIcon: { width: 30 },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: "#002B5B",
  },

  // Footer
  footer: { marginTop: 20, alignItems: "center", paddingBottom: 30 },
  footerText: { fontSize: 12, color: "#999" },
});
