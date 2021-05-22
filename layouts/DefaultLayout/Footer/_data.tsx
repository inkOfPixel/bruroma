import { Badge, LightMode } from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
    badge?: React.ReactElement;
  }>;
}

export const links: LinkGroup[] = [
  {
    title: "Azienda",
    links: [
      { label: "Perché Bruroma", href: "#" },
      { label: "La nostra storia", href: "#" },
      {
        label: "Lavora con noi",
        href: "#",
        badge: (
          <LightMode>
            <Badge colorScheme="blue" fontSize="0.625rem">
              Assumiamo
            </Badge>
          </LightMode>
        ),
      },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Lavorazioni",
    links: [
      { label: "Taglio laser", href: "#" },
      { label: "Piegatura", href: "#" },
      { label: "Saldatura", href: "#" },
      { label: "Assemblaggio", href: "#" },
      { label: "Disegno tecnico", href: "#" },
    ],
  },
  {
    title: "Settori",
    links: [
      { label: "Medicale", href: "#" },
      { label: "Farmaceutico", href: "#" },
      { label: "Alimentare", href: "#" },
      { label: "Arredamento", href: "#" },
      { label: "Agricolo", href: "#" },
    ],
  },
  {
    title: "Contatti",
    links: [
      { label: "Login", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Chat with us", href: "#" },
      { label: "Email us", href: "#" },
    ],
  },
];

interface SocialLink {
  label: string;
  icon: React.ReactElement;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Facebook", icon: <FaFacebook />, href: "#" },
  { label: "Instagram", icon: <FaInstagram />, href: "#" },
  { label: "LinkedIn", icon: <FaLinkedin />, href: "#" },
  { label: "LinkedIn", icon: <FaTwitter />, href: "#" },
];

type FooterLink = {
  label: string;
  href: string;
};

export const footerLinks: FooterLink[] = [{ label: "Sitemap", href: "#" }];
