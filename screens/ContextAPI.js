import React,{useState,useContext} from 'react';
import {Button, Text, View} from 'react-native';
import { myContext,myContext2 } from '../App';

const ContextAPI = ({navigation}) => {
  /*   const firstName = useContext(myContext) */
    const lastName = useContext(myContext2)
 
  return (
    <View >
    
                <>
                <myContext.Consumer>
                    {value => <Text>{value}</Text>}
                </myContext.Consumer>
               {/*  <Text>{firstName}</Text> */}
                <Text>{lastName}</Text>
                </>
           
     
        <Button title="go to child" onPress={() => navigation.navigate('childComponent')} />
    </View>
  );
};

export default ContextAPI;
