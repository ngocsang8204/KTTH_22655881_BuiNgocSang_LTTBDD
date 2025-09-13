import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react'

import { Card } from 'react-native-paper';

export default function CartSummary({id, gia}) {
  const [tongTien, setTongTien] = useState(0)
  const [cart, setCart] = useState([])

  useEffect = () =>{
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
