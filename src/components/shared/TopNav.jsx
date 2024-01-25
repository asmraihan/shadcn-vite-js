
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { UserNav } from "@/components/layout/user-nav";
import { Button } from "@/components/ui/button";
import { MobileSideNav } from "./MobileSideNav";

export default function TopNav() {

    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={"/"}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <Boxes className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">Garden</h1>
                </Link>
                <div className={cn("block md:!hidden")}>
                    <MobileSideNav />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    {sessionData?.user ? (
                        <UserNav user={sessionData.user} />
                    ) : (
                        <Button size="sm"
                            onClick={() => {
                                void signIn();
                            }}
                        >
                            Sign In
                        </Button>
                    )}
                </div>
            </nav>
        </div>
    );
}