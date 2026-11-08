import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // 1. 상태와 초깃값
  const [message, setMessage] = useState('원하는 인식 기능을 선택해주세요.');

  // 2. 이벤트 핸들러에서 상태 갱신
  function handlePartPress() {
    setMessage('인식할 부품 사진을 준비해주세요.');
  }

  function handleSetPress() {
    setMessage('레고 작품의 전체 사진을 준비해주세요.');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>레고 부품 찾기</Text>
      <Text style={styles.description}>{message}</Text>
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
