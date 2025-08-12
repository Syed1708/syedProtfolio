import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "GardenConnect - Gardening Tips & Community Hub",
    description:
      "GardenConnect is a modern and responsive web application for gardening lovers. Users can share tips, browse helpful guides, and engage with a growing community of eco-conscious gardeners. With real-time Firebase integration and TailwindCSS-powered UI, it offers a seamless experience across all devices.",
    image: "/GardenConnect.png",
    features: [
      "User Authentication (Login/Register) with Firebase",
      "Public & Private Tips with filtering and pagination",
      "Image upload and display for each tip",
      "Dynamic profiles showing active gardeners",
      "Dark/Light theme toggle",
      "Statistics section with animated counters",
      "My Tips Dashboard for managing personal tips",
    ],
    badges: ["React", "Node", "Tailwind", "Express", "Mongodb"],
    github: "https://github.com/Syed1708/GardenConnect",
    live: "https://graceful-cannoli-7ec2e3.netlify.app/",
  },
  {
    id: 2,
    title: "SportsHub 🏃‍♂️🏅 - Athletic Event Booking Platform",
    description:
      "SportsHub is a full-stack athletic event booking platform that connects athletes and sports enthusiasts with local events. Users can browse, book, and manage participation, while event creators can manage their events. Featuring authentication, database management, and responsive UI.",
    image: "/sportsHub.png",
    features: [
      "User Authentication (Email/Password + Google/GitHub)",
      "Dynamic homepage with carousel & featured events",
      "Events listing with search & filters",
      "Event details & booking (private routes)",
      "Create/Update/Delete events (owner-only)",
      "My Bookings with table & card views",
      "Responsive design & accessibility",
      "Toast notifications & loading spinners",
      "JWT token & Firebase Auth integration",
      "Environment-secured Firebase & MongoDB credentials",
    ],
    badges: [
      "React",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    github: "https://github.com/Syed1708/SportsHubClient",
    live: "https://sportshub2001.netlify.app/",
  },
  {
    id: 3,
    title: "Study Sessions Platform - MERN Full-Stack App",
    description:
      "A modern full-stack web app to manage online study sessions with multi-role dashboards, session booking, resource sharing, and real-time analytics.",
    image: "/studyHub.png",
    features: [
      "Authentication & Role-based Access (Admin, Tutor, Student)",
      "Student Dashboard: session booking, reviews, notes",
      "Tutor Dashboard: create sessions, upload materials",
      "Admin Dashboard: manage users, sessions, approvals",
      "Real-time light/dark theme toggle",
      "Responsive UI with DaisyUI + TailwindCSS",
      "Dynamic charts & analytics with Recharts",
      "Protected booking flow & session management",
      "Firebase + JWT Authentication",
    ],
    badges: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "DaisyUI",
      "Firebase",
      "JWT",
    ],
    github: "https://github.com/Syed1708/StudyHubClient",
    live: "https://studyplatform-a282a.web.app",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div
              key={project.id}
              className="bg-base-200 rounded-lg shadow p-6 cursor-pointer transition hover:shadow-lg"
              onClick={() => setExpandedId(isExpanded ? null : project.id)}
              aria-expanded={isExpanded}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setExpandedId(isExpanded ? null : project.id);
                }
              }}
            >
              <div className="flex items-center space-x-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-32 h-20 object-cover rounded"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold flex items-center justify-between">
                    {project.title}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(isExpanded ? null : project.id);
                      }}
                      className="ml-4 text-sm text-primary underline"
                      aria-label={isExpanded ? "Collapse project" : "Expand project"}
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-primary text-white px-2 py-1 rounded text-xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 text-base text-base-content/90">
                  <p className="mb-4">{project.description}</p>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
