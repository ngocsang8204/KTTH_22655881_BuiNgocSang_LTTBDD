import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react'

import { Card } from 'react-native-paper';

import AssetExample from './components/AssetExample';

export default function App() {
  const list = [{id: 1, ten: 'Banh mi', gia: 10000}, 
                {id: 2, ten: 'Pho', gia: 20000},
                {id: 3, ten: 'Bun bo', gia: 30000},
                {id: 4, ten: 'Banh trang', gia: 40000},
                {id: 5, ten: 'Bun rieu', gia: 50000},]
  const [tongTien, setTongTien] = useState(0)
  const [cart, setCart] = useState([])
  const themGio = (id, gia) =>{
    setCart([...cart, {id}])
    setTongTien(tongTien + gia)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cart}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>So luong: {cart.length} san pham</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cart}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Tong tien: {tongTien} dong</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem ={({item})=>(
          <View style={styles.item}>
            <Text style={styles.tp}>{item.id}</Text>
            <Text style={styles.tp}>{item.ten}</Text>
            <Text style={styles.tp}>{item.gia}</Text>
            <TouchableOpacity style={styles.button} onPress = {()=>themGio(item.id, item.gia)}>
              <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Them vao gio</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item:{
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
  },
  tp:{
    marginRight: 25
  },
  button: {
    width: 150,
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5
  },
  cart:{
    width: 200,
    borderWidth: 2,
    marginBottom: 20
  }
});
