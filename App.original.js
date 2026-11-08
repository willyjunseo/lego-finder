// import는 다른 파일이나 라이브러리에 이미 만들어져 있는 기능을 
// 현재 파일에서 사용하기 위해 가져오는 문법
// React와 React Native가 제공하는 기능을 가져와 사용
import { useState } from 'react'; // 상태 관리 함수
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
} from 'react-native';

// 현재 앱 화면을 만드는 루트 컴포넌트
export default function App() {

  // 리액트 컴포넌트의 상태 선언 - 모달 상태 관리
  // const는 JavaScript에서 값을 담을 이름을 선언할 때 사용하는 키워드
  const [isPartModalVisible, setIsPartModalVisible] = useState(false);

  // TODO 1:
  // 버튼을 눌렀을 때 모달이 열리도록
  // setIsPartModalVisible을 사용하세요.
  function handlePartPress() {
    setIsPartModalVisible(true);
  }
  // TODO 2:
  // 닫기 버튼을 눌렀을 때 모달이 닫히도록
  // setIsPartModalVisible을 사용하세요.
  function handleClosePartModal() {
    setIsPartModalVisible(false);
  }

  // 화면에 무엇을 표시할지 작성하는 영역
  return (
    <View style={styles.screen}>
      {/* TODO 3: 앱 이름을 원하는 이름으로 수정하세요. */}
      <Text style={styles.title}>앱 이름을 여기에 작성</Text>

      {/* TODO 4:
      새로운 이미지를 assets 폴더에 넣고 경로를 변경하세요.
      contain, cover, stretch를 각각 실행해보세요. */}
      <Image
        source={require('./assets/sample-lego.png')}
        style={styles.sampleImage}
        resizeMode="cover"
      />

      {/* TODO 5: 버튼 문구와 actionButton 스타일을 수정하세요. */}
      <Pressable
        style={styles.actionButton}
        onPress={handlePartPress}
      >
        <Text style={styles.actionButtonText}>
          버튼 테스트
        </Text>
      </Pressable>

      <Modal
        visible={isPartModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleClosePartModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* TODO 6: 모달 제목과 안내 메시지를 수정하세요. */}
            <Text style={styles.modalTitle}>
              메시지 알림창
            </Text>

            <Text style={styles.modalMessage}>
              알림창에 표기할 메시지를 입력하세요.
            </Text>

            <Pressable
              style={styles.modalCloseButton}
              onPress={handleClosePartModal}
            >
              <Text style={styles.modalCloseButtonText}>
                닫기
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// 각 컴포넌트의 크기, 색상, 간격, 정렬 등을 정의
const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24, 
    backgroundColor: '#F3F6FA', 
    alignItems: 'center', 
  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#172B4D', 
    marginBottom: 16, 
    textAlign: 'center' // TODO 7: 글자를 가운데 정렬하는 속성 - 'left','right'
  },
  description: { 
    fontSize: 18, 
    lineHeight: 28, 
    color: '#42526E', 
    marginBottom: 24, 
    textAlign: 'center' 
  },
  buttonArea: { marginBottom: 12 },
  actionButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30, // TODO 8: 버튼의 모서리를 둥글게 만드는 속성
    alignItems: 'center',
    marginBottom: 12, 
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  sampleImage: {
    // TODO 9:
    // 실습 중 width와 height를 같게 만들고
    // borderRadius를 이용해 원형 이미지로 변경하기.
    width: 220,
    height: 220,
    marginBottom: 24,
    backgroundColor: 'transparent',
    borderRadius: 110,
    alignSelf: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    maxWidth: 340,
    padding: 24,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#172B4D',
    marginBottom: 12,
  },
  modalMessage: {
    fontSize: 16,
    lineHeight: 24,
    color: '#42526E',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalCloseButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
