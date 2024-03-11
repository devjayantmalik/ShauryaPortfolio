import { PortfolioDetails } from "../../data/main";

export default function EducationAndAchievements() {
  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Education</span>
        <h3>Education & Achievements</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Education</h3>
              <span className="shape" />
            </div>
            <ul>
              {PortfolioDetails.educations.map((education) => (
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{education.subject}</h3>
                        <span>{education.university}</span>
                      </div>
                      <div className="year">
                        <span>{education.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{education.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Achievements</h3>
              <span className="shape" />
            </div>
            <ul>
              {PortfolioDetails.achievements.map((achievement) => (
                <li key={achievement.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{achievement.title}</h3>
                        <span>{achievement.company}</span>
                      </div>
                      <div className="year">
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{achievement.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
