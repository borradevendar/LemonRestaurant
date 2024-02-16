import {View, Text, StyleSheet, Image} from 'react-native';

export default function Header(){
    return(
        <View style={styles.view}>
            <Image style={styles.img} resizeMode='cover' source={require('../images/lemon.jpg')}/>
            <Text style={styles.text}>Little Lemon</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    view:{flex:0.15, backgroundColor:'#EE9972', flexDirection:'row', alignItems:'center', justifyContent:'center'},
    text:{fontSize: 35 },
    img:{
        height:60,
        width:60,
        borderRadius: 50,
        marginRight: 20,
        resizeMode:'cover'
        
    }
});