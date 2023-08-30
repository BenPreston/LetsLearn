import Link from "next/link";

export const TopNav = () => {
  return (
    <nav className="p-4 bg-background">
      <Link href="/home" className="text-forground">
        Top Nav
      </Link>
    </nav>
  );
};
