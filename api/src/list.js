import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

// const BASE_URL = 'https://imdb-api.com/en/API/Top250Movies';
// const API_KEY = 'k_5y3v1idc';

const List = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    GetlistPhotos('inception');
    return () => {};
  }, []);

  const GetlistPhotos = () => {
    // const apiURL = `${BASE_URL}/${API_KEY}/${keyword}`;
    const apiURL='https://imdb-api.com/en/API/Top250Movies/k_5y3v1idc';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setdata(resJson);
      })
      .catch(error => {
        console.log('Error', error);
      })
      .finally(() => setisLoading(false));
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => {
        navigation.navigate('watch',{id: item.id});
      }}>
        <Image
          style={styles.image}
          source={{uri: item.image}}
          resizeMode="contain"
        />
        <View style={styles.wrapText}>
          <Text style={{color:'red',textAlign:'center'}}> {item.title}</Text>
           <Text style={{color:'blue',textAlign:'center'}}> {item.fullTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#DDDDDD'}}> 
       <Text style={{fontSize:25,alignSelf:'center',marginTop:10,color:'red'}}> List Top 250 Movies</Text>
       </View>
      {/* {isLoading ? (
        
        <ActivityIndicator />
      ) : ( */}
       
        <FlatList
          style={styles.list}
          data={data.items}
          renderItem={renderItem}
          //keyExtrator={item => `key-${item.id}`}
        />
      {/* )} */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 5,
    //shadowColor: '#000',
    //shadowRadius: 4,
    //shadowOpacity: 0.25,
  },
  image: {
    width: 100,
    height: 150,
    //borderRadius:120,
  },
  wrapText: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
});
export default List;
