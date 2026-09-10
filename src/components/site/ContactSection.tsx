import { SectionHeading } from "./SectionHeading";
import { MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru, is affiliated to Visvesvaraya Technological University (VTU), Karnataka, and recognized by the All India Council for Technical Education (AICTE), New Delhi."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Main Campus & Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Address Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2 text-violet">
                  <MapPin className="size-5" />
                  <h3 className="text-base font-bold text-card-foreground">Campus Address</h3>
                </div>
                <div className="mt-4 text-xs leading-relaxed text-muted-foreground space-y-1">
                  <p className="font-bold text-foreground text-sm">
                    Shree Devi Institute of Technology
                  </p>
                  <p>Airport Road, Kenjar</p>
                  <p>Mangalore – 574142</p>
                  <p>Karnataka, India</p>
                </div>
                <div className="mt-4 border-t border-border/60 pt-3">
                  <a
                    href="https://sdit.ac.in/location/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-violet dark:text-lime"
                  >
                    Official Location Page <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              {/* Phone & Email Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-violet">
                    <Phone className="size-5" />
                    <h3 className="text-base font-bold text-card-foreground">Phone Numbers</h3>
                  </div>
                  <div className="mt-3 text-xs space-y-1 text-muted-foreground">
                    <p className="font-bold text-foreground">+91 (824) 2254104</p>
                    <p className="font-bold text-foreground">+91 (824) 2254102</p>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-4">
                  <div className="flex items-center gap-2 text-violet">
                    <Mail className="size-5" />
                    <h3 className="text-base font-bold text-card-foreground">Official Email</h3>
                  </div>
                  <div className="mt-3 text-xs space-y-2 text-muted-foreground">
                    <div>
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        General Enquiries:
                      </span>
                      <p className="font-bold text-foreground">
                        <a href="mailto:info@sdc.ac.in" className="hover:text-violet">
                          info@sdc.ac.in
                        </a>
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        Principal&apos;s Office:
                      </span>
                      <p className="font-bold text-foreground">
                        <a href="mailto:sditprincipal@gmail.com" className="hover:text-violet">
                          sditprincipal@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Office Information */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-2 text-violet">
                <Building2 className="size-5" />
                <h3 className="text-base font-bold text-card-foreground">
                  Shree Devi Education Trust (R.)
                </h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs text-muted-foreground">
                <div className="space-y-1">
                  <p className="font-bold text-foreground">Head Office Address</p>
                  <p>M.G. Road, Mangalore – 575003</p>
                  <p>South Kanara District, Karnataka</p>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-foreground">Trust Office Phones:</span>
                    <p>0824-2456501</p>
                    <p>0824-2456501 / 0824-2456511 / 0824-2457937</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Trust Mobile Contacts:</span>
                    <p>+91 91411 81260</p>
                    <p>+91 91411 81261</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Location & Office Hours */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-2 text-violet">
                <MapPin className="size-5" />
                <h3 className="text-base font-bold text-card-foreground">Campus Map Location</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Shree Devi Institute of Technology, Airport Road, Kenjar, Mangaluru, Karnataka
                574142
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-soft h-[240px] bg-surface">
                <iframe
                  title="SDIT Campus Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.358249692484!2d74.8879!3d12.9431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b4455555555%3A0x5555555555555555!2sShree%20Devi%20Institute%20of%20Technology%2C%20Kenjar%2C%20Mangaluru!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 text-[11px] text-muted-foreground">
                Office hours are not specified on the official SDIT website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
