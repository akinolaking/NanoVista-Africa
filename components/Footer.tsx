import Image from 'next/image'

const QUICK_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Shop',        href: '#store' },
  { label: 'Contact',     href: '#contact' },
] as const

const LEGAL_LINKS = [
  { label: 'Legal Disclaimer', href: '#' },
  { label: 'Privacy Policy',   href: '#' },
  { label: 'Cookies Policy',   href: '#' },
] as const

const SOCIALS = [
  {
    label: 'Facebook',
    color: '#1877F2',
    href: '#',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    color: '#E1306C',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'YouTube',
    color: '#FF0000',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'WhatsApp',
    color: '#25D366',
    href: '#',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
  {
    label: 'Pinterest',
    color: '#BD081C',
    href: '#',
    path: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>

      {/* SEO block */}
      <div className="bg-white py-16 px-6 text-center border-t border-[#eee]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="font-heading font-black text-[14px] uppercase tracking-[0.08em] text-body mb-[18px]">
            NanoVista Africa &mdash; Indestructible and Flexible Children&rsquo;s Glasses
          </h2>
          <p className="font-body text-[13px] text-[#999] leading-[1.9]">
            Children are restless by nature. They run, jump, play &mdash; and need glasses
            that adapt to them, not the other way around. NanoVista Africa brings the best
            indestructible and flexible children&rsquo;s glasses to Nigeria and West Africa.
            Siliflex&trade; frames are safe, clinically endorsed, and come in over 300 models
            so you can always find glasses that fit your child&rsquo;s style and personality.
          </p>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="py-[60px] px-6" style={{ background: '#f4f4f4' }}>
        <div className="max-w-page mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="NanoVista Africa"
              width={120}
              height={30}
              className="h-[30px] w-auto mb-[18px]"
              style={{ filter: 'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(450%) hue-rotate(52deg) brightness(90%)' }}
            />
            <p className="font-body text-[13px] text-[#888] leading-[1.8] max-w-[260px]">
              The official NanoVista franchise for Nigeria and West Africa.
              Genuine products, authorised partner.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span className="ft-col-title block font-heading font-bold text-[10px] tracking-[0.26em] uppercase pb-3.5 mb-5 border-b-2" style={{ color: '#8dc63f', borderColor: '#8dc63f' }}>
              Quick Links
            </span>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-[#777] hover:text-primary hover:pl-1.5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="block font-heading font-bold text-[10px] tracking-[0.26em] uppercase pb-3.5 mb-5 border-b-2" style={{ color: '#8dc63f', borderColor: '#8dc63f' }}>
              Legal
            </span>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-[#777] hover:text-primary hover:pl-1.5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <span className="block font-heading font-bold text-[10px] tracking-[0.26em] uppercase pb-3.5 mb-5 border-b-2" style={{ color: '#8dc63f', borderColor: '#8dc63f' }}>
              Follow Us
            </span>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200"
                  style={{ background: s.color }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="py-3.5 px-6 text-center font-body text-[12px] text-white tracking-[0.04em]"
        style={{ background: '#888888' }}
      >
        &copy; {year} NanoVista Africa &mdash; Official West Africa Franchise of NanoVista Spain
      </div>

    </footer>
  )
}
