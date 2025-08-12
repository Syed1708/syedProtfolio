export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/sn2.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover shadow-lg ring-4 ring-primary"
        />
        <div className="text-base-content/90 text-lg leading-relaxed max-w-xl">
          <p className="mb-6">
            I am a passionate web developer specializing in React, Node.js, and Tailwind CSS.  
            I enjoy crafting elegant, performant, and accessible user interfaces.
          </p>
          <p>
            My goal is to create immersive and intuitive user experiences.  
            I’m always motivated to learn new technologies and take on exciting challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
