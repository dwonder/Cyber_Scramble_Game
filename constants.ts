import type { SourceQuestion } from './types';

export const GAME_DURATION = 150; // 2 minutes 30 seconds

export const questions: SourceQuestion[] = [
  // Level 1
  {
    level: "The Basics",
    hint: "It's the little box with blinking lights that connects all your devices to the internet.",
    answer: "ROUTER",
  },
  {
    level: "The Basics",
    hint: "An annoying flaw or error in a program that needs to be fixed.",
    answer: "BUG",
  },
  {
    level: "The Basics",
    hint: "A secret tunnel on the internet that lets you connect to the company network securely from home.",
    answer: "VPN",
  },
  {
    level: "The Basics",
    hint: "That little picture on your screen you click to open a program. 🖱️",
    answer: "ICON",
  },
  {
    level: "The Basics",
    hint: "A circular, digital storage device, like a floppy or hard drive.",
    answer: "DISK",
  },
  // Level 2
  {
    level: "Intermediate",
    hint: "A sneaky email that tries to trick you into giving up your personal information.",
    answer: "PHISHING",
  },
  {
    level: "Intermediate",
    hint: "A digital security guard that stands at your network's front door to block unwanted traffic.",
    answer: "FIREWALL",
  },
  {
    level: "Intermediate",
    hint: "A powerful computer that stores websites and applications, so you can access them from your own computer.",
    answer: "SERVER",
  },
  {
    level: "Intermediate",
    hint: "The main part of an internet address, like google.com.",
    answer: "DOMAIN",
  },
  {
    level: "Intermediate",
    hint: "A group of interconnected computers and devices that can share information. 🕸️",
    answer: "NETWORK",
  },
  // Level 3
  {
    level: "Expert",
    hint: "What your computer stores to help websites load faster, like a short-term memory.",
    answer: "CACHING",
  },
  {
    level: "Expert",
    hint: "The secret combination of letters and numbers you use to prove you are who you say you are.",
    answer: "PASSWORD",
  },
  {
    level: "Expert",
    hint: "The act of looking at websites on the internet.",
    answer: "BROWSING",
  },
  {
    level: "Expert",
    hint: "An organized collection of information that can be easily accessed, managed, and updated.",
    answer: "DATABASE",
  },
  {
    level: "Expert",
    hint: "The machine you're using right now! 🖥️",
    answer: "COMPUTER",
  },
];