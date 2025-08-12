import { 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiGithub,
  SiLaravel
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600 w-10 h-10" /> },
  { name: "CSS3 / Tailwind", icon: <SiTailwindcss className="text-cyan-400 w-10 h-10" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-10 h-10" /> },
  { name: "React", icon: <SiReact className="text-blue-500 w-10 h-10" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-10 h-10" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-10 h-10" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-gray-800 w-10 h-10" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600 w-10 h-10" /> },
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md rounded-lg p-6 flex flex-col items-center justify-center cursor-default transform transition duration-300 hover:scale-110 hover:shadow-xl"
            title={skill.name}
          >
            {skill.icon}
            <p className="mt-4 font-semibold text-lg text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
