import { useState, useEffect } from 'react'
import {
  Mail,
  ExternalLink,
  Code,
  Terminal,
  Cpu,
  Layers,
  Send,
  Check,
  Menu,
  X,
  ChevronUp,
  Globe,
  Sparkles,
  Server,
  Briefcase,
  User,
  GraduationCap,
  Sun,
  Moon,
  Download,
  Phone
} from 'lucide-react'

// Custom SVG Brand Icons since Lucide v1+ does not bundle them
const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

function App() {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  // Navigation & Scroll states
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Interactive Project Filter state
  const [projectFilter, setProjectFilter] = useState('all')

  // Contact form interactive state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  // Interactive Terminal state
  const [terminalTab, setTerminalTab] = useState('bio')

  // Apply light/dark classes dynamically to document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Handle scroll events for navbar style & back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer to highlight active navigation link
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el)
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    
    setIsSending(true)
    try {
      const response = await fetch("https://formsubmit.co/ajax/ransfordtakyi149@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert("An error occurred while sending the message. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Failed to send message. Please check your connection and try again.")
    } finally {
      setIsSending(false)
    }
  }

  // Developer data
  const developerInfo = {
    name: 'Ransford Takyi',
    title: 'Presales Engineer | Enterprise IT Solutions | Forex Trader',
    bio: 'I started as a React frontend developer building modern applications, then transitioned into enterprise IT solutions where I design networking, data center, and infrastructure systems. Alongside this, I actively trade forex with a focus on technical and fundamental analysis.',
    skills: {
      frontend: [
        { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'JavaScript', level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-cyan-500' },
        { name: 'UI Design', level: 75, color: 'from-emerald-400 to-green-500' }
      ],
      backend: [
        { name: 'Networking', level: 90, color: 'from-green-500 to-emerald-600' },
        { name: 'Data Center Solutions', level: 88, color: 'from-blue-600 to-indigo-700' },
        { name: 'Storage Systems', level: 85, color: 'from-pink-500 to-rose-500' },
        { name: 'Solution Design', level: 92, color: 'from-yellow-500 to-amber-600' }
      ],
      devops: [
        { name: 'Forex Trading', level: 95, color: 'from-blue-400 to-indigo-500' },
        { name: 'Technical Analysis', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'Fundamentals', level: 90, color: 'from-violet-500 to-purple-600' },
        { name: 'Risk Management', level: 90, color: 'from-slate-500 to-zinc-700' }
      ]
    },
    projects: [
      {
        id: 1,
        title: 'Enterprise Network Design',
        category: 'enterprise',
        description: 'Designed enterprise networking solutions including switching, routing, and WLAN architectures.',
        tags: ['Networking', 'Switching', 'Routing'],
        imageGradient: 'from-purple-900 via-indigo-950 to-blue-900',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 2,
        title: 'Data Center Solution Proposal',
        category: 'enterprise',
        description: 'Built infrastructure proposals for compute, storage, and backup systems.',
        tags: ['Data Center', 'Storage', 'Backup'],
        imageGradient: 'from-cyan-900 via-teal-950 to-emerald-900',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 3,
        title: 'Movie App (React)',
        category: 'frontend',
        description: 'Movie discovery app using React and external APIs.',
        tags: ['React', 'API', 'UI'],
        imageGradient: 'from-rose-900 via-red-950 to-orange-900',
        liveUrl: 'https://react-movie-app-self-sigma.vercel.app/',
        githubUrl: 'https://github.com/Qiitoboy/REACT-MOVIE-APP'
      },
      {
        id: 4,
        title: 'Inventory Dashboard',
        category: 'frontend',
        description: 'Inventory system dashboard built with React.',
        tags: ['React', 'Dashboard'],
        imageGradient: 'from-violet-900 via-fuchsia-950 to-pink-900',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 5,
        title: 'Forex Market Analysis',
        category: 'trading',
        description: 'Technical and fundamental analysis of forex markets.',
        tags: ['Forex', 'Liquidity', 'Price Action'],
        imageGradient: 'from-amber-900 via-stone-950 to-yellow-900',
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        id: 6,
        title: 'Trading Strategy Journal',
        category: 'trading',
        description: 'Personal trading journal and strategy tracking system.',
        tags: ['Trading', 'Risk Management'],
        imageGradient: 'from-emerald-900 via-zinc-950 to-teal-900',
        liveUrl: '#',
        githubUrl: '#'
      }
    ]
  }

  // Smooth scroll handler helper
  const scrollTo = (id) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Terminal mock content based on selected tab
  const getTerminalContent = () => {
    switch (terminalTab) {
      case 'bio':
        return `{
  "name": "${developerInfo.name}",
  "role": "${developerInfo.title}",
  "experience": "Frontend + Enterprise IT + Forex Trading",
  "focus": "Infrastructure & Market Analysis",
  "location": "Ghana",
  "status": "Available for opportunities"
}`
      case 'experience':
        return `[
  {
    "role": "Presales Engineer",
    "focus": "Enterprise IT Solutions & Infrastructure Design"
  },
  {
    "role": "Frontend Developer",
    "focus": "React UI Development"
  },
  {
    "role": "Forex Trader",
    "focus": "Technical & Fundamental Analysis"
  }
]`
      case 'education':
        return `[
  {
    "degree": "BSc Information Technology",
    "focus": ["Networking", "Software Development", "Systems"]
  }
]`
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 selection:bg-purple-500 selection:text-white relative overflow-x-hidden transition-colors duration-300">
      
      {/* Visual background lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-indigo-500/3 dark:bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-lg shadow-black/5 dark:shadow-black/20' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center space-x-2 font-bold text-xl tracking-tight cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-mono shadow-md group-hover:scale-105 transition-transform duration-300">
              &lt;/&gt;
            </div>
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-sans">
              {developerInfo.name}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize cursor-pointer ${
                  activeSection === section
                    ? 'text-purple-600 dark:text-white bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/20 border border-transparent'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Theme Toggler & Socials & Hire Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300/60 dark:border-slate-700/30 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a 
              href="https://github.com/Qiitoboy" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ransford-oduro-33a548277/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-500/15 dark:shadow-purple-500/25 hover:shadow-purple-500/30 dark:hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle Row */}
          <div className="flex items-center space-x-2 md:hidden">
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/30"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[73px] left-0 right-0 glass-panel border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl animate-fade-in">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`py-2 px-4 rounded-lg text-left font-medium capitalize text-sm ${
                  activeSection === section
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/30'
                }`}
              >
                {section}
              </button>
            ))}
            <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center space-x-6">
                <a href="https://github.com/Qiitoboy" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center space-x-2 text-sm">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ransford-oduro-33a548277/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center space-x-2 text-sm">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-center"
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold tracking-wider uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-purple-600 dark:text-purple-400" />
              <span>Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-sans">
              Bridging Technology, <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent">
                Enterprise & Markets
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed">
              Hi, I'm <strong className="text-slate-900 dark:text-slate-100 font-semibold">{developerInfo.name}</strong>. {developerInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => scrollTo('projects')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-xl shadow-purple-500/20 hover:shadow-purple-500/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <Code className="w-4 h-4" />
              </button>
              <a 
                href="/resume.pdf" 
                download="Ransford_Takyi_CV.pdf"
                className="px-8 py-4 rounded-full bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/40 hover:border-slate-400 dark:hover:border-slate-600 flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Tech Badge row */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60">
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">EXPERIENCED WITH</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400 font-mono text-sm">
                <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>Enterprise Solutions</span>
                <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>React / UI Development</span>
                <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Forex Trading</span>
                <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>Networking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Interactive Terminal Frame */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Background glowing shape */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[80px] opacity-15 dark:opacity-25 animate-float pointer-events-none"></div>
            
            <div className="w-full max-w-md glass-panel rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800/80 shadow-purple-500/5 relative z-10 animate-float">
              {/* Window Bar */}
              <div className="bg-slate-100 dark:bg-[#0b0f19] px-4 py-3 border-b border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center space-x-1">
                  <Terminal className="w-3 h-3" />
                  <span>bash - ransford@takyi-dev</span>
                </div>
                <div className="w-4"></div>
              </div>

              {/* Terminal Screen */}
              <div className="p-5 font-mono text-left text-xs sm:text-sm bg-slate-900 dark:bg-[#080b12] text-purple-300 leading-relaxed min-h-[300px]">
                <div className="text-slate-500 mb-2"># System initialized. Querying developer profile...</div>
                <div className="flex items-center space-x-2 text-slate-300 mb-4">
                  <span className="text-emerald-400">ransford@takyi-dev:~$</span>
                  <span className="text-slate-100">npx whoami</span>
                </div>
                
                <div className="text-slate-300 border-l-2 border-purple-500/40 pl-3 py-1 mb-4 space-y-1">
                  <p className="font-semibold text-slate-100">{developerInfo.name}</p>
                  <p className="text-purple-400/90">{developerInfo.title}</p>
                  <p className="text-slate-400 text-xs">"Architecting elegant, enterprise IT infrastructures & market solutions."</p>
                </div>

                <div className="flex items-center space-x-2 text-slate-300 mb-2">
                  <span className="text-emerald-400">ransford@takyi-dev:~$</span>
                  <span className="text-slate-100">cat current_status.sh</span>
                </div>
                <p className="text-slate-400 pl-4 mb-4">
                  🚀 Designing Enterprise Networks & Cloud Infrastructures.<br />
                  💡 Toggling React dashboards & Forex chart flows.
                </p>

                <div className="flex items-center space-x-2 text-slate-300">
                  <span className="text-emerald-400">ransford@takyi-dev:~$</span>
                  <span className="w-2 h-4 bg-purple-400 animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-[#070a11]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">ABOUT ME</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Technology, Infrastructure & Market Analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Bio and Stats */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2 font-sans">
                  <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>My Story</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I started my technical career deep in frontend development, creating responsive applications. That foundation in user interface and software systems propelled me into enterprise IT.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Today, as a Presales Engineer, I design networking (switching, routing, WLAN), storage solutions, and data center infrastructures for corporate clients. Concurrently, I apply highly systematic technical and fundamental models as a forex trader.
                </p>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="p-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/40">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-sans">90%</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1 uppercase tracking-wide">IT Architecture</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/40">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent font-sans">85%</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1 uppercase tracking-wide">React Dev</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/40">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent font-sans">95%</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1 uppercase tracking-wide">Trading Analysis</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Dashboard */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="w-full h-full glass-panel rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col min-h-[360px]">
                
                {/* Navigation Tabs */}
                <div className="bg-slate-100 dark:bg-[#0b0f19] px-4 pt-3 flex border-b border-slate-200 dark:border-slate-800/60 justify-between items-end">
                  <div className="flex space-x-1">
                    {[
                      { id: 'bio', label: 'about_me.json', icon: User },
                      { id: 'experience', label: 'experience.json', icon: Briefcase },
                      { id: 'education', label: 'education.json', icon: GraduationCap }
                    ].map((tab) => {
                      const Icon = tab.icon
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setTerminalTab(tab.id)}
                          className={`px-4 py-2 text-xs font-mono rounded-t-lg flex items-center space-x-1.5 border-t border-x transition-colors cursor-pointer ${
                            terminalTab === tab.id
                              ? 'bg-slate-50 dark:bg-[#080b12] text-purple-600 dark:text-purple-400 border-slate-200 dark:border-slate-800'
                              : 'bg-transparent text-slate-400 dark:text-slate-500 border-transparent hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      )
                    })}
                  </div>
                  
                  {/* Status Circle Indicators */}
                  <div className="flex space-x-1 pb-3 pr-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800"></div>
                  </div>
                </div>

                {/* Dashboard Tab Content */}
                <div className="p-6 font-mono text-left text-xs sm:text-sm bg-slate-50 dark:bg-[#080b12] flex-grow overflow-auto max-h-[300px]">
                  <pre className="text-purple-700 dark:text-purple-300/90 whitespace-pre-wrap leading-relaxed">
                    {getTerminalContent()}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">TECH & SKILLS STACK</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Dynamic Frameworks & Engineering Skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Frontend Column */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 glow-card hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-sans">Software Development</h3>
              <div className="space-y-5">
                {developerInfo.skills.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{skill.name}</span>
                      <span className="text-slate-400 dark:text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Column */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 glow-card hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-sans">Enterprise Solutions</h3>
              <div className="space-y-5">
                {developerInfo.skills.backend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{skill.name}</span>
                      <span className="text-slate-400 dark:text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & Devops Column */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 glow-card hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-sans">Financial Markets</h3>
              <div className="space-y-5">
                {developerInfo.skills.devops.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{skill.name}</span>
                      <span className="text-slate-400 dark:text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-[#070a11]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">WORK & PROJECTS</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Selected Portfolios
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex justify-center space-x-2.5 mb-12 flex-wrap gap-y-3">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'enterprise', label: 'Enterprise Solutions' },
              { id: 'frontend', label: 'Frontend Dev' },
              { id: 'trading', label: 'Forex Trading' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setProjectFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                  projectFilter === filter.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerInfo.projects
              .filter((p) => projectFilter === 'all' || p.category === projectFilter)
              .map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/70 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full hover:border-slate-300 dark:hover:border-slate-700"
                >
                  {/* Decorative Project Image Panel */}
                  <div className={`h-48 bg-gradient-to-tr ${project.imageGradient} p-6 flex flex-col justify-between relative`}>
                    <div className="absolute inset-0 bg-slate-900/10 dark:bg-[#090d16]/30 backdrop-blur-[1px]"></div>
                    <div className="flex justify-between items-start relative z-10 w-full">
                      <span className="text-[10px] font-mono tracking-widest font-bold uppercase bg-slate-900/80 dark:bg-[#090d16]/80 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <a 
                          href={project.githubUrl} 
                          className="p-1.5 rounded-lg bg-slate-900/80 dark:bg-[#090d16]/80 hover:bg-slate-900 dark:hover:bg-[#090d16] text-slate-300 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          className="p-1.5 rounded-lg bg-slate-900/80 dark:bg-[#090d16]/80 hover:bg-slate-900 dark:hover:bg-[#090d16] text-slate-300 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Glowing Accent */}
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative z-10 shadow-lg backdrop-blur-sm self-start mt-4">
                      <Code className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors font-sans">
                        <a 
                          href={project.liveUrl} 
                          target={project.liveUrl !== '#' ? "_blank" : undefined} 
                          rel={project.liveUrl !== '#' ? "noreferrer" : undefined}
                          className="hover:underline cursor-pointer"
                        >
                          {project.title}
                        </a>
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/20 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">CONTACT</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Let's Collaborate On Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Direct info & social links */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Get in Touch</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                  Have an enterprise design requirement, forex research query, or React layout project? Feel free to reach out, and I will be happy to connect.
                </p>

                {/* Direct info list */}
                <div className="space-y-4 font-mono text-sm pt-4">
                  <div className="flex items-center space-x-3.5 text-slate-700 dark:text-slate-300">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-650 dark:text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:ransfordtakyi149@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">ransfordtakyi149@gmail.com</a>
                  </div>

                  <div className="flex items-center space-x-3.5 text-slate-700 dark:text-slate-300">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-650 dark:text-blue-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span>Accra, Ghana</span>
                  </div>

                  <div className="flex items-center space-x-3.5 text-slate-700 dark:text-slate-300">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-650 dark:text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:+233598183935" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">+233 598183935</a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">CONNECT ON SOCIALS</p>
                <div className="flex space-x-4">
                  {[
                    { icon: GithubIcon, href: 'https://github.com/Qiitoboy', label: 'GitHub' },
                    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ransford-oduro-33a548277/', label: 'LinkedIn' },
                    { icon: XIcon, href: 'https://x.com/Qiitoboy', label: 'X (Twitter)' }
                  ].map((soc) => {
                    const Icon = soc.icon
                    return (
                      <a
                        key={soc.label}
                        href={soc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-750 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                        aria-label={soc.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Glassmorphic Contact Form */}
            <div className="lg:col-span-7">
              <form 
                onSubmit={handleSubmit}
                className="w-full glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 text-left space-y-6 shadow-2xl relative"
              >
                
                {/* Full-size submission overlay for premium UX */}
                {isSubmitted && (
                  <div className="absolute inset-0 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center space-y-4 animate-fade-in z-20 px-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-400 animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Message Transmitted!</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
                      Thank you for getting in touch. I will read and review your transmission shortly.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="e.g. Jean Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500/60 text-slate-800 dark:text-slate-200 outline-none text-sm transition-all focus:ring-2 focus:ring-purple-500/15"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="e.g. jean@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500/60 text-slate-800 dark:text-slate-200 outline-none text-sm transition-all focus:ring-2 focus:ring-purple-500/15"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Your Transmission</label>
                  <textarea 
                    id="message"
                    rows="5"
                    required
                    placeholder="Enter your query or project specifications..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 focus:border-purple-500 dark:focus:border-purple-500/60 text-slate-800 dark:text-slate-200 outline-none text-sm transition-all focus:ring-2 focus:ring-purple-500/15 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25"
                >
                  {isSending ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-950 bg-slate-100 dark:bg-[#06080e] relative z-10 text-center text-slate-500 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          
          <div className="flex items-center space-x-2">
            <span className="font-mono text-purple-650 dark:text-purple-400 font-semibold">&lt;/&gt;</span>
            <span className="text-slate-700 dark:text-slate-400 font-medium">{developerInfo.name}</span>
            <span>&copy; {new Date().getFullYear()} — Made with Passion.</span>
          </div>

          <div className="flex space-x-6 font-mono text-xs">
            <button onClick={() => scrollTo('hero')} className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer">Back to Top</button>
            <span>•</span>
            <span className="text-slate-400 dark:text-slate-650">Built via React + Tailwind CSS</span>
          </div>

        </div>
      </footer>

      {/* Back to top floating button */}
      {isScrolled && (
        <button
          onClick={() => scrollTo('hero')}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  )
}

export default App