import React from 'react';
import { BsWhatsapp, BsGithub, BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
const SocialIcons = {
  Icons: [
    {
      name: 'whatsapp',
      id: '1',
      icon: <BsWhatsapp />,
      link: 'https://wa.me/09145650080',
    },
    {
      name: 'Book-2',
      id: '2',
      icon: <FaTelegramPlane />,
      link: 'https://t.me/Mohammadreza_mohammadzadeh1',
    },
    {
      name: 'Book-3',
      id: '3',
      icon: <BsInstagram />,
      link: 'http://www.instagram.com/reza.mhmdzdehh',
    },
    {
      name: 'Book-4',
      id: '4',
      icon: <SiGmail />,
      link: 'mailto:rezamohammadzadeh219800@gmail.com',
    },

    {
      name: 'Book-6',
      id: '6',
      icon: <ImLinkedin2 />,
    },
    {
      name: 'Book-7',
      id: '7',
      icon: <BsGithub />,
    },
  ],
};

export default SocialIcons;
