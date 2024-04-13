import { useState } from "react";
import NutrionionixLogo from "./assets/Updated_NutritionixAPI_hires_flat.png";
import { fetchNutrientBreakdown } from "./api/api";
import { FoodInputForm } from "./components/FoodInputForm";
import { NutritionFactsList } from "./components/NutritionFactsList";
import ErrorIcon from "./assets/icons/exclamation-circle-fill.svg";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./styles/styles.css";

export default function App() {
  const [nutritionalInfoList, setNutritionalListInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getNutritionalInfo(food) {
    setIsLoading(true);
    fetchNutrientBreakdown(food)
      .then((response) => {
        if (!response.ok) {
          let error = "ERROR: " + response.status + " " + response.statusText;
          setErrorMessage(error);
          throw new Error(error);
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        console.log(`RESPONSE for query: ${food}`, data["foods"]);
        setNutritionalListInfo(data["foods"]);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });

    setErrorMessage(null);
  }

  const { t } = useTranslation();
  return (
    <>
      <a href="https://www.nutritionix.com/" target="_blank">
        <img
          src={NutrionionixLogo}
          className="logo"
          alt="Nutritionix logo"
          width={200}
        />
      </a>
      <h2 className="first-header">{t("foodApi")}</h2>

      <FoodInputForm
        getNutritionalInfo={getNutritionalInfo}
        isLoading={isLoading}
      />

      {errorMessage ? (
        <>
          <div className="error-section error-message">
            {errorMessage}
            <img className="error-icon" src={ErrorIcon}></img>
          </div>
        </>
      ) : (
        <NutritionFactsList nutritionalInfoList={nutritionalInfoList} />
      )}
    </>
  );
}
