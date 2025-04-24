
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="w-full bg-card py-2 px-4 border-b border-border flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Satorium Logo"
            className="h-8 md:h-10"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          <span className="text-lg md:text-xl font-bold ml-2 text-agri-forest">
            Satorium
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button size="icon" variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-alert-danger rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs text-muted-foreground">Agricultor</p>
          </div>
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src="" alt={userName} />
            <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
