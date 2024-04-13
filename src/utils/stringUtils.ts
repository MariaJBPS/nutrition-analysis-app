export const getFoodGroup = (foodGroupNumber: number): string => {
  switch (foodGroupNumber) {
    case 1:
      return "Dairy";
    case 2:
      return "Protein";
    case 3:
      return "Fruit";
    case 4:
      return "Vegetable";
    case 5:
      return "Grain";
    case 6:
      return "Fat";
    case 7:
      return "Legume";
    case 8:
      return "Combination";
    case 9:
    case 0:
      return "";
    default:
      return "";
  }
};
