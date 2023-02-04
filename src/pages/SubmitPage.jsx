import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tpa_logo from '../img/tpa_logo.png'
import banner from '../img/banner.png'
import Button from 'react-bootstrap/Button';
export default function SubmitPage() {
    return (
        <>
        <div className="container">
          <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className='custom-header'style={{fontWeight: "bold", fontSize: "40px", fontColor: "black"}}> <img
              alt="logo"
              src={tpa_logo}
              width="60"
              height="60"
              className="d-inline-block align-center mr-3"
            />2020 臺灣心理學年會</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#submition_form">投稿</Nav.Link>
            <Nav.Link href="#features">審稿</Nav.Link>
            <Nav.Link href="#contact">關於我們</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
        <div className="container">
          <section className="pt-6" >
          <div style={{textAlign: "center"}}>
              <img src={banner} alt="banner" /> 
            </div>
            <div className="h1 text-align-center mt-5" >2020 臺灣心理學年會徵稿：新冠肺炎與心理健康</div>
          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div className="row alert alert-secondary mt-5" role="alert">
                <div className="col-12">
                  <p className="emphz">投稿注意事項 Reminder</p>
                  <ol>
                    <li>投稿截止日期：2020 年 08 月 24 日 23:59</li>
                    <li>投稿前請確認稿件內容遵照投稿格式</li>
                    <li>請確認投稿文章之摘要字數限制：以 500 字為限。</li>
                    <li>
                      報告者請於9/25前於報名系統完成報名與繳費，以將您的報告排入正式議程。
                    </li>
                    <li>每位報告者以投稿兩篇為限，每篇報告者以一位為原則。</li>
                  </ol>
                  <a href="article_format/tpa_format.docx" download="">
                    <span className="btn btn-custom2 download-adj">投稿格式下載</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </section>
          
          <section>
          
           <form className="pt-6"
            action="uploading.php"
            method="POST"
            encType="multipart/form-data"
            id="submition_form"
            data-go={0}
          >
            <div className="fill_area">
                
            <h2 className="text-align-center">投稿表單 Submittion Form</h2>
            <br />
              <div className="row justify-content-center">
              
                <div className="col-3 text-right required-col emphz">
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
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-3 text-right required-col emphz">
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
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-3 text-right required-col emphz">
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
                <div className="col-3 text-right required-col emphz">
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
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-3 text-right required-col emphz">
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
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-3 text-right required-col emphz">
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
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-6 text-right required-col emphz col_mg_adj">
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
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-6 text-right required-col emphz col_mg_adj">
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
                <div className="col-6 text-right required-col emphz">
                  上傳稿件
                  <br />
                  <span className="en_col">Upload</span>
                </div>
                <div className="col-6">
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="file_upload"
                        name="file"
                        aria-describedby="file_upload"
                        data-check=""
                        required=""
                      />
                      <br />
                      <label
                        className="custom-file-label lighter"
                        htmlFor="file_upload"
                      >
                        檔案格式接受 .doc/.docx
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <input type="hidden" id="timestamp_input" name="timestamp" />
                <input type="hidden" id="uid_input" name="uid" />
                <input type="hidden" id="special_topic" name="specialTopic" />
                <div className="col-3" />
                <div className="col-6">
                  <Button
                    type="submit"
                    className="btn btn-custom btb-lg col-6 min-w"
                    id="go_to_confirm"
                  >
                    下一步 Next
                  </Button>
                </div>
                <div
                  className="showModal btn-hidden"
                  data-toggle="modal"
                  data-target="#confirmModal"
                >
                </div>
              </div>
            </div>
          </form> 
          </section>
          
        </div>
        <footer id="contact">
          <div className="ft-content">
            <div className="ft-title">| 台灣心理學會 |</div>
            <div className="ft-p">
              聯絡信箱 - <a href="mailto:contact@tpa-tw.org">contact@tpa-tw.org</a>
            </div>
            <div className="ft-p">
              臉書粉絲頁 -{" "}
              <a href="https://www.facebook.com/taiwanpsy/">
                https://www.facebook.com/taiwanpsy/
              </a>
            </div>
          </div>
        </footer>
      </>
      
    );
  }

  