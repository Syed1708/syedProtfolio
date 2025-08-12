// src/components/portfolio/Courses.jsx
export default function Courses() {
  const courses = [
    {
      title: "Programming Hero",
      platform: "Programming Hero (Remote)",
      description:
        "Completed a full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB with hands-on projects.",
      year: "2025",
      image: "/PH.jpg",
      badge: ["React", "Node.js", "MongoDB", "Express","Tailwind"],
      // certificate: "https://yourcertificate-link.com",
    },
    {
      title: "Ostad",
      platform: "Ostad (Remote)",
      description:
        "Learned advanced web development and backend architecture focusing on Laravel, API development.",
      year: "2024",
      image: "/ostad.jpeg",
      badge: ["Laravel", "MySQL", "API", "Bootstrap"],
      // certificate: "https://yourcertificate-link.com",
    },
  ];

  return (
    <section id="courses" className="max-w-6xl mx-auto px-6 py-16" >
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Courses
      </h2>
      <div className="grid gap-10 sm:grid-cols-2">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="card bg-base-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-base-content/60 mb-4">
                {course.platform} • {course.year}
              </p>
              <p className="mb-4 text-base-content/80">
                {course.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {course.badge.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <a
                href={course.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary mt-auto"
              >
                View Certificate
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
