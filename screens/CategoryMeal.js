import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals fount, maybe check you filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMeal.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});
export default CategoryMeal;
