
import type { SourceQuestion } from './types';

export const GAME_DURATION = 150; // 2 minutes 30 seconds
export const QUESTIONS_PER_GAME = 15;

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
  // --- New Questions ---
  // Level 1 Additions
  {
    level: "The Basics",
    hint: "Where your computer temporarily stores information it's actively using.",
    answer: "RAM",
    extraHint: "Stands for Random Access Memory.",
  },
  {
    level: "The Basics",
    hint: "The brain of the computer that does all the calculations.",
    answer: "CPU",
    extraHint: "Central Processing Unit.",
  },
  {
    level: "The Basics",
    hint: "A program that lets you surf the web.",
    answer: "BROWSER",
    extraHint: "Examples include Chrome, Firefox, and Safari.",
  },
  {
    level: "The Basics",
    hint: "A clickable link to another webpage or document.",
    answer: "HYPERLINK",
    extraHint: "Often appears as blue, underlined text.",
  },
  {
    level: "The Basics",
    hint: "A harmful program that can damage your computer.",
    answer: "VIRUS",
    extraHint: "A type of malicious software or malware.",
  },
  {
    level: "The Basics",
    hint: "A global network of computers.",
    answer: "INTERNET",
    extraHint: "The system that allows you to read this.",
  },
  {
    level: "The Basics",
    hint: "The visual background of your computer screen.",
    answer: "DESKTOP",
    extraHint: "Where you find your icons and wallpaper.",
  },
  {
    level: "The Basics",
    hint: "A folder for deleted files.",
    answer: "TRASH",
    extraHint: "Also known as the Recycle Bin on Windows.",
  },
  {
    level: "The Basics",
    hint: "A small piece of data a website stores on your computer.",
    answer: "COOKIE",
    extraHint: "Used to remember your preferences or login status.",
  },
  {
    level: "The Basics",
    hint: "The physical parts of a computer system.",
    answer: "HARDWARE",
    extraHint: "The opposite of software.",
  },
  // Level 2 Additions
  {
    level: "Intermediate",
    hint: "A unique address for a device on a network, like a house number.",
    answer: "IP",
    extraHint: "Stands for Internet Protocol.",
  },
  {
    level: "Intermediate",
    hint: "The set of rules for how data is sent over the internet.",
    answer: "PROTOCOL",
    extraHint: "Examples include HTTP, FTP, and TCP.",
  },
  {
    level: "Intermediate",
    hint: "Scrambling data so it can't be read without a key.",
    answer: "ENCRYPTION",
    extraHint: "Protects sensitive information during transmission.",
  },
  {
    level: "Intermediate",
    hint: "The maximum amount of data you can send over a connection in a given time.",
    answer: "BANDWIDTH",
    extraHint: "Often measured in megabits per second (Mbps).",
  },
  {
    level: "Intermediate",
    hint: "Storing your files online so you can access them from anywhere.",
    answer: "CLOUD",
    extraHint: "Services like Google Drive or Dropbox use this.",
  },
  {
    level: "Intermediate",
    hint: "The code that builds websites.",
    answer: "HTML",
    extraHint: "HyperText Markup Language.",
  },
  {
    level: "Intermediate",
    hint: "A program that searches for and identifies items in a database based on keywords.",
    answer: "SEARCHENGINE",
    extraHint: "Google is the most famous example.",
  },
  {
    level: "Intermediate",
    hint: "Unsolicited junk email.",
    answer: "SPAM",
    extraHint: "Often contains advertising or phishing attempts.",
  },
  {
    level: "Intermediate",
    hint: "The main circuit board in a computer.",
    answer: "MOTHERBOARD",
    extraHint: "Connects all the components together.",
  },
  {
    level: "Intermediate",
    hint: "A way to prove your identity using two different methods.",
    answer: "2FA",
    extraHint: "Stands for Two-Factor Authentication.",
  },
  {
    level: "Intermediate",
    hint: "A small, portable memory storage device that plugs into a USB port.",
    answer: "FLASHDRIVE",
    extraHint: "Also known as a thumb drive or USB stick.",
  },
  {
    level: "Intermediate",
    hint: "A malicious software that holds your files hostage until you pay a fee.",
    answer: "RANSOMWARE",
    extraHint: "A dangerous form of cyber attack.",
  },
  {
    level: "Intermediate",
    hint: "A single dot in a digital image.",
    answer: "PIXEL",
    extraHint: "Short for 'picture element'.",
  },
  {
    level: "Intermediate",
    hint: "The instructions that tell a computer what to do.",
    answer: "SOFTWARE",
    extraHint: "The opposite of hardware.",
  },
  {
    level: "Intermediate",
    hint: "The process of starting up a computer.",
    answer: "BOOTING",
    extraHint: "When the operating system is loaded.",
  },
  // Level 3 Additions
  {
    level: "Expert",
    hint: "A set of rules for building web services.",
    answer: "API",
    extraHint: "Application Programming Interface.",
  },
  {
    level: "Expert",
    hint: "A decentralized digital ledger technology.",
    answer: "BLOCKCHAIN",
    extraHint: "The technology behind cryptocurrencies like Bitcoin.",
  },
  {
    level: "Expert",
    hint: "A type of artificial intelligence that learns from data.",
    answer: "MACHINELEARNING",
    extraHint: "A subset of AI.",
  },
  {
    level: "Expert",
    hint: "An open-source operating system kernel.",
    answer: "LINUX",
    extraHint: "A popular alternative to Windows and macOS.",
  },
  {
    level: "Expert",
    hint: "A way to package an application with all its dependencies.",
    answer: "CONTAINER",
    extraHint: "Docker is a popular platform for this.",
  },
  {
    level: "Expert",
    hint: "A programming model for handling events like user clicks.",
    answer: "ASYNCHRONOUS",
    extraHint: "Allows the program to continue running without waiting for a task to finish.",
  },
  {
    level: "Expert",
    hint: "A system for version control, tracking changes in code.",
    answer: "GIT",
    extraHint: "Developed by Linus Torvalds, the creator of Linux.",
  },
  {
    level: "Expert",
    hint: "A query language for APIs, providing a more efficient alternative to REST.",
    answer: "GRAPHQL",
    extraHint: "Developed by Facebook.",
  },
  {
    level: "Expert",
    hint: "The practice of running multiple operating systems on a single physical machine.",
    answer: "VIRTUALIZATION",
    extraHint: "Creates virtual machines (VMs).",
  },
  {
    level: "Expert",
    hint: "A large-scale attack that overwhelms a server with traffic.",
    answer: "DDOS",
    extraHint: "Distributed Denial-of-Service.",
  },
];
