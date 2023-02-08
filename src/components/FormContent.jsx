import React, { useState } from "react";
import Modal from "../components/Modal";
import Inputs from "./Inputs";
export default function FormContent({
  data,
  handleChange,
  canSubmit,
  handleSubmit,
  setSubmitted,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form
      className="pt-5"
      method="POST"
      encType="multipart/form-data"
      id="submition_form"
    >
      <div>
        <h2 className="text-align-center mb-5">投稿表單 Submittion Form</h2>
        
        <Inputs data={data} handleChange={handleChange} />
        
        <button
          type="button"
          className="btn btn-primary d-flex mx-auto"
          id="go_to_confirm"
          onClick={() => setIsOpen(true)}
          disabled={!canSubmit}
        >
          下一步 Next
        </button>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            handleSubmit={handleSubmit}
            setSubmitted={setSubmitted}
          />
        )}
      </div>
    </form>
  );
}
