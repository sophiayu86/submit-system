import React, { useState, useEffect } from "react";
const initialInputList = [
  {
    field_name: "投稿人姓名",
    field_eng_name: "Name",
    id: "author_name_input",
    name: "author_name",
    inputField: "",
  },
  {
    field_name: "身份",
    field_eng_name: "Position",
    id: "select_identity",
    name: "identity",
    inputField: "",
    options: [
      "大專教師 College Faculty",
      "研究人員 Institution Faculty",
      "研究生 Postgraduate",
      "大學生 Undergraduate",
      "社會人士 Civilian",
    ],
  },
  {
    field_name: "服務單位/就讀學校",
    field_eng_name: "Institution",
    id: "author_org_input",
    name: "author_org",
    inputField: "",
  },
  {
    field_name: "電子郵件",
    field_eng_name: "Email",
    id: "author_email_input",
    name: "author_email",
    inputField: "",
  },
  {
    field_name: "稿件標題",
    field_eng_name: "Title of the submittion",
    id: "article_title_input",
    name: "article_title",
    inputField: "",
  },
  {
    field_name: "報告者姓名",
    field_eng_name: "Presenter Name",
    id: "presenter_name_input",
    name: "presenter_name",
    inputField: "",
  },
  {
    field_name: "摘要內文",
    field_eng_name: "Abstract content",
    id: "abstract_input",
    name: "abstract",
    inputField: "",
  },
  {
    field_name: "本次投稿領域",
    field_eng_name: "Area",
    id: "topic",
    name: "topic",
    inputField: "",
    options: [
      "臨床心理學組",
      "工商心理學組",
      "教育心理學組",
      "實驗認知心理學組",
      "心理計量學組",
      "諮商心理學組",
      "社會與人格心理學組",
      "發展心理學組",
      "神經與生理心理學組",
    ],
  },
  {
    field_name: "論文發表類別",
    field_eng_name: "Type of presentation",
    id: "type",
    name: "submit_type",
    inputField: "",
    options: [
      "專題論文（口頭發表/Oral）",
      "獨立論文（壁報發表/Poster）",
      "專題演講（Symposium，由籌畫人代表投稿）",
    ],
  },
];

export default function Inputs({ data, handleChange, optionList }) {
  const [inputArray, setinputArray] = useState(initialInputList);
  const NextArray = inputArray.map((input) => {
    if (input.id === "abstract_input") {
      return {
        ...input,
        inputField: (
          <textarea
            rows="10"
            // cols="35"
            className="form-control"
            id={input.id}
            name={input.name}
            value={data.name}
            required=""
            onChange={handleChange}
          />
        ),
      };
    } else if (input.id === "select_identity") {
      return {
        ...input,
        inputField: (
          <select
            className="form-control"
            id="select_identity"
            name="identity"
            required=""
            onChange={handleChange}
          >
            <option value="">--請選擇--</option>
            {input.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ),
      };
    } else if (input.id === "topic") {
      return {
        ...input,
        inputField: (
          <div className="row">
            <div className="col-5 ps-4">
              {input.options.slice(0, 5).map((option) => (
                <div
                  key={option}
                  className="custom-control custom-radio more-mg d-flex align-items-baseline"
                >
                  <input
                    type="radio"
                    id={`topic_${option}`}
                    name="topic"
                    defaultValue={option}
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor={`topic_${option}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-6">
              {input.options.slice(5).map((option) => (
                <div
                  key={option}
                  className="custom-control custom-radio more-mg d-flex align-items-baseline"
                >
                  <input
                    type="radio"
                    id={`topic_${option}`}
                    name="topic"
                    defaultValue={option}
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor={`topic_${option}`}
                  >
                    {option}
                  </label>
                </div>
              ))}

              <div className="custom-control custom-radio more-mg d-flex align-items-baseline">
                <input
                  type="radio"
                  id="other_text_radio"
                  name="topic"
                  defaultValue=""
                  className="custom-control-input"
                  onChange={handleChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="other_text_radio"
                >
                  <input
                    type="text"
                    id="other_text"
                    name="topic"
                    className="form-control form-control-sm"
                    placeholder="其他專業領域"
                    value={data.name}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
        ),
      };
    } else if (input.id === "type") {
      return {
        ...input,
        inputField: (
          <div className="row">
            <div className="col-12 ps-4">
              {input.options.map((option) => (
                <div
                  key={option}
                  className="custom-control custom-radio more-mg d-flex align-items-baseline"
                >
                  <input
                    type="radio"
                    id={`type_${option}`}
                    name="submit_type"
                    defaultValue={option}
                    className="custom-control-input"
                    required=""
                    onChange={handleChange}
                  />
                  <label
                    className="custom-control-label ms-1"
                    htmlFor={`type_${option}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ),
      };
    } else {
      return {
        ...input,
        inputField: (
          <input
            type="text"
            className="form-control"
            id={input.id}
            name={input.name}
            value={data.name}
            required=""
            onChange={handleChange}
          />
        ),
      };
    }
  });
  useEffect(() => {
    setinputArray([...NextArray]);
  }, []);

  return (
    <div className="container">
      {inputArray.map((input) => {
        return (
          <div key={input.id} className="row justify-content-center">
            <div className="col-lg-2 required-col emphz">
              {input.field_name}
              <br />
              <span className="en_col">{input.field_eng_name}</span>
            </div>
            <div className="col-lg-4">{input.inputField}</div>
          </div>
        );
      })}
    </div>
  );
}
