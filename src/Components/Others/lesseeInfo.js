import React from "react";

export default function lesseeInfo(props) {
  return (
    <div>
      <h2>Lessee Information</h2>
      <label>
        Name:
        <input
          required
          name="lesseeName"
          type="text"
          value={props.formData.lesseeName}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Address:
        <input
          required
          name="lesseeAddress"
          type="text"
          value={props.formData.lesseeAddress}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Phone:
        <input
          required
          name="lesseePhone"
          type="text"
          value={props.formData.lesseePhone}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Monthly Income:
        <input
          required
          name="lesseeMonthlyIncome"
          type="text"
          value={props.formData.lesseeMonthlyIncome}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
      <label>
        Date of Birth:
        <input
          required
          type="date"
          name="lesseeDOB"
          value={props.formData.lesseeDOB}
          onChange={(e) => props.onChangeMethod(e)}
        />
      </label>
    </div>
  );
}
