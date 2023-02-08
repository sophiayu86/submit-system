import Footer from "./Footer";

function Submitted({ data }) {
  return (
    <div className="mt-5 fullpage">
      <hr className="mb-5"></hr>
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-align-center mt-5 my-5">投稿成功！</h2>
        <div className="d-flex flex-column  justify-content-start">
          <p className="emphz">Hi {data.author_name},</p>
          <p>感謝您的來稿，您的投稿編號是：{data.uid}</p>
          <p>投稿編號請妥善保存，將用於報名或稿件查詢。</p>
          <p>我們將儘速為您審稿，有任何問題，歡迎與我們聯絡。</p>
        </div>
        <div className="d-flex">
          <a className="text-center btn btn-dark btn mt-5 me-5" href="/form">
            再投一篇 Submit Another
          </a>
          <a className="text-center btn btn-dark mt-5" href="/">
            回首頁 Home
          </a>
        </div>
      </div>
      <section id="ft-complete_page">
      <Footer />
      </section>
    </div>
  );
}

export default Submitted;
