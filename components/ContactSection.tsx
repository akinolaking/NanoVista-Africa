const STORE_URL = 'https://optixwarehouse.com.ng/store/nanoafrica/'

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const CONTACTS = [
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: <a href="tel:+2348000000000" className="text-[#555] hover:text-primary transition-colors">+234 800 000 0000</a>,
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: <a href="mailto:hello@nanovista.africa" className="text-[#555] hover:text-primary transition-colors">hello@nanovista.africa</a>,
  },
  {
    icon: <LocationIcon />,
    label: 'Location',
    value: <span className="text-[#555]">Lagos, Nigeria<br />Serving West Africa</span>,
  },
] as const

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-[100px] px-6 text-center">
      <div className="max-w-page mx-auto">

        {/* Stacked outlined heading */}
        <div>
          {(['FIND YOUR', 'NEAREST', 'NANO GLASSES'] as const).map((line, i) => (
            <span
              key={line}
              className={`sr ${['', 'd1', 'd2'][i]} block font-heading font-bold uppercase`}
              style={{
                fontSize: 'clamp(36px, 9vw, 118px)',
                WebkitTextStroke: '3px #8dc63f',
                color: 'transparent',
                lineHeight: 0.92,
              }}
            >
              {line}
            </span>
          ))}
          {/* Solid green "STORE" */}
          <span
            className="sr d3 block font-heading font-bold uppercase mb-13"
            style={{
              fontSize: 'clamp(36px, 9vw, 118px)',
              color: '#8dc63f',
              lineHeight: 0.92,
              marginBottom: '52px',
            }}
          >
            STORE
          </span>
        </div>

        <div className="sr d4 mb-14">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[13px]"
          >
            Shop at Optix Warehouse
          </a>
        </div>

        {/* Contact cards */}
        <div className="sr d5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACTS.map((card) => (
            <div key={card.label} className="contact-card">
              {/* Icon circle */}
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-[18px] text-white"
                style={{ background: '#8dc63f', boxShadow: '0 4px 24px rgba(141,198,63,0.35)' }}
              >
                {card.icon}
              </div>
              <div className="font-heading font-bold text-[10px] tracking-[0.22em] uppercase mb-2.5" style={{ color: '#8dc63f' }}>
                {card.label}
              </div>
              <div className="font-body text-[14px] font-semibold leading-[1.6]">
                {card.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
