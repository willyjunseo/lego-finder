import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  // 함수를 호출하지 않고 onPress에 전달합니다.
  function handlePartPress() {
    Alert.alert('부품 인식', '인식할 부품 사진을 준비해주세요.');
  }

  function handleSetPress() {
    Alert.alert('제품 인식', '레고 작품의 전체 사진을 준비해주세요.');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>레고 부품 찾기</Text>
      <Text style={styles.description}>떨어진 부품의 위치를 찾아보세요.</Text>
      <View style={styles.buttonArea}>
        <Button title="부품 인식" onPress={handlePartPress} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="제품 인식" onPress={handleSetPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F3F6FA' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#172B4D', marginBottom: 16 },
  description: { fontSize: 18, lineHeight: 28, color: '#42526E', marginBottom: 24 },
  buttonArea: { marginBottom: 12 },
});
