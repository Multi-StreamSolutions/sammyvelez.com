import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ExternalLink, Menu, Play, X } from 'lucide-react'
import { credits, socials } from './content.js'

const nav = [['Work', 'work'], ['Credits', 'credits'], ['Modeling', 'modeling'], ['About', 'about'], ['Contact', 'contact']]

function SectionLabel({ number, children }) {
  return <p className="eyebrow"><span>{number}</span>{children}</p>
}

function Placeholder({ label, className = '' }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`${label} placeholder`}><span>Visual forthcoming</span><strong>{label}</strong></div>
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])
  return <header>
    <a className="monogram" href="#top" aria-label="Sammy Velez, home">SV</a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav id="site-nav" className={open ? 'open' : ''} aria-label="Primary navigation">
      {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <a className="header-contact" href="#contact">Inquiries <ArrowRight size={15} /></a>
  </header>
}

function App() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true"><div className="image-note">Hero portrait<br />awaiting approval</div></div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="kicker">The official website of</p>
          <h1 id="hero-title">Sammy<br /><em>Velez</em></h1>
          <p className="roles">Actor <i /> Model <i /> Comedian <i /> Content Creator</p>
          <div className="hero-actions">
            <a className="button light" href="#reels"><Play size={15} fill="currentColor" /> View Reel</a>
            <a className="button ghost" href="#credits">View Credits</a>
            <a className="text-link" href="#contact">Contact <ArrowRight size={15} /></a>
          </div>
        </div>
        <a className="scroll" href="#intro" aria-label="Scroll to introduction"><ArrowDown size={18} /><span>Explore</span></a>
      </section>

      <section className="intro section" id="intro">
        <SectionLabel number="01">Introduction</SectionLabel>
        <div className="intro-grid">
          <h2>A multi-hyphenate<br />made for the <em>frame.</em></h2>
          <div><p>Sammy Velez is an actor, model, comedian, content creator, and entertainment professional.</p><p className="muted">Explore selected work across screen, stage, digital media, and modeling. Additional professional materials are being prepared for this official portfolio.</p></div>
        </div>
        <div className="preview-grid" id="work">
          <a href="#reels" className="preview"><Placeholder label="Acting & Reels" /><span>01 / Moving image</span><h3>Acting & Reels <ArrowRight /></h3></a>
          <a href="#modeling" className="preview"><Placeholder label="Modeling Portfolio" /><span>02 / Editorial</span><h3>Modeling <ArrowRight /></h3></a>
          <a href="#comedy" className="preview"><Placeholder label="Comedy & Content" /><span>03 / Live + Digital</span><h3>Comedy & Content <ArrowRight /></h3></a>
        </div>
      </section>

      <section className="reels section" id="reels">
        <SectionLabel number="02">Acting / Reels</SectionLabel>
        <div className="split-heading"><h2>On <em>screen.</em></h2><p>Selected scenes, reels, and digital performances. Verified video embeds will be added as final links become available.</p></div>
        <div className="video-shell">
          <div className="video-mark"><Play size={24} /><span>Primary reel</span><small>Video forthcoming</small></div>
          <div className="video-caption"><span>Sammy Velez</span><span>Acting Reel</span><span>Coming soon</span></div>
        </div>
        <div className="media-list">
          {['Vid Chronicles — YouTube work', 'LA Connection Comedy — Performance material', 'No Fugaze Podcast with David Cooley — Optional appearance'].map((x, i) => <div key={x}><b>0{i + 1}</b><span>{x}</span><span className="status">Media link pending</span></div>)}
        </div>
      </section>

      <section className="credits section" id="credits">
        <SectionLabel number="03">Selected Credits</SectionLabel>
        <div className="split-heading"><h2>Professional<br /><em>work.</em></h2><a className="button outline" href="https://www.imdb.com/name/nm18195530/" target="_blank" rel="noreferrer">View IMDb <ExternalLink size={15} /></a></div>
        <div className="credit-table" role="table" aria-label="Selected credits">
          <div className="credit-row heading" role="row"><span>Project</span><span>Format / Source</span></div>
          {credits.map(({ title, type }) => <div className="credit-row" role="row" key={title}><strong>{title}</strong><span>{type}</span></div>)}
        </div>
        <p className="note">Additional verified credits and role details will be added as materials are approved.</p>
      </section>

      <section className="modeling section" id="modeling">
        <div className="model-copy"><SectionLabel number="04">Modeling</SectionLabel><h2>Presence in<br /><em>every frame.</em></h2><p>A curated selection of approved portfolio photography will live here. Visit Sammy’s current modeling portfolio in the meantime.</p><a className="button light" href="https://sammyvelez.modelingfolio.com" target="_blank" rel="noreferrer">View portfolio <ExternalLink size={15} /></a></div>
        <div className="model-grid"><Placeholder label="Editorial portrait" /><Placeholder label="Commercial look" /><Placeholder label="Full-length portrait" /></div>
      </section>

      <section className="comedy section" id="comedy">
        <SectionLabel number="05">Comedy / Content</SectionLabel>
        <div className="split-heading"><h2>Stories with<br /><em>an edge.</em></h2><p>Comedy performance, original content, YouTube work, podcast appearances, and entertainment media—all in one evolving collection.</p></div>
        <div className="content-cards">
          {[['Performance', 'LA Connection Comedy'], ['Digital', 'Vid Chronicles'], ['Conversation', 'No Fugaze Podcast appearance']].map(([type, title], i) => <article key={title}><span>0{i + 1} — {type}</span><h3>{title}</h3><p>Media and details forthcoming.</p></article>)}
        </div>
      </section>

      <section className="about section" id="about">
        <div><SectionLabel number="06">About</SectionLabel><h2>Meet<br /><em>Sammy.</em></h2></div>
        <div className="about-copy"><p className="lead">The full professional biography is currently being prepared.</p><p>Verified biography details, career highlights, training, and downloadable professional materials will be added here once approved.</p><div className="pending"><span>Coming in Phase 2</span><b>Professional bio · Headshots · Résumé</b></div></div>
      </section>

      <section className="contact section" id="contact">
        <SectionLabel number="07">Professional Inquiries</SectionLabel>
        <h2>Let’s create<br /><em>something memorable.</em></h2>
        <div className="contact-grid">
          <div><p>For casting, production, modeling and brand opportunities, comedy appearances, or professional collaborations.</p><div className="contact-pending"><span>Direct contact details forthcoming</span><small>Official inquiry email and representation information will be added once confirmed.</small></div></div>
          <div className="inquiry-types">{['Casting inquiries', 'Production inquiries', 'Modeling + brand', 'Comedy appearances', 'Collaborations'].map(x => <span key={x}>{x}<ArrowRight size={16} /></span>)}</div>
        </div>
      </section>
    </main>
    <footer>
      <a className="footer-name" href="#top">Sammy <em>Velez</em></a>
      <div className="socials" aria-label="Social profiles">{socials.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}<ExternalLink size={11} /></a>)}<span className="soon">Pinterest — URL pending</span></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Sammy Velez</span><span>Official website</span><a href="#top">Back to top ↑</a></div>
    </footer>
  </>
}

export default App
