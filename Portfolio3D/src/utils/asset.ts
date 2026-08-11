// Resolves a file in /public against the deployment base.
//
// Vite sets BASE_URL to "/" on a root domain and to "/NishantPortfolio/" on
// GitHub Pages. Hardcoding "/models/x" would request it from the domain root
// and 404 on Pages, so every public asset path goes through here.
const BASE = import.meta.env.BASE_URL || "/";

export const asset = (path: string): string =>
  `${BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
