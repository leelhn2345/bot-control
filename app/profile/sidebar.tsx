import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}
export function Sidebar({ className, items }: Props) {
  const pathname = usePathname();

  return (
    <nav className={cn(className)}>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant="ghost"
            className={cn(
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "w-full justify-start",
            )}
          >
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  );
}