import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SocialIcons from "./SocialLinks";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-primary text-center">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side: Contact info + social */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4 text-base-content">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <p>Bordeaux, France</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <p>+33626763485</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-primary text-xl" />
              <p>syed.web2001@gmail.com</p>
            </div>
          </div>

        <SocialIcons/>

          {/* Map placeholder */}
          <div className="mt-10 w-full h-64 rounded-lg overflow-hidden border border-base-300">
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Bordeaux,France&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="lg:w-1/2 bg-base-200 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-base-100"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-base-100"
              required
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full bg-base-100"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
