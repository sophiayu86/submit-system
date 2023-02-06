import React, { useState } from "react";
import Modal from "../components/Modal";
import { v4 as uuid } from 'uuid';

function Form() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const [isOpen, setIsOpen] = useState(false);
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
    uid:"",
    timestamp:""
});
const { uid,timestamp, ...otherProps } = data
const canSubmit = [...Object.values(otherProps)].every(Boolean)

  const handleSubmit = () => {
    const time = Date.now()
    const today = new Date(time);
    setData(prevData => ({
        ...prevData,
        uid: small_id,
        timestamp: today.toISOString()
    }));
    console.log(canSubmit, "a");
    console.log(JSON.stringify(data));
    
}
  const handleChange = e => {
    const type = e.target.type

    const name = e.target.name

    const value = type === "checkbox"
        ? e.target.checked
        : e.target.value

    setData(prevData => ({
        ...prevData,
        [name]: value
    }))
}
  return (
    <form
      className="pt-5"
      method="POST"
      encType="multipart/form-data"
      id="submition_form"
    >
      <div>
        <h2 className="text-align-center mb-5">投稿表單 Submittion Form</h2>
        <div className="row justify-content-center">
          <div className="col-2 text-right required-col emphz">
            投稿人姓名
            <br />
            <span className="en_col">Name</span>
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              id="author_name_input"
              name="author_name"
              placeholder="請輸入一名作者代表即可"
              required=""
              value={data.author_name}
              onChange={handleChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-right required-col emphz">
            服務單位/就讀學校
            <br />
            <span className="en_col">Institution</span>
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              id="author_org_input"
              name="author_org"
              required=""
              value={data.author_org}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-right required-col emphz">
            身份
            <br />
            <span className="en_col">Position</span>
          </div>
          <div className="col-3">
            <select
              className="form-control"
              id="select_identity"
              name="identity"
              required=""
              value={data.identity}
              onChange={handleChange}
            >
              <option value="">--請選擇--</option>
              <option value="大專教師 College Faculty">
                大專教師 College Faculty
              </option>
              <option value="研究人員 Institution Faculty">
                研究人員 Institution Faculty
              </option>
              <option value="研究生 Postgraduate">研究生 Postgraduate</option>
              <option value="大學生 Undergraduate">大學生 Undergraduate</option>
              <option value="社會人士 Civilian">社會人士 Civilian</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-right required-col emphz">
            電子郵件位址
            <br />
            <span className="en_col">Email</span>
          </div>
          <div className="col-3">
            <input
              type="email"
              className="form-control"
              id="author_email_input"
              name="author_email"
              required=""
              value={data.author_email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-right required-col emphz">
            稿件標題
            <br />
            <span className="en_col">Title of the submittion</span>
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              id="article_title_input"
              name="article_title"
              placeholder="請輸入稿件中文或英文標題 "
              required=""
              value={data.article_title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-right required-col emphz">
            報告者姓名
            <br />
            <span className="en_col">Presenter Name</span>
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              id="presenter_name_input"
              name="presenter_name"
              placeholder="多位報告者請以逗號隔開"
              required=""
              value={data.presenter_name}
              onChange={handleChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 text-right required-col emphz mt-2">
            本次投稿領域
            <br />
            <span className="en_col">Area</span>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_1"
                    name="topic"
                    defaultValue="臨床心理學組"
                    className="custom-control-input"
                    required=""
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_1">
                    臨床心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_2"
                    name="topic"
                    defaultValue="工商心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_2">
                    工商心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_3"
                    name="topic"
                    defaultValue="教育心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_3">
                    教育心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_4"
                    name="topic"
                    defaultValue="實驗認知心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_4">
                    實驗認知心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_5"
                    name="topic"
                    defaultValue="心理計量學組 "
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_5">
                    心理計量學組
                  </label>
                </div>
              </div>
              <div className="col-5">
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_6"
                    name="topic"
                    defaultValue="諮商心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_6">
                    諮商心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_7"
                    name="topic"
                    defaultValue="社會與人格心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_7">
                    社會與人格心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_8"
                    name="topic"
                    defaultValue="發展心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_8">
                    發展心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_9"
                    name="topic"
                    defaultValue="神經與生理心理學組"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_9">
                    神經與生理心理學組
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="topic_10"
                    name="topic"
                    defaultValue="COVID-19"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="topic_10">
                    COVID-19
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
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
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 text-right required-col emphz mt-2">
            論文發表類別
            <br />
            <span className="en_col">Type of presentation</span>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-9">
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="type_1"
                    name="submit_type"
                    defaultValue="專題論文（口頭發表/Oral）"
                    className="custom-control-input"
                    required=""
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="type_1">
                    專題論文（口頭發表/Oral）
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="type_2"
                    name="submit_type"
                    defaultValue="獨立論文（壁報發表/Poster）"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="type_2">
                    獨立論文（壁報發表/Poster）
                  </label>
                </div>
                <div className="custom-control custom-radio more-mg">
                  <input
                    type="radio"
                    id="type_3"
                    name="submit_type"
                    defaultValue="專題演講（Symposium，由籌畫人代表投稿）"
                    className="custom-control-input"
                    onChange={handleChange}
                  />
                  <label className="custom-control-label" htmlFor="type_3">
                    專題演講（Symposium，由籌畫人代表投稿）
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 text-right required-col emphz">
            摘要內文
            <br />
            <span className="en_col">Abstract content</span>
          </div>
          <div className="col-6">
            <textarea
              rows="10"
              cols="35"
              className="form-control abstract-input"
              id="abstract_input"
              name="abstract"
              placeholder="500 words only"
              required=""
              onChange={handleChange}
            />
          </div>
          <div className="help-block with-errors" />
        </div>

        <div className="row justify-content-center">
          <input type="hidden" id="timestamp_input" name="timestamp" />
          <input type="hidden" id="uid_input" name="uid" defaultValue={small_id} onChange={handleChange} />
          <input type="hidden" id="special_topic" name="specialTopic" />
          
          <div className="col-3" />
          <div className="col-6">
            <button
             type="button"
              className="btn btn-primary col-6"
              id="go_to_confirm"
              onClick={() => setIsOpen(true)}
              disabled={!canSubmit}
            >
              下一步 Next
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
