import { useComingSoon } from "./ComingSoonModal";
import { Link } from "react-router-dom";

const LOCKED_ROUTES = [
  "/children/birthday",
  "/children/camps",
  "/children/faqs",
  "/adults",
  "/medicaid",
];

interface LockedLinkProps {
  to: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const LockedLink = ({
  to,
  label,
  children,
  className,
  onClick,
}: LockedLinkProps) => {
  const { trigger } = useComingSoon();
  const isLocked = LOCKED_ROUTES.includes(to);

  if (isLocked) {
    return (
      <span
        className={className}
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          trigger(label);
          onClick?.();
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export const isRouteLocked = (href: string) => LOCKED_ROUTES.includes(href);
