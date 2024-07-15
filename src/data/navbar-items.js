import { GiPodium } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
const navItems = [
  { to: "/", icon: <FaHome size={20} />, label: "Strona główna" },
  { to: "/leaderboard", icon: <LuMessagesSquare size={20} />, label: "Ranking wiadomości" },
  { to: "/spammer-leaderboard", icon: <GiPodium size={20} />, label: "Ranking spammerów" },
  { to: "https://slajdev-projects.vercel.app/", icon: <GoProjectSymlink size={20} />, label: "Inne projekty", external: true }
];

export default navItems;