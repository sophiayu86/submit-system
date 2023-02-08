import React, { useState } from "react";
import FormContent from "../components/FormContent";
import { v4 as uuid } from "uuid";
import Submitted from "./Submitted";

export default function Form({ submitted, setSubmitted }) {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const [data, setData] = useState({
    author_name: "",
    author_org: "",
    identity: "",
    author_email: "",
    article_title: "",
    presenter_name: "",
    topic: "",
    submit_type: "",
    abstract: "",
    uid: "",
    timestamp: "",
  });
  const { uid, timestamp, ...requiredField } = data;
  const canSubmit = [...Object.values(requiredField)].every(Boolean);

  const handleSubmit = () => {
    const time = Date.now();
    const today = new Date(time);
    setData((prevData) => ({
      ...prevData,
      uid: small_id,
      timestamp: today.toISOString(),
    }));
    console.log("a");
    console.log(JSON.stringify(data));
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {!submitted && (
        <FormContent
          data={data}
          handleChange={handleChange}
          canSubmit={canSubmit}
          handleSubmit={handleSubmit}
          setSubmitted={setSubmitted}
        />
      )}

      {submitted && <Submitted data={data} />}
    </>
  );
}