import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          👋 Hello! I'm Syed Numan
        </h1>
        <p className="text-xl mb-8">
          Junior Web Developer skilled in HTML, CSS, JavaScript, React, Node,Mongodb,Express. Passionate about building clean, responsive, and user-friendly websites. Quick learner with hands-on project experience and a strong focus on problem-solving. Open to opportunities to grow, contribute, and work with modern web technologies.
        </p>

        <div className="space-x-4">
          <a
            href="/CVSYEDALTERNANCE.pdf"
            download
            className="btn btn-primary"
          >
            Download CV
          </a>
                <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer border border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-6 rounded shadow transition inline-block"
      >
        Contact Me
      </Link>
        </div>
      </div>
    </div>
  );
}
