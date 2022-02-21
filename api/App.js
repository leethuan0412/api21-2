import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
const App = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    GetlistPhotos();
    return () => {};
  }, []);

  const GetlistPhotos = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/photos';
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
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{uri: item.url}}
          resizeMode="contain"
        />
        <View style={styles.wrapText}>
          <Text style={{color:'red',textAlign:'center'}}> {item.title}</Text>
          {/* {/* <Text style={{color:'blue',textAlign:'center'}}> {item.name}</Text> */}
          {/* <Text style={{color:'green',textAlign:'center'}}> {item.body}</Text>  */}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#DDDDDD'}}> 
       <Text style={{fontSize:25,alignSelf:'center',marginTop:10,color:'red'}}> List Photos</Text>
       </View>
      {/* {isLoading ? (
        
        <ActivityIndicator />
      ) : ( */}
       
        <FlatList
          style={styles.list}
          data={data}
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
    borderRadius:120,
  },
  wrapText: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
});
export default App;
