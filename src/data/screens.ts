export type ScreenSlide = {
  id: string;
  src: string;
  title: string;
  kind: string;
  alt: string;
  fit: "cover" | "contain";
  group: "mobile" | "web";
};

export const screenSlides: ScreenSlide[] = [
  {
    id: "autoglow",
    src: "/showcase/autoglow.jpg",
    title: "AutoGlow",
    kind: "Mobile app",
    alt: "Four phone screens for AutoGlow: home, a headlight product, the cart, and an account page.",
    fit: "contain",
    group: "mobile",
  },
  {
    id: "riglo",
    src: "/showcase/riglo.jpg",
    title: "Riglo",
    kind: "Mobile concept",
    alt: "Eight phone screens for a Riglo equipment rental concept, from search and listings to delivery tracking and account.",
    fit: "contain",
    group: "mobile",
  },
  {
    id: "same-streets",
    src: "/showcase/same-streets.jpg",
    title: "Same Streets Presents",
    kind: "Website",
    alt: "Homepage of Same Streets Presents, with a large headline over a textured wall and a show finder.",
    fit: "cover",
    group: "web",
  },
  {
    id: "westora",
    src: "/showcase/westora.jpg",
    title: "Westora Style",
    kind: "Website",
    alt: "Homepage of Westora Style, with a fashion editorial, handbags, shoes, jewelry, and a watch.",
    fit: "cover",
    group: "web",
  },
  {
    id: "clipzy",
    src: "/showcase/clipzy.jpg",
    title: "Clipzy",
    kind: "Website",
    alt: "Homepage of Clipzy, a podcast studio page with two hosts at a desk and feature cards along the bottom.",
    fit: "cover",
    group: "web",
  },
];
