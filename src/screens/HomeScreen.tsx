import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard'
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreenProps } from "../types/navigation";
import useGetMatches from "../hooks/useGetMatches";

const HomeScreen = () => {

    const {data, loading, error} = useGetMatches();
    console.log(data);

    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString("'Hello World'");
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.center}>
          <TouchableOpacity onPress={copyToClipboard}>
            <Text>Ya deberia tener todos los resultados de por si, no?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={fetchCopiedText}>
            <Text>View Copied</Text>
          </TouchableOpacity>
          <Text>{copiedText}</Text>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;