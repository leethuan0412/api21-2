import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';
import { ListItem, SearchBar } from "react-native-elements";
import datafilm from './data';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import SearchBar from 'react-native-platform-searchbar';
// const BASE_URL = 'https://imdb-api.com/en/API/Top250Movies';
// const API_KEY = 'k_5y3v1idc';

const List = () => {
  const [data, setdata] = useState({});
  const [masterdata, setMasterdata] = useState([]);
  // const [isLoading, setisLoading] = useState(true);
  const [search,setSearch]=useState('');
  const navigation = useNavigation();
  useEffect(() => {
    // GetlistPhotos();
    // return () => {};
    setdata({...datafilm});
    setMasterdata({...datafilm});
  }, []);
  

  const GetlistPhotos = () => {
    // const apiURL = `${BASE_URL}/${API_KEY}/${keyword}`;
    const apiURL='https://imdb-api.com/en/API/Top250Movies/k_9pxabpt8';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        
        setdata(resJson);
        setMasterdata(resJson);
        console.log(masterdata,"gggggggggg")
      })
      .catch(error => {
        console.log('Error', error);
      })
      .finally(() => setisLoading(false));
  };

  const searchFilter =(text) => {
    setSearch(text);
    // if(text){
    //   const newData = masterdata.items.filter((item) => {
    //   item.title ===text
    //     const itemData= item.title ? item.title.toUpperCase()
    //     :''.toUpperCase();
    //     const textData = text.toUpperCase();
    //     return itemData.indexOf(textData) > -1;
    // });
    //    setdata(newData);
    //    setSearch(text);
    //   } else
    //   {
    //     setdata(masterdata);
    //     setSearch(text);
    //   }
  }
  useEffect(() =>{
    if(search)
    {
      const newData =  masterdata.items.filter((item) => item.title===search);
        setdata({items: newData});
    
    }
    else{
    setdata({...masterdata});
    }
    
  },[search]) 
    

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
           <Text style={{color:'blue',textAlign:'center'}}> {item.year}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#DDDDDD'}}> 
       <Text style={{fontSize:25,alignSelf:'center',marginTop:10,color:'red'}}> List Top 250 Movies</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text) =>searchFilter(text)}
        value={search}
        placeholder="Search here"
        underlineColorAndroid="transparent"
        
      />
       </View>
      {/* {isLoading ? (
        
        <ActivityIndicator />
      ) : ( */}
       
        <FlatList
          style={styles.list}
          data={data.items}
          renderItem={renderItem}
          keyExtrator={(item,index)=>index.toString()}
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
  input :{
    height:40,
    borderWidth:1,
    paddingLeft:20,
    margin:5,
    borderColor:'#009688',
    backgroundColor:'white',
  },
});
export default List;
