import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SearchBar from "./components/SearchBar";
import Prices from "./components/Prices";

export default function App() {
    return (
        <View style={styles.container}>

            <SearchBar/>

            <Prices />

            <StatusBar style="auto"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a3f5a',
        alignItems: 'center',
        justifyContent: 'center',
        // width: 500,
    }
});
