import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";

const FutsalScoreApp = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const TEAM_A = "Tim A";
  const TEAM_B = "Tim B";

  const incrementScore = (team) => {
    if (team === "A") {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      checkWinner(TEAM_A, newScore);
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      checkWinner(TEAM_B, newScore);
    }
  };

  const decrementScore = (team) => {
    if (team === "A" && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === "B" && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const checkWinner = (teamName, score) => {
    if (score === 10) {
      Alert.alert("🎉 Selamat!", `${teamName} memenangkan pertandingan!`);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🏆 Futsal Score IFC</Text>

      <View style={styles.teamsContainer}>
        {/* Team A */}
        <View style={[styles.teamCard, styles.teamA]}>
          <Text style={styles.teamName}>{TEAM_A}</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.incrementButton]}
              onPress={() => incrementScore("A")}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.decrementButton]}
              onPress={() => decrementScore("A")}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Team B */}
        <View style={[styles.teamCard, styles.teamB]}>
          <Text style={styles.teamName}>{TEAM_B}</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.incrementButton]}
              onPress={() => incrementScore("B")}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.decrementButton]}
              onPress={() => decrementScore("B")}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>🔄 Reset Skor</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginVertical: 20,
  },
  teamsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  teamA: {
    backgroundColor: "#d1e7ff",
  },
  teamB: {
    backgroundColor: "#ffcccc",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  score: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#555",
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  incrementButton: {
    backgroundColor: "#4caf50",
  },
  decrementButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  resetButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FutsalScoreApp;
