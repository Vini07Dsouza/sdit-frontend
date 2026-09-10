import { Link, useRouterState } from "@tanstack/react-router";

interface NavLinkProps {
  /** "/" or "/#section" or a route like "/admissions" or "/campus" */
  href: string;
  active: boolean;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, active, className, children, onClick }: NavLinkProps) {
  const isHash = href.startsWith("/#");
  const targetHash = isHash ? href.slice(2) : null;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }

    if (isHash && targetHash) {
      // If we are already on the home page, scroll directly and smoothly
      if (pathname === "/") {
        const el = document.getElementById(targetHash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  const shared = {
    className,
    onClick: handleClick,
    ...(active ? ({ "aria-current": "page" } as const) : {}),
  };

  // Anchor link targeting a section on the home page
  if (isHash && targetHash) {
    return (
      <Link to="/" hash={targetHash} {...shared}>
        {children}
      </Link>
    );
  }

  // Dedicated page link (e.g., /campus, /admissions, /)
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={href as any} {...shared}>
      {children}
    </Link>
  );
}
