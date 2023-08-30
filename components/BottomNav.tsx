import Link from "next/link";

export const BottomNav = () => {
  return (
    <nav className="p-4 bg-background">
      <Link href="/home" className="text-forground">
        Bottom Nav
      </Link>
    </nav>
  );
};
