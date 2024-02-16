import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import * as React from 'react';
import Footeru from "./Footeru";
const menuToDisplay = [
  { name: "Chicken Biryani", id: "I1" },
  { name: "Sawarma", id: "i2" },
  { name: "Veg Biryani", id: "i3" },
  { name: "Paneer Biryani", id: "I4" },
  { name: "special Sawarma", id: "i5" },
  { name: "Veg manchuria", id: "i6" },
  { name: "Chicken Tandoori", id: "I7" },
  { name: "Lobster", id: "i8" },
  { name: "Veg pulav", id: "i9" },
  { name: "Fish Biryani", id: "I10" },
  { name: "chicken Tikka", id: "i11" },
  { name: "Veg Meals", id: "i12" },
];
const Item = ({ name }) => {
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};
const footeru = () => <Footeru />;
const header = () => <Text style={styles.menu}>Menu</Text>;
const separator = () => <View style={styles.separator} />;
export default function MenuItems() {
  const renderItemu = ({ item }) => <Item name={item.name} />;
  const [menuPreview, setMenuPreview]=React.useState(false);
  const handlePressable=()=>{
      setMenuPreview(!menuPreview);
  }
  return (
    <View style={styles.view}>
      <Pressable style={styles.pressable} onPress={handlePressable}>
        <Text style={styles.Text}>{!menuPreview?'View Menu': 'menu' }</Text>
      </Pressable>
      {menuPreview && <FlatList
        data={menuToDisplay}
        renderItem={renderItemu}
        ItemSeparatorComponent={separator}
        // ListHeaderComponent={header}
        ListFooterComponent={footeru}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    fontSize: 25,
    color: "yellow",
    margin: 10,
  },
  pressable: {
    backgroundColor: "yellow",
    padding: 10,
    width: 150,
    borderRadius:10,
    alignSelf: "center",
  },
  Text: {
    fontSize: 20,
    alignSelf: "center",
  },
  container: {
    fontSize: 20,
    color: "white",
    margin: 20,
  },
  view: {
    flex: 1,
    flexDirection: "column",
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "white",
  },
});
