/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import Movies from './Movies.js';
import MovieList from './Movies.js';
import {ScrollView} from 'react-native';
import BoatList from './Boats.js';

/*
Movie.js -

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Text>Lesson 05 Exercises</Text>
        <MovieList />
      </View>
    </ScrollView>
  );
};
*/

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Text>GetABoat - For Sale</Text>
        <BoatList />
      </View>
    </ScrollView>
  );
};

export default App;
