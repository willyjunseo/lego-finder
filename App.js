import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
  ImageBackground
} from 'react-native';

export default function App() {
  const [isPartModalVisible, setIsPartModalVisible] =
    useState(false);

  function handlePartPress() {
    // TODO 1:
    // 버튼을 눌렀을 때 모달이 열리도록
    // setIsPartModalVisible을 사용하세요.
    setIsPartModalVisible(true);
  }

  function handleClosePartModal() {
    // TODO 2:
    // 닫기 버튼을 눌렀을 때 모달이 닫히도록
    // setIsPartModalVisible을 사용하세요.
    setIsPartModalVisible(false);
  }

  return (
  <ImageBackground
   source={require('./assets/background.png')}
   style={styles.screen}
   resizeMode="cover"
  >   
      {/* TODO 3:
          앱 이름을 원하는 이름으로 수정하세요. */}
      <Text style={styles.title}>
        BrickBack
      </Text>

      {/* TODO 4:
          새로운 이미지를 assets 폴더에 넣고 경로를 변경하세요.
          contain, cover, stretch를 각각 실행해보세요. */}
      <Image
        source={require('./assets/sample-lego.png')}
        style={styles.sampleImage}
        resizeMode="contain"
      />

      {/* TODO 5:
          버튼 문구와 actionButton 스타일을 수정하세요. */}
      <Pressable
        style={styles.actionButton}
        onPress={handlePartPress}
      >
        <Text style={styles.actionButtonText}>
          Fix Your Lego!
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
            {/* TODO 6:
                모달 제목과 안내 메시지를 수정하세요. */}
            <Text style={styles.modalTitle}>
              Greetings!
            </Text>

            <Text style={styles.modalMessage}>
              Welcome!
            </Text>

            <Pressable
              style={styles.modalCloseButton}
              onPress={handleClosePartModal}
            >
              <Text style={styles.modalCloseButtonText}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F3F6FA',
  },

  title: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172B4D',
    marginBottom: 16,
    textAlign: 'center',

    // TODO 7:
    // 글자를 가운데 정렬하는 속성을 추가하세요.
  },

  actionButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 40,

    // TODO 8:
    // 버튼의 모서리를 둥글게 만드는 속성을 추가하세요.
  },

  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  sampleImage: {
    width: 220,
    height: 220,
    marginBottom: 24,
    backgroundColor: 'transparent',
    borderRadius:0,
    alignSelf: 'center',

    // TODO 9:
    // 실습 중 width와 height를 같게 만들고
    // borderRadius를 이용해 원형 이미지로 변경하세요.
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