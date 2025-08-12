import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HomeIcon, UserIcon, CodeBracketIcon, AcademicCapIcon, DocumentTextIcon, FolderIcon, PhoneIcon } from '@heroicons/react/24/outline';
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const menuItems = [
    { name: "Home", to: "hero", icon: <HomeIcon className="w-5 h-5 inline-block mr-2" /> },
    { name: "About", to: "about", icon: <UserIcon className="w-5 h-5 inline-block mr-2" /> },
    { name: "Skills", to: "skills", icon: <CodeBracketIcon className="w-5 h-5 inline-block mr-2" /> },
    { name: "Courses", to: "courses", icon: <AcademicCapIcon className="w-5 h-5 inline-block mr-2" /> },
    { name: "Projects", to: "projects", icon: <FolderIcon className="w-5 h-5 inline-block mr-2" /> },
    { name: "Contact", to: "contact", icon: <PhoneIcon className="w-5 h-5 inline-block mr-2" /> },
  ];

  return (
    <div className="flex flex-col justify-between items-center h-screen p-6 text-center bg-base-200 rounded-lg shadow-lg">
      <div>
        <img
          src="/sn2.jpg"
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-primary"
        />
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          Syed Numan <ThemeToggle />
        </h2>

        <p className="text-sm text-base-content/60 mb-8">Web Developer</p>

        <div className="flex justify-center space-x-6 text-primary text-xl mb-8">
          <a
            href="https://github.com/Syed1708"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-secondary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/syed2001/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-secondary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:syed.web2001@gmail.com"
            aria-label="Email"
            className="hover:text-secondary transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <nav className="space-y-4 text-sm font-medium">
          {menuItems.map(({ name, to, icon }) => (
            <Link
              key={name}
              to={to}
              smooth
              duration={500}
              className="flex items-center justify-start cursor-pointer hover:text-primary transition"
            >
              {icon} {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
