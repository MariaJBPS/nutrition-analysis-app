import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
export function FoodInputForm({ getNutritionalInfo, isLoading }) {
  const [food, setFood] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getNutritionalInfo(food);
  }

  const { t } = useTranslation();
  return (
    <>
      <div className="header-section">
        <p className="remove-paragraph-margin">
          <small className="form-helper-text">{t("formHelperText1")}</small>
        </p>
        <p className="remove-paragraph-margin">
          <small className="form-helper-text">{t("formHelperText2")}</small>
          <br />
          {/* <small>{t("formHelperText3")}</small> */}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder={t("textareaPlaceholder")}
          rows="10"
          cols="65"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <br />
        <button className="submit-form-button" disabled={food === ""}>
          {isLoading ? (
            <>
              {t("submitButtonTextFetchingData")}
              <div className="spinner-border text-light spinner-border-sm" />
            </>
          ) : (
            <p className="remove-paragraph-margin">{t("submitButtonText")}</p>
          )}
        </button>
      </form>
    </>
  );
}
