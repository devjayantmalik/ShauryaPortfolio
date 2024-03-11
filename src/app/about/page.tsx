import Image from "next/image";
import { PortfolioDetails } from "~/data/main";
import photoBg from "~/pics/about/photo-background.jpg";
import photo from "~/pics/about/photo.jpg";

export default function About() {
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <Image src={photoBg} alt="image" />
            <div
              className="main"
              style={{ backgroundImage: `url(${photo.src})` }}
            />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>{PortfolioDetails.common.name}</span>
              </li>
              <li>
                <h3>Birthday</h3>
                <span>{PortfolioDetails.common.birthday}</span>
              </li>
              <li>
                <h3>Mail</h3>
                <span>{PortfolioDetails.common.email}</span>
              </li>
              <li>
                <h3>Phone</h3>
                <span>{PortfolioDetails.common.phone}</span>
              </li>
              <li>
                <h3>Address</h3>
                <span>{PortfolioDetails.common.address}</span>
              </li>
              <li>
                <h3>Nationality</h3>
                <span>{PortfolioDetails.common.nationality}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{PortfolioDetails.about.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{PortfolioDetails.about.subTitle}</p>
        </div>
        <div className="text">
          <p>{PortfolioDetails.common.bio}</p>
        </div>
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
  );
}
