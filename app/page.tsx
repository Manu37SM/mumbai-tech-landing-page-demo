'use client'

import { useState } from 'react'
import { ArrowUpRight, CalendarDays, Check, Clock3, MapPin, Menu, Sparkles, Users, X } from 'lucide-react'

const schedule = [
  { time: '10:00', label: 'Doors open + chai', type: 'arrive' },
  { time: '11:00', label: 'Building for what’s next', type: 'talk' },
  { time: '12:30', label: 'Lunch + lightning demos', type: 'connect' },
  { time: '14:00', label: 'The founder / builder room', type: 'talk' },
  { time: '15:30', label: 'Open networking', type: 'connect' },
]

const audience = ['Software developers', 'Students', 'Tech enthusiasts', 'Startup founders']

export default function Page() {
  const [isRegistrationOpen, setRegistrationOpen] = useState(false)
  const [isSubmitted, setSubmitted] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] text-[#08152f]">
      <nav className="relative z-20 flex items-center justify-between border-b border-[#08152f]/10 px-5 py-5 sm:px-10 lg:px-16">
        <a href="#top" className="font-mono text-xs font-bold uppercase tracking-[0.22em]">MTM<span className="text-[#165dff]">26</span></a>
        <div className="hidden items-center gap-9 font-mono text-[11px] uppercase tracking-[0.16em] md:flex">
          <a href="#about" className="transition-colors hover:text-[#165dff]">About</a>
          <a href="#schedule" className="transition-colors hover:text-[#165dff]">Schedule</a>
          <a href="#venue" className="transition-colors hover:text-[#165dff]">Venue</a>
        </div>
        <button onClick={() => setRegistrationOpen(true)} className="hidden rounded-full bg-[#165dff] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5 sm:block">
          Register <ArrowUpRight className="ml-1 inline size-3" />
        </button>
        <button aria-label="Open menu" onClick={() => setMenuOpen(!isMenuOpen)} className="rounded-full border border-[#08152f]/15 p-2 md:hidden">
          <Menu className="size-4" />
        </button>
        {isMenuOpen && <div className="absolute right-5 top-16 flex w-44 flex-col gap-4 rounded-2xl border border-[#08152f]/10 bg-white p-5 font-mono text-xs uppercase tracking-wider shadow-xl md:hidden"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a><button className="text-left text-[#165dff]" onClick={() => { setMenuOpen(false); setRegistrationOpen(true) }}>Register now</button></div>}
      </nav>

      <section id="top" className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-12 sm:px-10 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-28 top-8 hidden h-[450px] w-[450px] rounded-full bg-[#165dff]/10 blur-3xl lg:block" />
        <div className="relative grid items-end gap-14 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
          <div>
            <div className="mb-9 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#165dff]"><span className="size-2 rounded-full bg-[#165dff]" /> Mumbai · India / Vol. 01</div>
            <h1 className="max-w-4xl text-[clamp(4rem,10.5vw,10.5rem)] font-black leading-[0.82] tracking-[-0.085em]">Build<br /><span className="text-[#165dff]">what’s</span><br />next<span className="text-[#165dff]">.</span></h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#08152f]/65 sm:text-xl">A one-day gathering for the people shaping software, startups, and the future of technology.</p>
            <button onClick={() => setRegistrationOpen(true)} className="mt-8 rounded-full bg-[#08152f] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#165dff]">Reserve your spot <ArrowUpRight className="ml-2 inline size-4" /></button>
          </div>
          <div className="relative flex min-h-[310px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#0b1d3f] p-8 text-white sm:min-h-[390px]">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            <div className="relative flex size-56 rotate-12 items-center justify-center rounded-[30%] border-2 border-[#5f8cff] shadow-[0_0_70px_rgba(22,93,255,.6)] sm:size-72"><div className="size-28 rounded-full border border-[#83a5ff]/60 sm:size-40" /><span className="absolute -bottom-7 right-2 rounded-full bg-[#165dff] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider">17.10.26</span></div>
            <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Meetup / 2026</div>
            <Sparkles className="absolute bottom-7 left-7 size-5 text-[#71a0ff]" />
          </div>
        </div>
        <div className="mt-16 grid gap-6 border-t border-[#08152f]/15 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[#08152f]/65 sm:grid-cols-3"><div><span className="mb-2 block text-[#08152f]/35">Date</span>Saturday, October 17, 2026</div><div><span className="mb-2 block text-[#08152f]/35">Time</span>10:00 AM — 4:00 PM</div><div><span className="mb-2 block text-[#08152f]/35">Place</span>Mumbai, Maharashtra</div></div>
      </section>

      <section id="about" className="bg-[#165dff] px-5 py-20 text-white sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65">01 / Why come</p></div><div><h2 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-6xl">One room. Many perspectives. <span className="text-white/55">A full day to swap ideas and leave with momentum.</span></h2><p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75">Mumbai Tech Meetup is built for curious people who are making things. Expect honest talks, practical discussions, project stories, and plenty of time to meet the humans behind the work.</p><div className="mt-10 flex flex-wrap gap-2">{audience.map((item) => <span key={item} className="rounded-full border border-white/30 px-4 py-2 font-mono text-[11px] uppercase tracking-wider">{item}</span>)}</div></div></div></section>

      <section id="schedule" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mb-12 flex items-end justify-between"><div><p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#165dff]">02 / The day</p><h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">Make time<br /><span className="text-[#165dff]">for ideas.</span></h2></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#08152f]/55 sm:block">A loose, high-signal rhythm. Come for a session, stay for the conversation.</p></div><div className="border-t border-[#08152f]/15">{schedule.map((item, index) => <div key={item.time} className="group grid grid-cols-[70px_1fr_auto] items-center gap-4 border-b border-[#08152f]/15 py-5 sm:grid-cols-[100px_1fr_150px]"><span className="font-mono text-sm text-[#165dff]">{item.time}</span><span className="text-lg font-semibold tracking-tight sm:text-2xl">{item.label}</span><span className="hidden justify-self-end font-mono text-[10px] uppercase tracking-[0.15em] text-[#08152f]/45 sm:block">{item.type}</span><span className="font-mono text-xs text-[#08152f]/30">0{index + 1}</span></div>)}</div></section>

      <section id="venue" className="border-t border-[#08152f]/10 bg-[#e9eef8] px-5 py-20 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:items-end"><div><p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#165dff]">03 / Find us</p><h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">See you<br /><span className="text-[#165dff]">in Mumbai.</span></h2></div><div className="grid gap-6 sm:grid-cols-3 lg:pb-2"><div><MapPin className="mb-3 size-5 text-[#165dff]" /><p className="font-semibold">Mumbai, Maharashtra</p><p className="mt-1 text-sm text-[#08152f]/55">Venue details shared after registration.</p></div><div><CalendarDays className="mb-3 size-5 text-[#165dff]" /><p className="font-semibold">October 17, 2026</p><p className="mt-1 text-sm text-[#08152f]/55">Saturday · One full day.</p></div><div><Clock3 className="mb-3 size-5 text-[#165dff]" /><p className="font-semibold">10 AM — 4 PM</p><p className="mt-1 text-sm text-[#08152f]/55">Talks, lunch, and connection.</p></div></div></div></section>

      <footer className="flex flex-col gap-5 bg-[#08152f] px-5 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"><span className="font-mono text-xs uppercase tracking-[0.2em]">Mumbai Tech Meetup <span className="text-[#71a0ff]">2026</span></span><span className="font-mono text-[10px] uppercase tracking-widest text-white/45">Made for the curious · Mumbai, India</span></footer>

      {isRegistrationOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#08152f]/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="registration-title"><div className="relative w-full max-w-lg rounded-[1.5rem] bg-white p-7 shadow-2xl sm:p-10"><button aria-label="Close registration" onClick={() => { setRegistrationOpen(false); setSubmitted(false) }} className="absolute right-5 top-5 rounded-full p-2 text-[#08152f]/50 hover:bg-[#f5f7fb]"><X className="size-5" /></button>{isSubmitted ? <div className="py-10 text-center"><div className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-[#165dff] text-white"><Check className="size-7" /></div><h2 className="text-3xl font-bold tracking-tight">You’re on the list.</h2><p className="mt-3 text-[#08152f]/60">We’ll send the venue and event details to your inbox.</p></div> : <><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#165dff]">Save your seat</p><h2 id="registration-title" className="mt-3 text-4xl font-bold tracking-[-0.05em]">Join the room.</h2><p className="mt-3 text-sm text-[#08152f]/60">Register online to reserve your spot at Mumbai Tech Meetup 2026.</p><form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4"><label className="font-mono text-[10px] uppercase tracking-wider">Name<input required name="name" className="mt-2 w-full rounded-xl border border-[#08152f]/15 px-4 py-3 font-sans text-base outline-none focus:border-[#165dff]" placeholder="Your name" /></label><label className="font-mono text-[10px] uppercase tracking-wider">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-[#08152f]/15 px-4 py-3 font-sans text-base outline-none focus:border-[#165dff]" placeholder="you@example.com" /></label><button type="submit" className="mt-2 rounded-xl bg-[#165dff] px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#0c46c9]">Complete registration <ArrowUpRight className="ml-1 inline size-4" /></button></form></>}</div></div>}
    </main>
  )
}
