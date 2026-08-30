import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

const NAV_LINKS = ['Workflows', 'Method', 'Services', 'Audit']

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
      />
      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Navbar */}
      <header className="relative z-20">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
          <a href="#" className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
            Claudiators
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#audit"
            className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase text-white hover:bg-white/10 transition font-inter"
          >
            Book Your Audit
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            className="md:hidden flex flex-col items-end space-y-1.5"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">
          <span className="font-podium text-white font-bold uppercase text-2xl tracking-wider">Claudiators</span>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="w-7 h-7 text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-88px)] gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link}
            </a>
          ))}

          <a
            href="#audit"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center gap-2 border border-white/30 px-6 py-3 text-xs tracking-widest uppercase text-white font-inter transition-all duration-500"
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Book Your Audit
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hero content */}
      <main className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-2">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">
              AI Enablement For Micro-SMBs
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Audit.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Automate.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Accelerate.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md">
            We connect Claude to the tools your business already runs
            <br />
            so the busywork disappears — <span className="text-white font-semibold">the work just gets done.</span>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#audit"
              className="group flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-inter transition"
            >
              Book A Free Audit
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div className="text-white/60 text-xs tracking-wider uppercase font-inter leading-snug">
                <div>ITWORKS.IT</div>
                <div>Service Line</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            {[
              { value: '6', label: 'Core AI Offers' },
              { value: '2–25', label: 'Employee Micro-SMBs' },
              { value: '90', label: 'Days To First Workflow' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase font-inter mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
