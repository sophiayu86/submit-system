import React, { useState } from "react";
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Reminder from '../components/Reminder';


export default function Submit() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Header text="2020 臺灣心理學年會徵稿：新冠肺炎與心理健康"/>
      {!submitted && <Reminder />}

      <section>
      <Form submitted={submitted} setSubmitted={setSubmitted} />
      {/* <FormTest submitted={submitted} setSubmitted={setSubmitted} /> */}
      </section>

      <Footer />
    </>
  );
}
