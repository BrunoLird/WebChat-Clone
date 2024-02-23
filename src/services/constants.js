
export const API_VERSION_PREFIX = "/api/v1"


export const ROUTES = {
  ROOT: "/",
  LOGOUT: "/logout",
  LOGIN: "/login/*",
  ACTIVATE_USER: "/activate-user/*",
  FORGOT_PASSWORD: "/forgot-password",
  SET_NEW_PASSWORD: "/set-new-password/*",
  COMPLETE_PROFILE: "/complete-profile",
  PHONE: "/phone",
  MAIN: "/main",
  CHAT: "/chat",

  //Landing page routes
  HOME: "/home",
  SERVICES: "/services",
  PRICING: "/pricing",
  CONTACT: "/contact",
  ABOUT: "/about",
  TERMS: "/terms",
  PRIVACY: "/privacy",

  DIRECT_MESSAGES: (id) => `/project/${id}/direct-messages`,

}