import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// The stack I actually build on, widest row first.
// Languages and frameworks -> data -> infra -> tooling.
const ICONS = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techStack: TechItem[][] = [
  // Row 1 - languages and core frameworks
  [
    { name: "Java", icon: `${ICONS}/java/java-original.svg`, url: "https://dev.java" },
    { name: "Spring Boot", icon: `${ICONS}/spring/spring-original.svg`, url: "https://spring.io/projects/spring-boot" },
    { name: "Python", icon: `${ICONS}/python/python-original.svg`, url: "https://python.org" },
    { name: "FastAPI", icon: `${ICONS}/fastapi/fastapi-original.svg`, url: "https://fastapi.tiangolo.com" },
    { name: "TypeScript", icon: `${ICONS}/typescript/typescript-original.svg`, url: "https://typescriptlang.org" },
    { name: "JavaScript", icon: `${ICONS}/javascript/javascript-original.svg`, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Node.js", icon: `${ICONS}/nodejs/nodejs-original.svg`, url: "https://nodejs.org" },
    { name: "React", icon: `${ICONS}/react/react-original.svg`, url: "https://react.dev" },
    { name: "Next.js", icon: `${ICONS}/nextjs/nextjs-original.svg`, url: "https://nextjs.org" },
  ],
  // Row 2 - data
  [
    { name: "PostgreSQL", icon: `${ICONS}/postgresql/postgresql-original.svg`, url: "https://postgresql.org" },
    { name: "MySQL", icon: `${ICONS}/mysql/mysql-original.svg`, url: "https://mysql.com" },
    { name: "MongoDB", icon: `${ICONS}/mongodb/mongodb-original.svg`, url: "https://mongodb.com" },
    { name: "Redis", icon: `${ICONS}/redis/redis-original.svg`, url: "https://redis.io" },
    { name: "Tailwind", icon: `${ICONS}/tailwindcss/tailwindcss-original.svg`, url: "https://tailwindcss.com" },
    { name: "Jupyter", icon: `${ICONS}/jupyter/jupyter-original.svg`, url: "https://jupyter.org" },
  ],
  // Row 3 - cloud and delivery
  [
    { name: "AWS", icon: `${ICONS}/amazonwebservices/amazonwebservices-original-wordmark.svg`, url: "https://aws.amazon.com" },
    { name: "Docker", icon: `${ICONS}/docker/docker-original.svg`, url: "https://docker.com" },
    { name: "Jenkins", icon: `${ICONS}/jenkins/jenkins-original.svg`, url: "https://jenkins.io" },
    { name: "Vercel", icon: `${ICONS}/vercel/vercel-original.svg`, url: "https://vercel.com" },
  ],
  // Row 4 - tooling
  [
    { name: "Git", icon: `${ICONS}/git/git-original.svg`, url: "https://git-scm.com" },
    { name: "GitHub", icon: `${ICONS}/github/github-original.svg`, url: "https://github.com" },
    { name: "Postman", icon: `${ICONS}/postman/postman-original.svg`, url: "https://postman.com" },
  ],
  // Row 5 - editor
  [
    { name: "VS Code", icon: `${ICONS}/vscode/vscode-original.svg`, url: "https://code.visualstudio.com" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
