import Image from "next/image";
import { PortfolioDetails } from "../../data/main";

export default function Projects() {
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
        <span>Projects</span>
        <h3>Development work &amp; Updates</h3>
      </div>
      <div className="news_list">
        <ul>
          {PortfolioDetails.projects.map((project) => (
            <li key={project.id}>
              <div className="list_inner">
                <div className="image">
                  <Image src={project.img} alt="image" />
                  <div
                    className="main"
                    style={{ backgroundImage: `url(${project.img.src})` }}
                  />
                </div>
                <div className="details">
                  <span className="category">{project.category}</span>
                  <h3 className="title">
                    <a href="#">{project.title}</a>
                  </h3>
                  <p className="mt-2">{project.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
