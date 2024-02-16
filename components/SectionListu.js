import { View, Text, SectionList, StyleSheet } from "react-native";

const menuItems = [
  {
    header: "Biryanis",
    menu: [
      { menu: "Chicken Biryani" },
      { name: "Veg Biryani" },
      { menu: "Paneer Biryani" },
      { menu: "Fish Biryani" },
      { menu: "Mutton Biryani" },
    ],
  },

  {
    header: "Kebabs",
    menu: [
      { menu: "Chicken Kebab" },
      { menu: "Turkish Kebab" },
      { menu: "Tangdi Kebab" },
      { menu: "Mutton Kebab" },
    ],
  },
];
const Item = ({ name }) => {
  return (
    <View>
      <Text>{menu.name}</Text>
    </View>
  );
};

export default function SectionListu() {
  const renderItem = ({ item }) => <Item name={item} />;
  const header = ({ section: { header } }) => <Text>{header}</Text>;
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <SectionList
        sections={menuItems}
        renderItem={renderItem}
        renderSectionHeader={header}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    margin: 20,
  },
});
