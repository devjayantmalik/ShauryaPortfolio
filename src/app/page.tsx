import Image from "next/image";
import homeBackground from "~/pics/home/background.jpg";
import avatar from "~/pics/home/avatar.png";
import { homeData } from "../data/main";

export default function Home() {
  return (
    <div className="iknow_tm_hero_fourth">
      <div className="background">
        <Image
          className="image"
          style={{ zIndex: 0, width: "100%", height: "100%" }}
          src={homeBackground}
          objectFit="cover"
          alt="background"
        />
        <div className="overlay" style={{ zIndex: 1 }} />
      </div>
      <div className="content">
        <div className="left">
          <div className="image">
            <Image
              src={avatar}
              className="h-full w-full"
              alt="shaurya bhatnagar"
            />
          </div>
        </div>
        <div className="right">
          <span className="hello">Hello, I'm</span>
          <h3 className="name">{homeData.name}</h3>
          <p className="text">{homeData.description}</p>
          <div className="iknow_tm_button">
            <a href={homeData.resumeURL} download={homeData.resumeDownloadName}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
