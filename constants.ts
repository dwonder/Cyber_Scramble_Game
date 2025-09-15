import type { SourceQuestion } from './types';

export const GAME_DURATION = 150; // 2 minutes 30 seconds

export const questions: SourceQuestion[] = [
  // Level 1
  {
    level: "The Basics",
    hint: "It's the little box with blinking lights that connects all your devices to the internet.",
    answer: "ROUTER",
    extraHint: "Manages traffic between your local network and the internet.",
  },
  {
    level: "The Basics",
    hint: "An annoying flaw or error in a program that needs to be fixed.",
    answer: "BUG",
    extraHint: "What programmers spend most of their time squashing.",
  },
  {
    level: "The Basics",
    hint: "A secret tunnel on the internet that lets you connect to the company network securely from home.",
    answer: "VPN",
    extraHint: "Creates a private and encrypted connection over a public network.",
  },
  {
    level: "The Basics",
    hint: "That little picture on your screen you click to open a program. 🖱️",
    answer: "ICON",
    extraHint: "A small graphical representation of a program or file.",
  },
  {
    level: "The Basics",
    hint: "A circular, digital storage device, like a floppy or hard drive.",
    answer: "DISK",
    extraHint: "A medium for storing digital data, often spinning.",
  },
  // Level 2
  {
    level: "Intermediate",
    hint: "A sneaky email that tries to trick you into giving up your personal information.",
    answer: "PHISHING",
    extraHint: "A fraudulent attempt to get sensitive info by disguising as a trustworthy entity.",
  },
  {
    level: "Intermediate",
    hint: "A digital security guard that stands at your network's front door to block unwanted traffic.",
    answer: "FIREWALL",
    extraHint: "A network security system that monitors and controls incoming and outgoing traffic.",
  },
  {
    level: "Intermediate",
    hint: "A powerful computer that stores websites and applications, so you can access them from your own computer.",
    answer: "SERVER",
    extraHint: "A central computer that provides data to other computers.",
  },
  {
    level: "Intermediate",
    hint: "The main part of an internet address, like google.com.",
    answer: "DOMAIN",
    extraHint: "The unique name that identifies a website.",
  },
  {
    level: "Intermediate",
    hint: "A group of interconnected computers and devices that can share information. 🕸️",
    answer: "NETWORK",
    extraHint: "A collection of computers linked together to share resources.",
  },
  // Level 3
  {
    level: "Expert",
    hint: "What your computer stores to help websites load faster, like a short-term memory.",
    answer: "CACHING",
    extraHint: "Storing copies of files in a temporary location to access them more quickly.",
  },
  {
    level: "Expert",
    hint: "The secret combination of letters and numbers you use to prove you are who you say you are.",
    answer: "PASSWORD",
    extraHint: "A string of characters used for authenticating a user on a system.",
  },
  {
    level: "Expert",
    hint: "The act of looking at websites on the internet.",
    answer: "BROWSING",
    extraHint: "The act of navigating the World Wide Web.",
  },
  {
    level: "Expert",
    hint: "An organized collection of information that can be easily accessed, managed, and updated.",
    answer: "DATABASE",
    extraHint: "A structured set of data held in a computer.",
  },
  {
    level: "Expert",
    hint: "The machine you're using right now! 🖥️",
    answer: "COMPUTER",
    extraHint: "An electronic device for storing and processing data.",
  },
];
