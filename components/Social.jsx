import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sandalu95" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sandalu-kalpanee/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=100011479913217",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sandalu_kalpanee?igsh=OGttbXhleTdmaDRk&utm_source=qr",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
