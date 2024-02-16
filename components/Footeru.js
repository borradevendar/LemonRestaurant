import { View, Text, StyleSheet } from "react-native";

export default function Footeru(){
    return(
        <View style={styles.view}>
            <Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
            
        </View>
    );
}

const styles= StyleSheet.create({
    view: {backgroundColor:'#EE9972', marginTop:'auto'},
    text: {textAlign:'center', padding:10, fontSize:15}
})