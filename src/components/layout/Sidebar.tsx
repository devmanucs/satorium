
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, LeafyGreen, Map, BarChart2, Settings, HelpCircle, LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Análises de Solo",
    icon: LeafyGreen,
    href: "/analises",
  },
  {
    title: "Mapa de Atividades",
    icon: Map,
    href: "/mapa",
  },
  {
    title: "Relatórios",
    icon: BarChart2,
    href: "/relatorios",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/configuracoes",
  },
  {
    title: "Ajuda",
    icon: HelpCircle,
    href: "/ajuda",
  },
  {
    title: "Sair",
    icon: LogOutIcon,
    href: "/Login",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen bg-agri-forest text-white flex flex-col border-r border-agri-deep transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:bg-agri-mint hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-md transition-colors hover:bg-agri-mint text-sidebar-foreground",
                  window.location.pathname === item.href ? "bg-primary text-primary-foreground" : ""
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/80">
            <p>Satorium</p>
            <p>Beta</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
