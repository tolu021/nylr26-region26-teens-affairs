import { useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Cross,
  Flame,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Music2,
  Phone,
  Send,
  Sparkles,
  Waves,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const eventDetails = {
  date: "Date to be announced",
  time: "Time to be announced",
  venue: "Venue to be announced",
  location: "Location to be announced",
  registrationUrl: "#contact",
};

const contactDetails = {
  phone: "Phone number to be added",
  whatsappPhone: "",
  email: "Email address to be added",
  address: "Ministry address to be added",
};

const ministers = [
  {
    name: "Minister's name to be announced",
    ministry: "Ministry / church designation",
    role: "Host Minister",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    position: "center 35%",
  },
  {
    name: "Minister's name to be announced",
    ministry: "Ministry / church designation",
    role: "Guest Minister",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    position: "center 35%",
  },
  {
    name: "Minister's name to be announced",
    ministry: "Ministry / church designation",
    role: "Guest Minister",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    position: "center 35%",
  },
  {
    name: "Minister's name to be announced",
    ministry: "Ministry / church designation",
    role: "Guest Minister",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=85",
    position: "center 35%",
  },
];

const activities = [
  {
    number: "01",
    title: "Intense worship & praise",
    description:
      "Lift your voice, quiet the noise and make room for the presence of God.",
    icon: Music2,
  },
  {
    number: "02",
    title: "Transformative word",
    description:
      "Receive Scripture-rooted teaching to shape your life and deepen your walk.",
    icon: Cross,
  },
  {
    number: "03",
    title: "Prayer & intercession",
    description:
      "Join in focused prayer for personal renewal, the Church and our generation.",
    icon: Waves,
  },
  {
    number: "04",
    title: "Spiritual impartation",
    description:
      "Be stirred and equipped to carry your God-given calling with courage.",
    icon: Flame,
  },
  {
    number: "05",
    title: "Revival & consecration",
    description:
      "Set your heart apart again and respond to God's invitation to holy living.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Fellowship & connection",
    description:
      "Meet a like-minded generation pursuing Jesus and serving His Kingdom.",
    icon: HeartHandshake,
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Ministers", "#ministers"],
  ["Programme", "#programme"],
  ["Contact", "#contact"],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="section-eyebrow">
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? " brand-light" : ""}`} href="#home" aria-label="NYLR 2026 home">
      <span className="brand-mark">N</span>
      <span className="brand-copy">
        <strong>NYLR</strong>
        <small>2026 · Vessels unto Honour</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappDigits = contactDetails.whatsappPhone.replace(/\D/g, "");
  const whatsappUrl = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent("Hello, I would like to know more about NYLR 2026.")}`
    : `https://wa.me/?text=${encodeURIComponent("Hello, I would like to know more about NYLR 2026.")}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className="site-header">
        <div className="nav-shell">
          <Brand light />
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="button button-gold nav-register mobile-register" href={eventDetails.registrationUrl} onClick={closeMenu}>
              Register now <ArrowUpRight size={15} />
            </a>
          </nav>
          <a className="button button-gold nav-register desktop-register" href={eventDetails.registrationUrl}>
            Register now <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-content page-width">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              <SectionEyebrow>AN ENCOUNTER WITH PURPOSE</SectionEyebrow>
              <h1>
                Vessels
                <br />
                <span>unto honour.</span>
              </h1>
              <div className="hero-event-line">
                <span />
                <strong>NYLR 2026</strong>
                <span />
              </div>
              <p className="hero-intro">
                A generation set apart, purified and prepared for the Master&apos;s use.
              </p>
              <p className="scripture-ref">2 Timothy 2:20–21</p>
              <div className="hero-actions">
                <a className="button button-gold" href={eventDetails.registrationUrl}>
                  Register now <ArrowUpRight size={16} />
                </a>
                <a className="button button-outline" href="#programme">
                  Explore the programme <ArrowDownRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="hero-side-note">A GENERATION SET APART · 2026</div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about the programme">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={16} />
          </a>
          <div className="hero-index">01 <span>/</span> 06</div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="page-width about-grid">
            <motion.div
              className="about-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <div className="about-photo">
                <img
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1100&q=85"
                  alt="Worshippers lifting their hands in a moment of praise"
                  loading="lazy"
                />
              </div>
              <div className="photo-caption">
                <span>SET APART</span>
                <span className="caption-rule" />
                <span>FOR HIS PURPOSE</span>
              </div>
              <div className="scripture-card">
                <span className="quote-mark">“</span>
                <p>…a vessel unto honour, sanctified, and meet for the Master&apos;s use.</p>
                <small>2 TIMOTHY 2:21</small>
              </div>
              <div className="about-orbit" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <SectionEyebrow>THE HEART OF NYLR</SectionEyebrow>
              <h2>A call to <em>consecration.</em></h2>
              <p className="about-lead">
                God is still shaping lives for His purpose. NYLR 2026 is an invitation to become
                ready vessels—set apart, made whole and available for the Master&apos;s work.
              </p>
              <p className="body-copy">
                Rooted in 2 Timothy 2:20–21, this gathering calls a generation beyond simply
                showing up. It is a space to encounter God, grow in holiness and intimacy with
                Him, and discover what it means to serve with a heart fully yielded.
              </p>
              <div className="about-pillars">
                <div><span>01</span><strong>Grow in His presence</strong></div>
                <div><span>02</span><strong>Be shaped for purpose</strong></div>
                <div><span>03</span><strong>Live ready to serve</strong></div>
              </div>
              <a className="text-link" href="#programme">
                Discover the gathering <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="ministers-section section-pad" id="ministers">
          <div className="page-width">
            <motion.div
              className="section-heading ministers-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div>
                <SectionEyebrow>ANOINTED TO SERVE</SectionEyebrow>
                <h2>Ministers of <em>the Gospel</em></h2>
              </div>
              <p>
                Faithful voices bringing the Word, leading us in worship and making space for
                encounters with God.
              </p>
            </motion.div>
            <div className="minister-grid">
              {ministers.map((minister, index) => (
                <motion.article
                  className="minister-card"
                  key={`${minister.role}-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: index * 0.08 } } }}
                >
                  <div className="minister-photo">
                    <img
                      src={minister.image}
                      alt={`Placeholder portrait for ${minister.role}`}
                      style={{ objectPosition: minister.position }}
                      loading="lazy"
                    />
                    <span className="minister-number">0{index + 1}</span>
                    <span className="minister-role">{minister.role}</span>
                  </div>
                  <div className="minister-info">
                    <h3>{minister.name}</h3>
                    <p>{minister.ministry}</p>
                    <span className="profile-placeholder"><Check size={12} /> PROFILE TO BE UPDATED</span>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="placeholder-note">Minister names and designations will be announced soon.</p>
          </div>
        </section>

        <section className="programme-section section-pad" id="programme">
          <div className="page-width">
            <motion.div
              className="section-heading programme-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div>
                <SectionEyebrow>COME EXPECTANT</SectionEyebrow>
                <h2>A journey of <em>encounters.</em></h2>
              </div>
              <p>
                More than a programme—a sacred pause to worship, receive and respond to all God is
                doing in you.
              </p>
            </motion.div>
            <div className="activity-grid">
              {activities.map(({ number, title, description, icon: Icon }, index) => (
                <motion.article
                  className="activity-card"
                  key={number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: (index % 3) * 0.08 } } }}
                >
                  <div className="activity-top">
                    <span>{number}</span>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="activity-rule" />
                </motion.article>
              ))}
            </div>
            <div className="programme-footnote">
              <span className="footnote-icon"><ChevronDown size={15} /></span>
              <p>Full programme details and schedule will be shared closer to the event.</p>
              <a href="#event-info">Event information <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="event-section section-pad" id="event-info">
          <div className="event-glow" aria-hidden="true" />
          <div className="page-width event-grid">
            <motion.div
              className="event-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <SectionEyebrow>MAKE ROOM FOR AN ENCOUNTER</SectionEyebrow>
              <h2>Gather with <em>purpose.</em></h2>
              <p>
                We&apos;re preparing a place for you. Event details are coming soon—stay connected
                and be among the first to know.
              </p>
              <a className="button button-gold" href={eventDetails.registrationUrl}>
                Get event updates <ArrowUpRight size={16} />
              </a>
            </motion.div>
            <div className="event-details-grid">
              <EventDetail icon={<CalendarDays />} label="Date" value={eventDetails.date} />
              <EventDetail icon={<Clock3 />} label="Time" value={eventDetails.time} />
              <EventDetail icon={<MapPin />} label="Venue" value={eventDetails.venue} />
              <EventDetail icon={<MapPin />} label="Location" value={eventDetails.location} />
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-photo" aria-hidden="true" />
          <div className="cta-overlay" aria-hidden="true" />
          <motion.div
            className="cta-content page-width"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <SectionEyebrow>YOUR YES CAN CHANGE EVERYTHING</SectionEyebrow>
            <h2>Are you ready to become<br />a vessel <em>unto honour?</em></h2>
            <p>
              Prepare your heart for an encounter that will challenge, transform and position you
              for the Master&apos;s use.
            </p>
            <a className="button button-gold" href={eventDetails.registrationUrl}>
              Secure your place <ArrowUpRight size={16} />
            </a>
          </motion.div>
          <div className="cta-reference">2 TIMOTHY 2:20–21</div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-grid">
            <motion.div
              className="contact-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <SectionEyebrow>WE WOULD LOVE TO HEAR FROM YOU</SectionEyebrow>
              <h2>Let&apos;s <em>connect.</em></h2>
              <p>
                Questions about NYLR 2026? Reach out to the team—we&apos;re happy to help you get
                ready for the gathering.
              </p>
              <a
                className="button button-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp to contact the NYLR 2026 team"
              >
                <Send size={16} /> Chat with us on WhatsApp
              </a>
              <div className="contact-hint">WhatsApp contact details will be updated soon.</div>
            </motion.div>
            <div className="contact-list">
              <ContactItem icon={<Phone />} label="Call us" value={contactDetails.phone} href={undefined} />
              <ContactItem icon={<Mail />} label="Email us" value={contactDetails.email} href={undefined} />
              <ContactItem icon={<MapPin />} label="Find us" value={contactDetails.address} href={undefined} />
              <div className="social-row">
                <span>FOLLOW THE JOURNEY</span>
                <a href="#contact" aria-label="Instagram placeholder link">IG</a>
                <a href="#contact" aria-label="Facebook placeholder link">FB</a>
                <a href="#contact" aria-label="YouTube placeholder link">YT</a>
                <small>Social links to be added</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand-block">
            <Brand light />
            <p>A generation set apart, purified<br />and prepared for the Master&apos;s use.</p>
          </div>
          <div className="footer-nav-block">
            <span className="footer-label">EXPLORE</span>
            <div>
              {navigation.slice(1).map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
          </div>
          <div className="footer-theme">
            <span className="footer-label">2026 THEME</span>
            <strong>Vessels unto Honour</strong>
            <small>2 Timothy 2:20–21</small>
          </div>
          <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>
        </div>
        <div className="footer-bottom page-width">
          <span>© 2026 NYLR. All Rights Reserved.</span>
          <span>MADE FOR HIS PURPOSE <span className="footer-star">✳</span></span>
        </div>
      </footer>
    </div>
  );
}

function EventDetail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="event-detail">
      <span className="detail-icon">{icon}</span>
      <div>
        <span className="detail-label">{label}</span>
        <strong>{value}</strong>
      </div>
      <ArrowUpRight className="detail-arrow" size={15} />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string | undefined;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span className="contact-item-copy">
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
      <ArrowUpRight className="contact-arrow" size={17} />
    </>
  );
  return href ? (
    <a className="contact-item" href={href}>{content}</a>
  ) : (
    <div className="contact-item">{content}</div>
  );
}

export default App;
