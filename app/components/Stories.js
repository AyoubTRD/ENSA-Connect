import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppForm from "./forms/AppForm";

import FormStoryInput from "./forms/FormStoryInput";
import Story from "./Story";
import StoryInput from "./StoryInput";

const data = [
  {
    id: 10,
    isInput: true,
  },
  {
    id: 0,
    user: {
      name: "Sam Jackson",
      image: require("../assets/avatar1.jpg"),
    },
    image: require("../assets/story1.jpg"),
  },
  {
    id: 1,
    user: {
      name: "Jennifer Lopez",
      image: require("../assets/avatar2.jpg"),
    },
    image: require("../assets/story2.jpg"),
  },
  {
    id: 2,
    user: {
      name: "Ayoub Taouarda",
      image: require("../assets/avatar3.jpg"),
    },
    image: require("../assets/story3.jpg"),
  },
];

function Stories({}) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          !item.isInput ? (
            <Story
              user={item.user}
              image={item.image}
              isLast={index + 1 === data.length}
            />
          ) : (
            <AppForm initialValues={{ image: "" }}>
              <FormStoryInput name="image" />
            </AppForm>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: "100%",
  },
});

export default Stories;
