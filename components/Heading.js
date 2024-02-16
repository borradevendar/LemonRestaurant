import {View, Text,StyleSheet} from 'react-native';

export default function Heading(){
    return(
        <View>
            <Text style={styles.text}>
            Welcome to Little Lemon    
            </Text>
        </View>
    );
}
const styles= StyleSheet.create({
    text:{color:'white', textAlign:'center',margin:10, fontSize:35}
});