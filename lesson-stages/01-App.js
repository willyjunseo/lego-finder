import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>레고 부품 찾기</Text>
      <Text style={styles.description}>떨어진 부품의 위치를 찾아보세요.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F3F6FA' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#172B4D', marginBottom: 16 },
  description: { fontSize: 18, lineHeight: 28, color: '#42526E', marginBottom: 24 },
  buttonArea: { marginBottom: 12 },
});
