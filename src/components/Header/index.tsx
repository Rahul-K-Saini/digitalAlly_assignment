import {
  Bell,
  HelpCircle,
  MessageSquare,
  Search,
  Settings2,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Header() {
  return (
    <header className="h-16 bg-gray-50 flex items-center justify-between px-4">
      <div className="w-[400px]">
        <div className="relative">
          <Search className="absolute  left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search your course" className="pl-8 bg-white" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <MessageSquare className="h-5 w-5" />
          <span className="absolute -top-[1px] -right-[1px] h-2 w-2 bg-red-500 rounded-full" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-[1px] -right-[1px] h-2 w-2 bg-red-500 rounded-full" />
        </Button>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <Image src="/girl.webp" alt="girl-image" width={50} height={50} />
          </Avatar>
          <div>
            <p className="text-sm font-medium">Adeline H. Dancy</p>
          </div>
        </div>
      </div>
    </header>
  );
}