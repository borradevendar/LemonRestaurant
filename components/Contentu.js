import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
import * as React from "react";
export default function Contentu({ navigation }) {
  const [userData, setUserData] = React.useState("");
  const [submit, setSubmit] = React.useState(false);
  const handleChange = (text) => {
    setUserData(text);
  };
  const handleSubmit = () => {
    setSubmit(!submit);
    console.log(userData);
  };
  const handleMenu=()=>{
    navigation.navigate('MenuItems');
  }
  return (
    <KeyboardAvoidingView
      style={conStyles.scrollView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView indicatorStyle="white" keyboardDismissMode="on-drag">
        <Text style={conStyles.text}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={conStyles.input}
          placeholder="Name"
          value={userData}
          // multiline={true}
          // keyboardType={'phone-pad'}
          onChangeText={(text) => handleChange(text)}
        />
        <View style={conStyles.container}>
          <Pressable style={conStyles.buttonu} onPress={handleSubmit}>
            <Text style={conStyles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable
            style={conStyles.buttonu}
            onPress={handleMenu}
          >
            <Text style={conStyles.buttonText}>View Menu</Text>
          </Pressable>
        </View>
        {submit === false ? (
          <Text style={conStyles.text1}>Please Enter your name..</Text>
        ) : (
          <View>
            <Text style={conStyles.text1}>
              Hello {userData}! What do you want?
            </Text>
            <View style={conStyles.imgContainer}>
              <Image
                style={conStyles.images}
                source={require("../images/img1.jpeg")}
              />
              <Image
                style={conStyles.images}
                source={require("../images/img2.jpeg")}
              />
              <Image
                style={conStyles.images}
                source={require("../images/img3.jpeg")}
              />
              <Image
                style={conStyles.images}
                source={require("../images/img4.jpeg")}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const conStyles = StyleSheet.create({
  view: { flex: 1 },
  text: {
    color: "white",
    textAlign: "center",
    margin: 10,
    marginTop: 20,
    fontSize: 15,
  },
  imgContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  images: {
    width: 250,
    height: 200,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 5,
  },
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  input: {
    backgroundColor: "white",
    height: 30,
    width: 300,
    padding: 5,
    alignSelf: "center",
    marginBottom: 15,
  },
  buttonu: {
    width: 160,
    backgroundColor: "pink",
    alignSelf: "center",
    borderRadius: 10,
    height: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
  scrollView: { flex: 1, flexWrap: "nowrap" },
  text1: { color: "white", fontSize: 20, margin: 10, textAlign: "center" },
});
