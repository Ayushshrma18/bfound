
import { Home, Calendar, Tags, Heart, Activity, User, Trash2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/app" },
    { icon: Calendar, label: "Daily", path: "/app/daily" },
    { icon: Tags, label: "Tags", path: "/app/tags" },
    { icon: Heart, label: "Favorites", path: "/app/favorites" },
    { icon: Activity, label: "Streak", path: "/app/streak" },
    { icon: User, label: "Profile", path: "/app/profile" },
    { icon: Trash2, label: "Trash", path: "/app/trash" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out border-r border-border bg-card`}
    >
      <div className="p-4">
        <h1
          className={`text-xl font-bold mb-8 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Journal
        </h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-secondary/50"
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span
                className={`ml-3 transition-all duration-200 ${
                  isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
