import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const start = () => {
    alert("start.");
  }
  const pause = () => {
    alert("pause.");
  }
  const stop = () => {
    alert("stop.");
  }
  const lap = () => {
    alert("lap.");
  }
  const lapclear = () => {
    alert("lapclear.");
  }
  return (
    <View style={styles.container}>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={stop}>stop</button>
      <button onClick={lap}>lap</button>
      <button onClick={lapclear}>lapclear</button>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

