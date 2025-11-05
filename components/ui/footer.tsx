// components/Footer.tsx
"use client";

import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
} from 'lucide-react';
import Link from 'next/link';
import Earth from '@/components/ui/globe';

const data = {
  facebookLink: 'https://facebook.com/yourcompany',
  instaLink: 'https://instagram.com/yourcompany',
  twitterLink: 'https://twitter.com/yourcompany',
  linkedinLink: 'https://linkedin.com/company/yourcompany',
  githubLink: 'https://github.com/yourcompany',
  services: {
    webdev: '/web-development',
    webdesign: '/web-design',
    marketing: '/marketing',
    consulting: '/consulting',
  },
  about: {
    history: '/company-history',
    team: '/meet-the-team',
    careers: '/careers',
    contact: '/contact',
  },
  help: {
    faqs: '/faqs',
    support: '/support',
    documentation: '/documentation',
  },
  contact: {
    email: 'hello@company.com',
    phone: '+91 1234567890',
    address: 'City, State, India',
  },
  company: {
    name: 'Your Company',
    description:
      'Building innovative solutions with cutting-edge technology. We help businesses transform their digital presence and achieve their goals.',
    logo: 'https://i.postimg.cc/j5dW4vFd/Mvpblocks.webp',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
];

const aboutLinks = [
  { text: 'Company History', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Careers', href: data.about.careers },
  { text: 'Contact', href: data.about.contact },
];

const serviceLinks = [
  { text: 'Web Development', href: data.services.webdev },
  { text: 'Web Design', href: data.services.webdesign },
  { text: 'Marketing', href: data.services.marketing },
  { text: 'Consulting', href: data.services.consulting },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Documentation', href: data.help.documentation },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Section - Company Info & Links */}
          <div className="lg:col-span-7">
            <div>
              <div className="text-primary flex justify-center gap-2 sm:justify-start items-center">
                <img
                  src={data.company.logo}
                  alt="logo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-2xl font-semibold">
                  {data.company.name}
                </span>
              </div>

              <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-lg sm:text-left">
                {data.company.description}
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      prefetch={false}
                      href={href}
                      className="text-primary hover:text-primary/80 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="size-6" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-12">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">About</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {aboutLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a
                        className="text-secondary-foreground/70 hover:text-secondary-foreground transition"
                        href={href}
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              

              

            <div className="mt-12">
              <p className="text-lg font-medium text-center sm:text-left">Contact Us</p>
              <ul className="mt-6 space-y-3 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress, href }) => (
                  <li key={text}>
                    {href ? (
                      <a
                        className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition"
                        href={href}
                      >
                        <Icon className="text-primary size-5 shrink-0" />
                        <span className="text-secondary-foreground/70">
                          {text}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Icon className="text-primary size-5 shrink-0" />
                        {isAddress ? (
                          <address className="text-secondary-foreground/70 not-italic">
                            {text}
                          </address>
                        ) : (
                          <span className="text-secondary-foreground/70">
                            {text}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Globe */}
          <div className="lg:col-span-3 flex  justify-end">
            <div className="relative w-full max-w-[500px] h-[400px]">
              <Earth
                baseColor={[0.2, 0.4, 1]} // Blue color
                markerColor={[0.3, 0.5, 1]} // Lighter blue
                glowColor={[0.2, 0.4, 1]} // Blue glow
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-secondary-foreground/70 text-sm">
              &copy; {new Date().getFullYear()} {data.company.name}. All rights reserved.
            </p>

            
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}