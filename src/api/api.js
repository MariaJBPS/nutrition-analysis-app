export const fetchNutrientBreakdown = (food) => {
  return fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-remote-user-id": 0, // development mode
      "x-app-id": import.meta.env.VITE_APP_ID,
      "x-app-key": import.meta.env.VITE_APP_KEY,
    },
    body: JSON.stringify({
      query: food,
    }),
  });
};
