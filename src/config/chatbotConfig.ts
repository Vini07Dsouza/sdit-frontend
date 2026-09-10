/**
 * Central configuration for the SDIT help-desk chatbot.
 *
 * Change the product name, official phone number or map destination HERE ONLY.
 * Nothing else in the app should hardcode these values.
 *
 * DATA ACCURACY: `officialPhone` and `mapsUrl` must contain verified official
 * SDIT values. While they are empty strings, the "Call Us" and "Directions"
 * actions are hidden automatically so no dead control is ever shown.
 */
export const chatbotConfig = {
  /** Product name of the assistant. One value to change. */
  chatbotName: "SDIT AI-ASSISTANT",
  /** Short label used in tight spaces (mobile header, avatars). */
  chatbotShortName: "SDIT AI-ASSISTANT",
  tagline: "AI Assistant",

  /** Verified official SDIT contact number in dialable form, e.g. "+918241234567". */
  officialPhone: "",
  /** Human readable version of the same number. */
  officialPhoneLabel: "",

  /** Verified Google Maps link to the SDIT campus. */
  mapsUrl: "",
  mapsLabel: "SDIT campus, Mangaluru",

  greeting: {
    title: "Hi 👋 Welcome to SDIT",
    question: "How can I help you today?",
    hint: "Choose a quick option below or type your question.",
  },

  composerPlaceholder: "Ask anything about SDIT...",
  thinkingLabel: "Finding that for you...",
} as const;

export const hasPhone = chatbotConfig.officialPhone.trim().length > 0;
export const hasMaps = chatbotConfig.mapsUrl.trim().length > 0;
