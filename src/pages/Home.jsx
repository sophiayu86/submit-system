import banner from "../img/banner.png";
import Nav from "../components/Nav";
import { Timeline } from "../components/Timeline";
import { GrMail, GrFacebook } from "react-icons/gr";
export default function Home() {
  const timelineData = [
    {
      date: "4/17",
      text: "開放投稿",
    },
    {
      date: "6/15",
      text: "開放報名",
    },
    {
      date: "7/1",
      text: "早鳥報名截止",
    },
    {
      date: "8/24",
      text: "投稿截止",
    },
    {
      date: "8/31",
      text: "報名截止",
    },
    {
      date: "9/12",
      text: "公告議程",
    },
  ];
  return (
    <>
      <header>
        <Nav />
        <img src={banner} className="banner" alt="banner" />
      </header>

      <section
        id="submit"
        className="pb-5 d-flex flex-column align-items-center"
      >
        <div className="welcome pt-5 text-align-center">
          Welcome to the 60th TPA Conference!
        </div>
        <a className="text-center btn btn-dark btn-lg mt-5" href="/form">
          投稿去
        </a>
        <div className="d-flex justify-content-center mt-5">
          <Timeline data={timelineData} />
        </div>
      </section>

      <section
        id="contact"
        className="fullpage d-flex flex-column align-items-center justify-content-center"
      >
        <div className="h1 mb-5">Contact Us</div>
        <div className="h3 mb-4 d-flex">
          <GrFacebook className="me-3" size={30} />
          <a href="https://www.facebook.com/taiwanpsy/">
            https://www.facebook.com/taiwanpsy/
          </a>
        </div>
        <div className="h3 mb-4 d-flex">
          <GrMail className="me-3" size={35} />
          <a href="mailto:contact@tpa-tw.org">contact@tpa-tw.org</a>
        </div>
      </section>
    </>
  );
}
