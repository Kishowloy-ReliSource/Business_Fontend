import React from "react";

export default function (props) {
  return (
    <div>
      <h2>Co-Lessee Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="coLesseeName"
          value={props.formData.coLesseeName}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="coLesseeAddress"
          value={props.formData.coLesseeAddress}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="coLesseePhone"
          value={props.formData.coLesseePhone}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Monthly Income:
        <input
          type="text"
          name="coLesseeMonthlyIncome"
          value={props.formData.coLesseeMonthlyIncome}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="coLesseeDOB"
          value={props.formData.coLesseeDOB}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
    </div>
  );
}
