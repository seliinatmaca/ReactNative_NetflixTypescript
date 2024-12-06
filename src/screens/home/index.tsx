import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/moviesActions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Text style={{fontSize: 30}}>Home</Text>
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

export default Home;
