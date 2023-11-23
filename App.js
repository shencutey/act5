import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import { users } from './info';
import {App2} from './code';

export default function App() {

  const showFullName = (users) =>{
    alert(users)
  };
  
  return (
      <View style={styles.container}>
      <ScrollView>
      <Entypo/>
      <FlatList
        data={users}
        keyExtractor={(index) => index.id.toString()}
        renderItem={({ item }) => (

        <View style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: item.avatar }}
          />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.add}>{item.address}</Text>
        </View>
        
        <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>showFullName(`${'Name: '}${item.name}${'\n'}${'Nickname: '}${item.nickName}${'\n'}${'Address: '}${item.address}${'\n'}${'Course and Year: '}${item.courseAndYear}`)}>
          <Icon
            name="dots-three-horizontal"
            type="entypo"
            size={20}
            style={styles.opt}
        />
        </TouchableOpacity>
        </View> 
    </View>
  )}
    />
    </ScrollView>
    <App2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    marginTop:20,
    padding:20
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius:400/2,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight:'bold',
  },
  add:{
    fontSize: 12,
    marginBottom:20
  },
  opt:{
    flexDirection:'row-reverse',
    padding:12,
    marginLeft:15
  },
});