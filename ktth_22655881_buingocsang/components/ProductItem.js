import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react'

import { Card } from 'react-native-paper';
import CartSummary from './CartSummary'

export default function ProductItem({item}) {
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
    <View style={styles.item}>
            <Text style={styles.tp}>{item.id}</Text>
            <Text style={styles.tp}>{item.ten}</Text>
            <Text style={styles.tp}>{item.gia}</Text>
            <TouchableOpacity style={styles.button} onPress = {()=><CartSummary id = {item.id} gia = {item.gia}/>}>
              <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Them vao gio</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item:{
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 5
  },
  tp:{
    marginRight: 20
  },
  button: {
    width: 150,
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5
  },
});
