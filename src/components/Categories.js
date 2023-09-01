import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../globals/styles';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
const Categories = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.head}>Categories</Text>
     <ScrollView horizontal>
        <View style={styles.box}>
        <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
            <Text style={styles.text}> Starter</Text>
             </View>

             <View style={styles.box}>
        <FontAwesome5 name="pizza-slice" size={24} color="black"  style={styles.myicon} />
            <Text style={styles.text}> Dinner</Text>
             </View>

             <View style={styles.box}>
             <MaterialCommunityIcons name="noodles" size={24} color="black"
             
             
             
             style={styles.myicon} />
            <Text style={styles.text}> Breakfast</Text>
             </View>

             <View style={styles.box}>
        <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
            <Text style={styles.text}> Burger</Text>
             </View>

             <View style={styles.box}>
        <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
            <Text style={styles.text}> Burger</Text>
             </View>

             <View style={styles.box}>
        <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
            <Text style={styles.text}> Burger</Text>
             </View>

          
     </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.col1,
        width: '100%',
        // height: 100,
        // alignItems: 'center',
        elevation: 10,
        borderRadius: 10,
    },
    head: {
        color: colors.text1,
        fontSize: 25,
        fontWeight: '300',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: colors.text1,
        borderBottomWidth: 1,
    },
    box: {
        backgroundColor: colors.col1,
        elevation: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
   myicon: {
        marginRight: 10,
        color: colors.text3,
    },
    mytext: {
        color: colors.text3,
    }
})