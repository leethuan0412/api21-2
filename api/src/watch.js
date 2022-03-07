import React, { useState ,useEffect} from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';


const watch = (props) => {
  const { navigation } = props;
  const [data, setData] = useState('');
  const getMovies = async () => {
    try {
     const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_5y3v1idc/${props?.route?.params?.id}`);
    console.log({response});
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getMovies();
 }, []);
  return (
   
        <WebView
        source={{
          uri: `${data?.videoUrl}`
        }}
        style={{ marginTop: 20 }}
      />
 
  );
};

const styles = StyleSheet.create({

});

export default watch;