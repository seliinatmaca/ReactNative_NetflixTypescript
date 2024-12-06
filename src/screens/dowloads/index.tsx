import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dowloads: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Dowloads</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dowloads;