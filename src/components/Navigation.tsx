import Link from "next/link";

interface NavItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

interface NavigationProps {
  navItems: NavItem[];
}

export default function Navigation({ navItems }: NavigationProps) {
  const items = navItems.map(item => (item.slug.current === "home" ? { ...item, slug: { current: "/" } } : item));
  return (
    <nav>
      <div className="container">
        {items.map(item => (
          <Link key={item._id} href={item.slug.current}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
