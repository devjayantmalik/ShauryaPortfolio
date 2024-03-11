"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { PortfolioDetails } from "../../data/main";

export default function Skills() {
  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Skills</span>
        <h3>Personal & Tech Skills</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
          {PortfolioDetails.skillsets.map((skillset, id) => (
            <div key={id} className="skills_list">
              <div className="iknow_tm_resume_title">
                <h3>{skillset.title}</h3>
                <span className="shape" />
              </div>
              <div className="personal">
                <div className="dodo_progress">
                  {skillset.skills.map((skill) => (
                    <div
                      className="progress_inner"
                      data-value={skill.value}
                      key={skill.id}
                    >
                      <span>
                        <span className="label opened">{skill.title}</span>
                        <span
                          className="number"
                          style={{ right: `${100 - Number(skill.value)}%` }}
                        >
                          {skill.value}%
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Software Skills</h3>
              <span className="shape" />
            </div>
            <div className="software">
              <div className="circular_progress_bar">
                <ul>
                  {PortfolioDetails.softwareSkills.map((skill) => (
                    <li key={skill.id}>
                      <div className="list_inner">
                        <div className="myCircle" data-value="0.95">
                          <CircularProgressbar
                            value={Number(skill.value)}
                            strokeWidth={4}
                            styles={buildStyles({
                              // Colors
                              pathColor: "#ff451b",
                            })}
                          />
                          <h3 className="number">{skill.value}%</h3>
                        </div>
                        <div className="title">
                          <h3>{skill.title}</h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
