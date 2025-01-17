import HomePage from "../pages/Home";
import SponsorPage from "../pages/Sponsors";
import LeadershipPage from "../pages/Leadership";
import MentorPage from "../pages/Mentors";
import SubteamPage from "../pages/Subteams";
import AwardPage from "../pages/Awards";
import RobotPage from "../pages/Robots";
import OutreachPage from "../pages/Outreach";
import SteelbucksPage from "../pages/Steelbucks";
import ContactPage from "../pages/Resources/contact";
import ResourcesPage from "../pages/Resources";

export const pages = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
  },
  {
    path: "/mentors",
    name: "Mentors",
    element: <MentorPage />,
  },
  {
    path: "/leadership",
    name: "Leadership",
    element: <LeadershipPage />,
  },
  {
    path: "/subteams",
    name: "Subteams",
    element: <SubteamPage />,
  },
  {
    path: "/awards",
    name: "Awards",
    element: <AwardPage />,
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    element: <SponsorPage />,
  },
  {
    path: "/robots",
    name: "Robots",
    element: <RobotPage />,
  },
  {
    path: "/outreach",
    name: "Outreach",
    element: <OutreachPage />,
  },
  {
    path: "/steelbucks",
    name: "Steelbucks",
    element: <SteelbucksPage />,
  },
  {
    path: "/resources",
    name: "Resources",
    element: <ResourcesPage />,
  },
];
