import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import useFetch from 'use-http';

import Card from '../../../components/Card';
import Swiper from '../../../components/Swiper';

const News = () => {
  const options = {
    data: [], // default for `data` will be an array instead of undefined
  };

  const { loading, error, data } = useFetch(
    'https://newsapi.org/v2/everything?apiKey=68ddf899b505404e960daf512baabe76&q=كورونا مصر',
    []
  );

  return (
    <View style={styles.section}>
      {error && <Text>Error!</Text>}
      {loading && <Text>Loading...</Text>}
      {data &&
        data.articles.map((article) => {
          return (
            <Card style={{ width: 300 }}>
              <Text>{article.title}</Text>
            </Card>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
  },
});

export default News;