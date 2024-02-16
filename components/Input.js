import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native";
import * as React from "react";

export default function Input({navigation}) {
    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (namu, value) => {
        setUserData({...userData, [namu] : value});
    };
    const handleSubmit = (event) => {
        console.log({ userData });
        navigation.navigate('content');
    };
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.text}
                placeholder="Name"
                value={userData.name}
                onChangeText={(Text) => handleChange('name', Text)}
            />
            <TextInput
                style={styles.text}
                placeholder="Email"
                value={userData.email}
                onChangeText={(Text) => handleChange('email', Text)}
            />
            <TextInput
                style={styles.text}
                placeholder="Password"
                secureTextEntry= {true}
                value={userData.password}
                onChangeText={(Text) => handleChange('password', Text)}
            />
            <View style={styles.ButtonView}>
            <Pressable style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Submit</Text></Pressable>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        backgroundColor: "white",
        height: 50,
        width:300,
        borderWidth: 5,
        borderColor:'yellow',
        margin:4,
        padding:10
    },
    Button:{
        width:150,
        height:40,
        borderRadius:10,
        backgroundColor:'yellow',
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        verticalAlign:'middle',
        
    },
    ButtonView:{
        marginTop:5
    },
    view: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center'
    }
});