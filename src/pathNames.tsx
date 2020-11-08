
const base = process.env.NODE_ENV === "production" ? "/aiden-portfolio/build" : "";
export const HOME_PATH = base + "/";
export const PORTFOLIO_PATH = base + "/portfolio";
export const RESUME_PATH = base + "/resume";