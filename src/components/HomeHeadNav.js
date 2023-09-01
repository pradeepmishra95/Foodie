import { View, Text,StyleSheet } from 'react-native'
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../globals/styles'



    const HomeHeadNav = ({navigation}) => {
        return (
          <View style={styles.container}>
              <Fontisto name="nav-icon-a" size={24} color="black" style={styles.myicon}/>
              <View style={styles.containerin}>
            <Text style={styles.mytext} >Foodie</Text>
            <Ionicons name="fast-food-outline" size={24} color="black" style={styles.myicon}/>
          </View>
          <FontAwesome name="user-circle" size={24} color="black" style={styles.myicon} onPress={() => navigation.navigate("userprofile")}/>
          </View>
        )
      }

      
      const styles = StyleSheet.create({
          container: {
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
              backgroundColor: colors.col1,
              elevation: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
          },
          containerin: {
              flexDirection: 'row',
              alignItems: 'center',
          },
          myicon: {
              color: colors.text1,
          },
          mytext: {
              color: colors.text1,
              fontSize: 24,
          },
      })


export default HomeHeadNav