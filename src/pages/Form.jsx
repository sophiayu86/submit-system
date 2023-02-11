import React, { useState } from "react";
import FormContent from "../components/FormContent";
import { v4 as uuid } from "uuid";
import Complete from "../components/Complete";
import Footer from "../components/Footer";
import Reminder from "../components/Reminder";
import Header from "../components/Header";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(true);
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
  const canSubmit = [...Object.values(requiredField)].every(Boolean)&& valid;
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const handleSubmit = () => {
    const time = Date.now();
    const today = new Date(time);
    setData((prevData) => ({
      ...prevData,
      uid: small_id,
      timestamp: today.toISOString(),
    }));
    console.log(
      JSON.stringify({
        ...data,
        uid: small_id,
        timestamp: today.toISOString(),
      })
    );
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    if (name === "author_email") {
      const emailRule =
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (emailRule.test(e.target.value)) {
        setValid(true);
      } else {
        setValid(false);
      }
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header text="2020 臺灣心理學年會徵稿：新冠肺炎與心理健康" />
      {!submitted && (
        <>
          <Reminder />
          <FormContent
            data={data}
            handleChange={handleChange}
            canSubmit={canSubmit}
            handleSubmit={handleSubmit}
            setSubmitted={setSubmitted}
            valid={valid}
          />
          <Footer />
        </>
      )}

      {submitted && <Complete data={data} />}
    </>
  );
}
