
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Vibration,
  ScrollView,
} from "react-native";

export default function App() {
  const [tvIp, setTvIp] = useState("");
  const [connected, setConnected] = useState(false);

  function connectTV() {
    if (!tvIp) {
      Alert.alert("Atenção", "Digite o IP da Smart TV");
      return;
    }

    setConnected(true);
    Alert.alert("Conectado", `TV conectada: ${tvIp}`);
  }

  function sendCommand(command) {
    Vibration.vibrate(50);

    if (!connected) {
      Alert.alert("Conecte a TV primeiro");
      return;
    }

    Alert.alert("Comando", command);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>AIWA</Text>
      <Text style={styles.subtitle}>Smart Remote</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="IP da TV"
          placeholderTextColor="#999"
          value={tvIp}
          onChangeText={setTvIp}
        />

        <TouchableOpacity
          style={styles.connectBtn}
          onPress={connectTV}
        >
          <Text style={styles.btnText}>
            {connected ? "Conectada" : "Conectar TV"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.apps}>
        <TouchableOpacity
          style={styles.appBtn}
          onPress={() => sendCommand("Netflix")}
        >
          <Text>Netflix</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appBtn}
          onPress={() => sendCommand("YouTube")}
        >
          <Text>YouTube</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appBtn}
          onPress={() => sendCommand("Prime Video")}
        >
          <Text>Prime Video</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appBtn}
          onPress={() => sendCommand("Google Play")}
        >
          <Text>Google Play</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.power}
        onPress={() => sendCommand("POWER")}
      >
        <Text style={styles.powerText}>⏻</Text>
      </TouchableOpacity>

      <View style={styles.navArea}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => sendCommand("UP")}
        >
          <Text style={styles.navText}>▲</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => sendCommand("LEFT")}
          >
            <Text style={styles.navText}>◀</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.okBtn}
            onPress={() => sendCommand("OK")}
          >
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => sendCommand("RIGHT")}
          >
            <Text style={styles.navText}>▶</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => sendCommand("DOWN")}
        >
          <Text style={styles.navText}>▼</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20
  },
  logo: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40
  },
  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 15
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  connectBtn: {
    backgroundColor: "#0f8cff",
    padding: 15,
    borderRadius: 10
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  apps: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20
  },
  appBtn: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center"
  },
  power: {
    width: 80,
    height: 80,
    backgroundColor: "#e53935",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center"
  },
  powerText: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center"
  },
  navArea: {
    alignItems: "center",
    marginTop: 20
  },
  row: {
    flexDirection: "row"
  },
  navBtn: {
    backgroundColor: "#222",
    width: 70,
    height: 60,
    margin: 5,
    justifyContent: "center",
    borderRadius: 12
  },
  navText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24
  },
  okBtn: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    margin: 5
  },
  okText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22
  }
});
