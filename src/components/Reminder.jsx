function Reminder() {
  return (
    <section id="reminder">
      <div className="d-flex flex-column align-items-center mt-5">
        <p className="emphz h3 pt-5 pb-3">投稿注意事項 Reminder</p>
        <ol className="lh-lg pb-5 px-5">
          <li>投稿截止日期：2020 年 08 月 24 日 23:59</li>
          <li>投稿前請確認稿件內容遵照投稿格式</li>
          <li>請確認投稿文章之摘要字數限制：以 500 字為限。</li>
          <li>
            報告者請於9/25前於報名系統完成報名與繳費，以將您的報告排入正式議程。
          </li>
          <li>每位報告者以投稿兩篇為限，每篇報告者以一位為原則。</li>
        </ol>
      </div>
    </section>
  );
}

export default Reminder;
