import React from 'react';
import SocialIcons from './SocialIcons';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>تمام حقوق این وب سایت برای دانشگاه سما ارومیه است.</p>
      <p className="icons">
        {SocialIcons.Icons.map((icon) => {
          return (
            <a
              href={icon.link}
              key={icon.id}
              className="hover:animate-bounce text-slate-900"
            >
              <span className="text-2xl">{icon.icon}</span>
            </a>
          );
        })}
      </p>
    </div>
  );
};

export default Footer;
