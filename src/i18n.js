import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        foodApi: "Food API",
        formHelperText1: `Example search: "2 large eggs" or "100 grams of mince beef"`,
        formHelperText2: `Also try: "For breafast I had 1 egg, 2 rashes of bacon, 40 grams of
        baked beans"`,
        formHelperText3: `For breakfast i ate 1 banana, 60 grams of oats and some milk, \nfor
        lunch ate one beef burger with pasta and salad, \nfor snack i ate 3
        small donuts and 6 rice cakes`,
        textareaPlaceholder: "What did you eat?",
        submitButtonTextFetchingData: "Fetching data...",
        submitButtonText: "Get Nutritional Information",
        nutritionTableHeading: "Nutrition Facts",
        tableHeaderQty: "Qty",
        tableHeaderFood: "Food",
        tableHeaderCalories: "Calories",
        tableHeaderWeight: "Weight",
        tableHeaderFoodGroup: "Food Group",
        formHelperText4:
          "Get nutritional information such as calories, cholesterol, etc.",
        grams: "g",
        kcal: "kcal",
        tableHeaderCarbs: "Carbohydrates",
        tableHeaderProtein: "Protein",
        tableHeaderFat: "Fats",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
