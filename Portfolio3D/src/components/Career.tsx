import "./styles/Career.css";
import { config } from "../config";

// Helper function to parse "MM-YYYY" format
const parseMonthYear = (dateStr: string): Date => {
  const [month, year] = dateStr.split("-").map(Number);
  // JavaScript months are 0-indexed (0 = January), so subtract 1
  return new Date(year, month - 1, 1);
};

// Total professional experience, measured as the span from the first role's
// start to today. Summing each period would double-count overlapping roles
// (for example running the studio while employed).
const calculateTotalMonths = (periods: string[]): number => {
  const now = new Date();
  let earliest = Infinity;
  let latest = -Infinity;

  periods.forEach((period) => {
    if (!period.includes(" - ")) return;
    const [startStr, endStr] = period.split(" - ");
    const start = parseMonthYear(startStr);
    const end = endStr.trim() === "Present" ? now : parseMonthYear(endStr);
    earliest = Math.min(earliest, start.getTime());
    latest = Math.max(latest, end.getTime());
  });

  if (!isFinite(earliest) || !isFinite(latest)) return 0;

  const start = new Date(earliest);
  const end = new Date(latest);
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1 // include the starting month
  );
};

// Format total experience in years and months
const formatTotalExperience = (totalMonths: number): string => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
  if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
};

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  if (period.includes(" - ")) {
    const [start] = period.split(" - ");
    const [, year] = start.split("-");
    return year;
  }
  return period;
};

// Format period for display (e.g., "Dec 2024 - Present")
const formatPeriodDisplay = (period: string): string => {
  const months: { [key: string]: string } = {
    '01': 'Jan', '1': 'Jan',
    '02': 'Feb', '2': 'Feb',
    '03': 'Mar', '3': 'Mar',
    '04': 'Apr', '4': 'Apr',
    '05': 'May', '5': 'May',
    '06': 'Jun', '6': 'Jun',
    '07': 'Jul', '7': 'Jul',
    '08': 'Aug', '8': 'Aug',
    '09': 'Sep', '9': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  };

  if (period.includes("Present")) {
    const [start] = period.split(" - ");
    const [month, year] = start.split("-");
    return `${months[month]} ${year} - Present`;
  }
  
  if (period.includes(" - ")) {
    const [start, end] = period.split(" - ");
    const [startMonth, startYear] = start.split("-");
    const [endMonth, endYear] = end.split("-");
    return `${months[startMonth]} ${startYear} - ${months[endMonth]} ${endYear}`;
  }
  
  return period;
};

const Career = () => {
  // Only paid roles count toward total experience: education is shown in the
  // timeline but is not work experience.
  const professionalExperiences = config.experiences.filter(
    exp =>
      exp.company !== "Self-Taught & Projects" &&
      exp.company !== "Hindustan College of Science and Technology"
  );
  
  // Calculate total experience (excluding self-taught)
  const allPeriods = professionalExperiences.map(exp => exp.period);
  const totalMonths = calculateTotalMonths(allPeriods);
  const totalExperience = formatTotalExperience(totalMonths);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        
        {/* Total Experience Badge */}
        <div className="total-experience-badge">
          <span className="total-label">Total Experience</span>
          <span className="total-value">{totalExperience}</span>
        </div>

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
                  {exp.location && <span className="company-location">📍 {exp.location}</span>}
                </div>
                <div className="period-container">
                  <h3 className="period-year">{getDisplayYear(exp.period)}</h3>
                  <span className="period-full">{formatPeriodDisplay(exp.period)}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="exp-description">{exp.description}</p>
              
              {/* Tech Stack Section - Directly under description */}
              {/* {exp.technologies && exp.technologies.length > 0 && (
                <div className="tech-stack">
                  <div className="tech-stack-header">
                    <span className="tech-icon">🛠️</span>
                    <span className="tech-label">Tech Stack</span>
                  </div>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;