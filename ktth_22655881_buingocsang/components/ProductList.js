import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react'

import { Card } from 'react-native-paper';
import ProductItem from './ProductItem'

export default function ProductList({ds}) {
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
      <FlatList
        data={ds}
        keyExtractor={(item) => item.id}
        renderItem ={({item})=>(
          <ProductItem item={item}/>
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
});
