import { getFoodGroup } from "../utils/stringUtils";
import { useTranslation } from "react-i18next";
import "../i18n";

export function NutritionItem({ foodInfo }) {
  const { t } = useTranslation();
  return (
    <>
      <tr>
        <td>
          <img
            src={foodInfo.photo.thumb}
            alt={foodInfo.food_name}
            style={{ width: "70px", height: "70px" }}
          />
        </td>
        <td>{foodInfo.serving_qty}</td>
        <td>{foodInfo.tags.item}</td>
        <td>
          {foodInfo.nf_calories} {t("kcal")}
        </td>
        <td>
          {foodInfo.serving_weight_grams} {t("grams")}
        </td>
        <td>
          {foodInfo.nf_total_carbohydrate} {t("grams")}
        </td>
        <td>
          {foodInfo.nf_protein} {t("grams")}
        </td>
        <td>
          {foodInfo.nf_total_fat} {t("grams")}
        </td>
        <td>{getFoodGroup(foodInfo.tags.food_group)}</td>

        {/* nf_p is phosphorus */}
      </tr>
    </>
  );
}
