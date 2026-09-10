import { navItems } from "@/data/siteContent";
import { NavLink } from "./NavLink";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-xl bg-navy-soft text-sm font-bold text-lime"
            >
              SD
            </span>
            <span className="text-base font-bold">Shree Devi Institute of Technology</span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-navy-foreground/75">
            Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru, is affiliated to
            Visvesvaraya Technological University (VTU), Karnataka, and recognized by the All India
            Council for Technical Education (AICTE), New Delhi.
          </p>

          <div className="mt-6 space-y-2 text-xs text-navy-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin className="size-4 text-lime shrink-0 mt-0.5" />
              <span>Airport Road, Kenjar, Mangalore – 574142, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4 text-lime shrink-0" />
              <span>+91 (824) 2254104 / +91 (824) 2254102</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-lime shrink-0" />
              <span>info@sdc.ac.in | sditprincipal@gmail.com</span>
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-eyebrow text-lime">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  active={false}
                  className="text-navy-foreground/75 transition-colors hover:text-lime"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-eyebrow text-lime">Trust Head Office</h2>
          <p className="mt-4 text-xs text-navy-foreground/75 leading-relaxed">
            <strong className="text-white">Shree Devi Education Trust (R.)</strong>
            <br />
            M.G. Road, Mangalore – 575003
            <br />
            South Kanara District, Karnataka
          </p>
          <div className="mt-3 text-xs text-navy-foreground/75 space-y-1">
            <p>
              <strong className="text-white">Phone:</strong> 0824-2456501 / 0824-2456511
            </p>
            <p>
              <strong className="text-white">Mobile:</strong> +91 91411 81260 / +91 91411 81261
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 py-5">
        <p className="mx-auto max-w-7xl px-4 text-xs text-navy-foreground/55 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Shree Devi Institute of Technology (SDIT). Information
          compiled from official records and sdit.ac.in.
        </p>
      </div>
    </footer>
  );
}
