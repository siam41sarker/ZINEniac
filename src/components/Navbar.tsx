import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LockedLink } from "./LockedLink";
import logo from "@/assets/logo.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: DropdownItem[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/children" },
  { label: "Programs", href: "/children/our-program" },
  { label: "Classes", href: "/children/classes" },
  { label: "About Us", href: "/children/about" },
  { label: "Birthday", href: "/children/birthday" },
  {
    label: "ZINEniac Trading Card Game",
    href: "/children/zineniac-trading-card-game",
    dropdown: [
      { label: "Zines", href: "/children/zines" },
      { label: "Catalog", href: "/children/catalog" },
    ],
  },
  { label: "Camps", href: "/children/camps" },
  { label: "Events", href: "/children/events" },
  { label: "FAQs", href: "/children/faqs" },
  { label: "Contact", href: "/children/contact" },
];

const DropdownMenu = ({ items, isOpen, onClose }: { items: DropdownItem[]; isOpen: boolean; onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 pt-2 bg-transparent z-50 min-w-[220px]"
    >
      <div className="bg-background border-2 border-primary/20 rounded-2xl shadow-xl py-2"
    >
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={`block px-4 py-2.5 text-sm font-bold transition-colors ${
              isActive
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-4 border-primary/30">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ZINEniac Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 ${
                      isActive || openDropdown === link.label
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </Link>
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={openDropdown === link.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>
              );
            }

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 text-muted-foreground hover:text-primary hover:bg-primary/10"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <LockedLink
                key={link.label}
                to={link.href}
                label={link.label}
                className={`text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-primary-foreground bg-primary shadow-md"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </LockedLink>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden text-foreground bg-primary/10 p-2 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-background/98 backdrop-blur-md border-t-2 border-primary/20 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            if (link.dropdown) {
              const isExpanded = mobileExpanded === link.label;
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                    className={`w-full flex items-center justify-between font-bold text-base px-4 py-3 rounded-xl transition-all ${
                      isActive || isExpanded
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`block font-medium text-sm px-3 py-2 rounded-lg transition-all ${
                            location.pathname === sub.href
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-bold text-base px-4 py-3 rounded-xl transition-all text-muted-foreground hover:text-primary hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label} ↗
                </a>
              );
            }

            return (
              <LockedLink
                key={link.label}
                to={link.href}
                label={link.label}
                className={`block font-bold text-base px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </LockedLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
