import { NutritionItem } from "./NutritionItem";
import { useTranslation } from "react-i18next";
import "../i18n";
export function NutritionFactsList({ nutritionalInfoList }) {
  const { t } = useTranslation();
  return (
    <>
      {nutritionalInfoList.length > 0 ? (
        <>
          <h2 className="nutrition-table-header">
            {t("nutritionTableHeading")}
          </h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{t("tableHeaderQty")}</th>
                <th>{t("tableHeaderFood")}</th>
                <th>{t("tableHeaderCalories")}</th>
                <th>{t("tableHeaderWeight")}</th>
                <th>{t("tableHeaderCarbs")}</th>
                <th>{t("tableHeaderProtein")}</th>
                <th>{t("tableHeaderFat")}</th>
                <th>{t("tableHeaderFoodGroup")}</th>
              </tr>
            </thead>
            <tbody>
              {nutritionalInfoList?.map((foodInfo, index) => (
                <NutritionItem foodInfo={foodInfo} key={index} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="helper-text">{t("formHelperText4")}</p>
      )}
    </>
  );
}
