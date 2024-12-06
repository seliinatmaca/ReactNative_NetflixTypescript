import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Games
: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Games
      </Text>
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

export default Games
;