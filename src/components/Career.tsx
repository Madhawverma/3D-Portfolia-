import "./styles/Career.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  if (period.includes("Now") || period.includes("Present")) {
    return period; // Return full "04/2026 - Now"
  }
  return period; // Just return the full string for all
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
