import { Flag, GraduationCap, Languages, MapPin } from "lucide-react";

export const logoListItem = [
  {
    name: "India",
    logo: <MapPin className="h-4 w-4 stroke-sky-500 text-sky-500" />,
  },
  {
    name: "English & Tamil",
    logo: <Languages className="text-p h-4 w-4 stroke-sky-500 text-sky-500" />,
  },
  {
    name: "FullStack Web Developer",
    logo: <Flag className="text-p h-4 w-4 stroke-sky-500 text-sky-500" />,
  },
  {
    name: "Freelancer",
    logo: (
      <GraduationCap className="text-p h-4 w-4 stroke-sky-500 text-sky-500" />
    ),
  },
];
