import Image from "next/image";
import homeBackground from "~/pics/home/background.jpg";
import avatar from "~/pics/home/avatar.png";
import { PortfolioDetails } from "../data/main";

export default function Home() {
  return (
    <div className="iknow_tm_hero_fourth">
      <div className="background">
        <Image
          className="image"
          style={{
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
          src={homeBackground}
          alt="background"
        />
        <div className="overlay" style={{ zIndex: 1 }} />
      </div>
      <div className="content">
        <div className="left">
          <div className="image">
            <Image
              src={avatar}
              className="h-full w-full mx-auto"
              alt={PortfolioDetails.common.name}
            />
          </div>
        </div>
        <div className="right">
          <span className="hello">Hello, I&apos;m</span>
          <h3 className="name">{PortfolioDetails.common.name}</h3>
          <p className="text">{PortfolioDetails.common.bio}</p>
          <div className="iknow_tm_button">
            <a
              href={PortfolioDetails.resume.resumeURL}
              download={PortfolioDetails.resume.resumeDownloadName}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
