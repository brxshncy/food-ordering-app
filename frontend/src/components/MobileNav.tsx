import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {isAuthenticated ? (
                <span className="flex items-center font-bold gap-2">
                  <CircleUserRound className="text-orange-500" />
                  {user?.email}
                </span>
              ) : (
                <span>Welcome to MearnEats.com!</span>
              )}
            </SheetTitle>
          </SheetHeader>
          <Separator className="my-3" />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={async () => loginWithRedirect()}
                className="flex-1 font-bold bg-orange-500"
              >
                Login
              </Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
