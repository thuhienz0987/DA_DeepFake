import React from 'react';
import { Modal, StyleSheet, View, ActivityIndicator } from 'react-native';

interface LoadingProps {
  visible: boolean;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ visible, color = '#ffffff' }) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.background}>
        <ActivityIndicator size="large" color={color} />
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
