export const APP_API_URL =
  process.env.REACT_APP_API_URL || "https://dev.medical-care.zangula.net/api";
export const APP_VERSION = process.env.REACT_APP_VERSION || "";
export const APP_GOOGLE_MAP_API_KEY = "AIzaSyDs3PuvlX0H3B6hnvo4FmUEhP25dUg7fRI";
export const APP_PUBLIC_URL = process.env.PUBLIC_URL || "";
export const IS_PRODUCTION = process.env.NODE_ENV !== "production";
export const IS_DEVELOPMENT = process.env.REACT_APP_ENV === "development";
export const APP_SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "";
export const API_URL = IS_DEVELOPMENT
  ? "http://localhost:3000/api"
  : APP_API_URL;
export const LOGIN_HEADER_HEIGHT = 96;
export const DASHBOARD_MENU_WIDTH = 217;
export const DASHBOARD_TOP_BAR_HEIGHT = 80;
export const DASHBOARD_MENU_CLOSE_WIDTH = 96;
export const DASHBOARD_TOP_MENU_CLOSE_WIDTH = 48;

export const statusFilterOptions = [
  { label: "All", value: "" },
  { label: "Active", value: "TRUE" },
  { label: "In-active", value: "FALSE" },
];
