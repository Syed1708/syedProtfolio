import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const socialLinks = [
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/syed2001" },
  { Icon: FaGithub, url: "https://github.com/Syed1708" },
];

export default function SocialIcons() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ Icon, url }, idx) => (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-base-100 transition"
          aria-label="Social Link"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
