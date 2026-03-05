import React, { useEffect, useState } from 'react';
import {
  Phone,
  Menu,
  X,
  Briefcase,
  LineChart,
  Users,
  Calculator,
  Headphones,
  FileText,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Check,
  BookOpen,
  ChevronRight,
  Target,
  Wrench,
  TrendingUp,
  Send,
  MessageSquare,
  Clock,
  MapPin,
  Star,
  ShieldCheck
} from 'lucide-react';

// --- DATA ---

const articlesData = [
  {
    id: 'stop-being-bottleneck',
    title: 'How to Stop Being the Bottleneck in Your Handyman Business',
    excerpt:
      'If your business stops making money the second you take a day off, you do not own a business—you own a stressful job. Here is how to fix it.',
    category: 'Business Growth',
    date: 'March 2, 2026',
    readTime: '5 min read',
    content: (
      <>
        <p>
          Most local handyman businesses hit a wall right around the $250K to $500K mark.
          It’s not because the owner doesn&apos;t know how to do the work. It’s because the owner
          is doing <em>everything</em>.
        </p>
        <h2>The Trap of the &quot;Do-It-All&quot; Owner</h2>
        <p>
          When you first started, doing everything made sense. You answered the phone, drove
          to the house, gave the estimate, did the repair, and sent the invoice. But as you grow,
          this becomes your biggest weakness.
        </p>
        <p>
          Every missed call because you were under a sink is a lost job. Every estimate you
          forgot to follow up on because you were exhausted at 8 PM is lost revenue.
        </p>
        <h2>How to Break Free</h2>
        <p>
          To scale your home service business, you have to separate the <strong>field work</strong>{' '}
          from the <strong>office work</strong>. Here are the first three things you must delegate:
        </p>
        <ul>
          <li>
            <strong>Phone Answering:</strong> You need a dedicated person (or team) to answer calls
            live. Customers rarely leave voicemails; they just call the next handyman on Google.
          </li>
          <li>
            <strong>Scheduling and Dispatch:</strong> Your calendar should be managed by someone else,
            ensuring efficient routing and no missed appointments.
          </li>
          <li>
            <strong>Invoicing and Follow-ups:</strong> Sending quotes and following up should be a
            daily, automated habit, not something you do &quot;when you have time.&quot;
          </li>
        </ul>
        <p>
          By getting the back-office support you need, you stop being the bottleneck and start
          being the CEO of your growing company.
        </p>
      </>
    )
  },
  {
    id: 'cost-of-missed-calls',
    title: 'The True Cost of Missing Customer Calls in Home Services',
    excerpt:
      'Think missing a few calls a week is no big deal? Let’s do the math on how much revenue your handyman business is actually losing.',
    category: 'Customer Service',
    date: 'February 24, 2026',
    readTime: '4 min read',
    content: (
      <>
        <p>
          It happens every day. You are up on a ladder, your phone rings, and you let it go to
          voicemail. You tell yourself, &quot;I&apos;ll call them right back.&quot; But by the time you do,
          they’ve already hired someone else.
        </p>
        <h2>Let’s Do The Math</h2>
        <p>
          Let&apos;s say your average job is worth $500. If you miss just two calls a week that
          result in lost jobs, that’s $1,000 a week. Over a year, that is{' '}
          <strong>$52,000 in lost revenue</strong>—just from letting the phone ring.
        </p>
        <h2>The &quot;Speed to Lead&quot; Rule</h2>
        <p>
          In the home service and contractor industry, the company that answers the phone and
          books the appointment first wins 80% of the time. Homeowners with a broken door or a
          leaking pipe don&apos;t want to leave a message; they want an immediate solution.
        </p>
        <h2>Fixing the Problem</h2>
        <p>
          You cannot safely answer the phone while holding a power tool. The solution is
          investing in proper <strong>back-office support</strong>. Having a dedicated team answer
          your phones with a proven script not only captures those lost leads but makes your
          business look highly professional from the very first second.
        </p>
      </>
    )
  },
  {
    id: 'flat-rate-vs-hourly',
    title: 'Flat-Rate vs. Hourly Pricing: Which is Better for Your Growth?',
    excerpt:
      'Charging by the hour punishes you for being fast and efficient. Here is why switching to flat-rate pricing can instantly boost your profits.',
    category: 'Pricing Strategy',
    date: 'February 15, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p>
          One of the biggest debates among local contractors and handyman businesses is how to
          price their work. If you are still charging by the hour, you are likely leaving
          thousands of dollars on the table.
        </p>
        <h2>The Problem with Hourly Pricing</h2>
        <p>
          When you charge hourly, you are punishing yourself for your own experience. If a
          repair takes a beginner three hours, they make $300. If you are an expert and fix it in
          30 minutes, you make $50. That makes no sense.
        </p>
        <p>
          Furthermore, hourly pricing makes customers anxious. They hover over you, watching
          the clock, wondering how much the final bill will be.
        </p>
        <h2>The Power of Flat-Rate (Upfront) Pricing</h2>
        <p>Flat-rate pricing means you give the customer a fixed price for the job before you start. Here is why it works:</p>
        <ul>
          <li>
            <strong>Peace of Mind:</strong> The customer knows exactly what they will pay. No surprises.
          </li>
          <li>
            <strong>Reward for Speed:</strong> If you use your expertise to finish quickly, your hourly
            profit margin skyrockets.
          </li>
          <li>
            <strong>Higher Perceived Value:</strong> You are selling the <em>solution</em> to their problem,
            not your time.
          </li>
        </ul>
        <p>
          Switching to a flat-rate pricing model is one of the fastest ways to increase your
          revenue without working longer hours. It’s a core strategy we teach inside the Champion
          Partners coaching network.
        </p>
      </>
    )
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Custom Colors
  const brandDark = '#3D4C42';

  // SEO: Update Meta tags, Title, and JSON-LD Schema based on routing
  useEffect(() => {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://championservicepartners.com';

    let title = 'Champion Service Partners | Back-Office Support for Handyman Businesses';
    let desc =
      'Grow your local handyman business with our back-office support, answering service, scheduling, and business coaching. We help you scale past $500K.';
    let ogType = 'website';

    let schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Champion Service Partners',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        'Providing back-office support, call answering, bookkeeping, and coaching to local home service and handyman businesses.',
      areaServed: 'United States',
      knowsAbout: ['Handyman Business Growth', 'Contractor Dispatching', 'Home Service Bookkeeping']
    };

    if (currentView === 'about') {
      title = 'About Us | Champion Service Partners | Contractor Coaching';
      desc =
        'Learn how Champion Service Partners helps local contractors and handyman owners break free from the daily grind and scale their businesses with expert operational support.';
    } else if (currentView === 'services') {
      title = 'Our Services | Office Support & Coaching for Handymen';
      desc =
        'Explore our three lanes to growth: Business Coaching Network, Managed Office Support, and Equity Partnerships for home service businesses.';
    } else if (currentView === 'network') {
      title = 'The Champions Network | Handyman Coaching & Systems';
      desc =
        'Stop carrying the learning curve alone. Join the Champions Network for shared operational systems, KPI benchmarking, and peer support.';
    } else if (currentView === 'articles') {
      title = 'Articles & Resources | Grow Your Handyman Business';
      desc =
        'Read our latest tips, strategies, and guides on how to run a more profitable and organized local home service or handyman business.';
    } else if (currentView === 'contact') {
      title = 'Contact Us | Champion Service Partners';
      desc =
        'Get in touch with Champion Service Partners to learn how we can help your home service business grow with dedicated back-office support.';
    } else if (currentView === 'book') {
      title = 'Book a Call | Champion Service Partners';
      desc =
        'Schedule your free discovery call with Champion Service Partners and start scaling your handyman business today. No obligation, 100% confidential.';
    } else if (currentView === 'article' && activeArticleId) {
      const article = articlesData.find((a) => a.id === activeArticleId);
      if (article) {
        title = `${article.title} | Champion Service Partners`;
        desc = article.excerpt;
        ogType = 'article';
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          abstract: article.excerpt,
          datePublished: article.date,
          author: {
            '@type': 'Organization',
            name: 'Champion Service Partners'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Champion Service Partners',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.png`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': siteUrl
          }
        };
      }
    }

    document.title = title;

    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property')) {
          element.setAttribute('property', selector.match(/"([^"]+)"/)[1]);
        } else {
          element.setAttribute('name', selector.match(/"([^"]+)"/)[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMetaTag('meta[name="description"]', 'content', desc);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', desc);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', `${siteUrl}/logo.png`);
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', desc);
    setMetaTag('meta[name="twitter:image"]', 'content', `${siteUrl}/logo.png`);

    let scriptTag = document.getElementById('seo-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [currentView, activeArticleId]);

  // Scroll listener for sticky nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Helper
  const navigate = (view, articleId = null) => {
    setCurrentView(view);
    setActiveArticleId(articleId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900 flex flex-col">
      {/* --- NAVBAR --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 py-0 shadow-sm'
            : 'bg-slate-50 border-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center space-x-3 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate('home');
              }}
              aria-label="Champion Service Partners Home"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Champion Service Partners logo"
                  className="w-full h-full object-contain p-1"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">Champion</span>
                <span className="text-sm font-bold tracking-tight" style={{ color: brandDark }}>Service Partners</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8 font-semibold text-slate-600" aria-label="Main Navigation">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('home');
                }}
                className={`hover:text-amber-600 transition-colors ${currentView === 'home' ? 'text-amber-600' : ''}`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('about');
                }}
                className={`hover:text-amber-600 transition-colors ${currentView === 'about' ? 'text-amber-600' : ''}`}
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('services');
                }}
                className={`hover:text-amber-600 transition-colors ${currentView === 'services' ? 'text-amber-600' : ''}`}
              >
                Services
              </a>
              <a
                href="#network"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('network');
                }}
                className={`hover:text-amber-600 transition-colors ${currentView === 'network' ? 'text-amber-600' : ''}`}
              >
                The Network
              </a>
              <a
                href="#partners"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('partners');
                }}
                className={`hover:text-amber-600 transition-colors ${currentView === 'partners' ? 'text-amber-600' : ''}`}
              >
                Partners
              </a>
              <a
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('articles');
                }}
                className={`hover:text-amber-600 transition-colors ${
                  currentView === 'articles' || currentView === 'article' ? 'text-amber-600' : ''
                }`}
              >
                Articles
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('contact');
                }}
                className={`hover:text-amber-600 transition-colors ${currentView === 'contact' ? 'text-amber-600' : ''}`}
              >
                Contact
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('book');
                }}
                className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-600 transition-all shadow-sm inline-block"
              >
                Book a Free Chat
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 absolute w-full shadow-2xl">
            <nav className="px-4 pt-4 pb-8 flex flex-col space-y-2" aria-label="Mobile Navigation">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('home');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('about');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('services');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                Services
              </a>
              <a
                href="#network"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('network');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                The Network
              </a>
              <a
                href="#partners"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('partners');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                Partners
              </a>
              <a
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('articles');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                Articles
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('contact');
                }}
                className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50"
              >
                Contact
              </a>
              <hr className="border-slate-100 my-4 mx-4" />
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('book');
                }}
                className="mx-4 bg-amber-500 text-white px-6 py-4 rounded-xl font-bold text-lg text-center block hover:bg-amber-600"
              >
                Book a Free Chat
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT AREA (ROUTER) --- */}
      <main className="flex-grow pt-20">
        {currentView === 'home' && <HomeView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'about' && <AboutView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'services' && <ServicesView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'network' && <NetworkView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'partners' && <PartnersView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'articles' && <ArticlesView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'contact' && <ContactView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'book' && <BookView navigate={navigate} brandDark={brandDark} />}
        {currentView === 'article' && (
          <SingleArticleView
            articleId={activeArticleId}
            navigate={navigate}
            brandDark={brandDark}
          />
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer
        className="border-t pt-20 pb-10 text-white/70 mt-auto"
        style={{ backgroundColor: brandDark, borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a
                href="#home"
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('home');
                }}
                aria-label="Champion Service Partners Footer Logo"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Champion Service Partners logo"
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-extrabold tracking-tight text-white">Champion</span>
                  <span className="text-sm font-bold tracking-tight text-amber-500">Service Partners</span>
                </div>
              </a>
              <p className="font-medium mb-6 leading-relaxed">
                Back-office support, handyman answering services, and contractor coaching to help you
                grow your home service business safely.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-extrabold text-white text-lg mb-6">How We Help</h3>
              <ul className="space-y-4 font-medium">
                <li>
                  <a
                    href="#network"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('network');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Business Coaching Network
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('services');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contractor Office & Admin Support
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('services');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Funding & Partnership
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-extrabold text-white text-lg mb-6">Company</h3>
              <ul className="space-y-4 font-medium">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('about');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('partners');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Our Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#articles"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('articles');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Read Our Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('contact');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-extrabold text-white text-lg mb-6">Ready to grow?</h3>
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('book');
                }}
                className="bg-amber-500 text-white font-bold text-sm px-6 py-4 rounded-xl hover:bg-amber-600 transition-colors w-full mb-4 shadow-lg block text-center"
              >
                Book a Free Chat
              </a>
              <p className="text-sm">
                For local handyman businesses looking to scale without the stress of managing back-office
                administration.
              </p>
            </div>
          </div>

          <div
            className="border-t pt-8 flex flex-col md:flex-row justify-between items-center font-medium text-sm"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <p>&copy; {new Date().getFullYear()} Champion Service Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- VIEW COMPONENTS ---

function HomeView({ navigate, brandDark }) {
  const features = [
    {
      title: 'Answering the Phones',
      desc: 'We take your customer calls, book appointments, and handle questions using friendly, proven home service scripts.',
      icon: <Headphones className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Scheduling & Dispatch',
      desc: 'We manage your daily calendar so your team knows exactly where to go, and lucrative jobs stop falling through the cracks.',
      icon: <Users className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Bookkeeping & Invoicing',
      desc: 'We keep your finances clean and organized, so you get paid faster and actually trust your contractor business numbers.',
      icon: <Calculator className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'Following Up on Estimates',
      desc: 'We consistently check in on quotes you have sent out to help you win more jobs without the extra administrative effort.',
      icon: <FileText className="w-6 h-6 text-amber-600" />
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center px-4 py-2 rounded-full font-bold shadow-sm text-sm mb-6 border"
                style={{
                  backgroundColor: 'rgba(61, 76, 66, 0.1)',
                  color: brandDark,
                  borderColor: 'rgba(61, 76, 66, 0.2)'
                }}
              >
                For Local Handyman Businesses Making $250K - $2M
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Grow Your Handyman Business Without <span style={{ color: brandDark }}>Doing It All.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-medium">
                Get the back-office support, business coaching, and funding you need to scale your home service
                business. We handle the paperwork and phone calls so you can focus on making money.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('book');
                  }}
                  className="text-white font-bold text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center shadow-lg w-full sm:w-auto"
                  style={{ backgroundColor: brandDark, boxShadow: `0 10px 25px -5px rgba(61, 76, 66, 0.4)` }}
                >
                  Book a Free Discovery Call
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('services');
                  }}
                  className="bg-white text-slate-900 border-2 border-slate-200 font-bold text-lg px-8 py-4 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-center flex items-center justify-center"
                >
                  See How We Help
                </a>
              </div>
            </div>

            <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/handys-team.jpg"
                alt="Handy's Handyman Services team in front of their van"
                className="absolute inset-0 w-full h-full object-cover object-left"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(61, 76, 66, 0.85), rgba(61, 76, 66, 0.2), transparent)`
                }}
              />

              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: brandDark }}>
                  The Hard Truth
                </p>
                <p className="text-lg font-bold text-slate-900 leading-snug">
                  &quot;You are the dispatcher, estimator, and bookkeeper all at once. You can&apos;t grow if
                  you&apos;re stuck doing paperwork.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Does This Sound Like You?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              You know how to do the actual work. That was never the problem. The problem is everything
              else it takes to run a local home service business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-rose-50/50 border border-rose-100 rounded-[2rem] p-8 lg:p-12">
              <div className="inline-block bg-white text-rose-700 font-extrabold px-5 py-2 rounded-full text-sm mb-8 border border-rose-200 shadow-sm uppercase tracking-wide">
                The Problem • Doing It All Yourself
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
                Working 70 hours a week but the business isn&apos;t growing.
              </h3>
              <ul className="space-y-6">
                {[
                  'Hiring full-time office staff is expensive and feels too risky.',
                  "Your bookkeeping is a mess and you don't really know your profit.",
                  'Missed calls mean missed jobs. Customers slip through the cracks.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <XCircle className="w-6 h-6 text-rose-500 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="border rounded-[2rem] p-8 lg:p-12"
              style={{ backgroundColor: 'rgba(61, 76, 66, 0.05)', borderColor: 'rgba(61, 76, 66, 0.15)' }}
            >
              <div
                className="inline-block bg-white font-extrabold px-5 py-2 rounded-full text-sm mb-8 border shadow-sm uppercase tracking-wide"
                style={{ color: brandDark, borderColor: 'rgba(61, 76, 66, 0.2)' }}
              >
                The Solution • A Business That Runs Itself
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
                A clean, organized business that lets you scale up.
              </h3>
              <ul className="space-y-6">
                {[
                  'Your back-office is handled: phones, scheduling, and follow-ups.',
                  'One affordable team does the work of five expensive hires.',
                  'Your time is finally freed up to hire more techs and add trucks.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 mr-4 flex-shrink-0 mt-0.5" style={{ color: brandDark }} />
                    <span className="text-slate-700 font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                We Don&apos;t Just Give Advice. <br />
                <span style={{ color: brandDark }}>We Do The Office Work.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                We give you a complete office team without the headache of hiring, training, and managing
                employees yourself.
              </p>
            </div>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                navigate('services');
              }}
              className="mt-6 md:mt-0 font-bold text-lg flex items-center transition-colors hover:text-amber-600"
              style={{ color: brandDark }}
            >
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border"
                  style={{ backgroundColor: 'rgba(61, 76, 66, 0.05)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
                >
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h4>
                <p className="text-slate-600 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Teaser */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-slate-600 font-medium">Tips to grow your handyman business.</p>
            </div>
            <a
              href="#articles"
              onClick={(e) => {
                e.preventDefault();
                navigate('articles');
              }}
              className="hidden sm:flex font-bold text-lg items-center transition-colors hover:text-amber-600"
              style={{ color: brandDark }}
            >
              Read all articles <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articlesData.slice(0, 3).map((article) => (
              <a
                href={`#article-${article.id}`}
                key={article.id}
                className="group cursor-pointer flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('article', article.id);
                }}
              >
                <div className="p-8 flex-grow">
                  <div className="text-sm font-bold mb-3 uppercase tracking-wide" style={{ color: brandDark }}>
                    {article.category}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 transition-colors group-hover:text-amber-600">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">{article.excerpt}</p>
                </div>
                <div className="px-8 pb-8 mt-auto flex items-center font-bold" style={{ color: brandDark }}>
                  Read Article <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </a>
            ))}
          </div>
          <a
            href="#articles"
            onClick={(e) => {
              e.preventDefault();
              navigate('articles');
            }}
            className="w-full sm:hidden mt-8 bg-slate-100 text-slate-900 font-bold text-lg py-4 rounded-xl flex justify-center items-center hover:bg-slate-200 transition-colors"
          >
            Read all articles <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24" style={{ backgroundColor: brandDark }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Stop letting paperwork slow you down.
          </h2>
          <p className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            100% confidential conversations. No obligation to buy anything. Just business owners talking to
            business owners.
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              navigate('book');
            }}
            className="bg-amber-500 text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-amber-600 transition-colors shadow-2xl inline-flex items-center justify-center"
          >
            Book your Free Chat Today <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}

function AboutView({ navigate, brandDark }) {
  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full font-bold text-sm mb-6 border uppercase tracking-wider"
          style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)', color: brandDark, borderColor: 'rgba(61, 76, 66, 0.2)' }}
        >
          Our Story
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
          We Built Champion Service Partners Because We&apos;ve Been In Your Boots.
        </h1>

        <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
          <p className="text-2xl text-slate-800 font-semibold mb-8">
            Running a local home service business is supposed to give you freedom. Instead, for most owners,
            it becomes a 70-hour-a-week trap.
          </p>

          <p className="mb-6">
            We started Champion Service Partners because we watched too many incredibly talented contractors, plumbers,
            and handyman business owners burn out. They knew their trade perfectly, but they were drowning in
            missed calls, scattered estimates, and messy bookkeeping.
          </p>

          <p className="mb-10">
            You can&apos;t swing a hammer and safely answer a ringing phone at the same time. You can&apos;t do a full
            day&apos;s work and then accurately do accounting at 9:00 PM. Yet, that is what the industry expects you
            to do.
          </p>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 mt-12">Our Philosophy: Operators First.</h2>

          <div
            className="p-8 rounded-3xl border mb-10"
            style={{ backgroundColor: 'rgba(61, 76, 66, 0.03)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
          >
            <p className="mb-0 text-slate-700">
              We are not a franchise trying to steal your brand name. We are not a software company selling you
              another app you don&apos;t have time to learn. We are an operational partner.
            </p>
          </div>

          <p className="mb-6">
            We provide the infrastructure—the actual people answering the phones, the actual bookkeeping, the
            actual scheduling—so that you can focus on leading your team, ensuring quality, and growing your
            revenue.
          </p>

          <p className="mb-12">
            Whether you need a coaching community to point you in the right direction, a full back-office team to
            take over your admin, or an equity partner to help you buy more trucks, we have a lane built
            specifically for you.
          </p>

          <hr className="border-slate-200 mb-12" />

          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Our Mission</h2>
          <p className="mb-12">
            To help 1,000 local handyman and contractor business owners transition from overworked operators into
            wealthy, free business owners. We do this by providing the back-office support and systems they need
            to scale past their own physical limitations.
          </p>
        </div>

        <div className="mt-16 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl" style={{ backgroundColor: brandDark }}>
          <h3 className="text-3xl font-extrabold mb-6">Ready to stop doing it all yourself?</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free, 30-minute discovery call. No pressure, no sales pitch. Just a conversation about where
            your business is losing time and money.
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              navigate('book');
            }}
            className="bg-amber-500 text-white font-bold text-xl px-10 py-4 rounded-xl hover:bg-amber-600 transition-colors shadow-lg inline-block"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </div>
  );
}

function ServicesView({ navigate, brandDark }) {
  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">Three Ways We Help You Grow</h1>
          <p className="text-xl text-slate-600 font-medium">
            We don&apos;t just sell you an online course. We offer three different levels of partnership to fit
            exactly what your home service business needs right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lane 1 */}
          <div className="bg-white rounded-[2rem] p-10 border border-slate-200 flex flex-col hover:shadow-xl transition-all">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border"
              style={{ backgroundColor: 'rgba(61, 76, 66, 0.05)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
            >
              <BookOpen className="w-8 h-8" style={{ color: brandDark }} />
            </div>
            <div className="font-extrabold text-sm uppercase tracking-widest mb-2" style={{ color: brandDark }}>
              Option 1
            </div>
            <h3 className="text-3xl font-extrabold mb-2 text-slate-900">The Champion Network</h3>
            <p className="text-slate-800 font-bold mb-4">Business Coaching & Community</p>
            <p className="text-slate-600 text-lg mb-8 flex-grow">
              Stop guessing. Join a group of successful handyman owners. We give you our proven guides for
              pricing, hiring, and organizing, plus weekly calls to keep you on track.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-slate-700 font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> Ready-to-use business
                guides & SOPs
              </li>
              <li className="flex items-start text-slate-700 font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> See how your financial
                numbers compare
              </li>
              <li className="flex items-start text-slate-700 font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> Weekly coaching and
                accountability advice
              </li>
              <li className="flex items-start text-slate-700 font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> Deep discounts on
                contractor tools and software
              </li>
            </ul>
            <a
              href="#network"
              onClick={(e) => {
                e.preventDefault();
                navigate('network');
              }}
              className="w-full text-center border-2 border-slate-200 text-slate-800 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors inline-block"
            >
              Learn More About The Network
            </a>
          </div>

          {/* Lane 2 */}
          <div
            className="rounded-[2rem] p-10 border flex flex-col relative transform lg:-translate-y-4 shadow-2xl"
            style={{ backgroundColor: brandDark, borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-extrabold uppercase tracking-widest shadow-md">
              Most Popular
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <Headphones className="w-8 h-8 text-amber-400" />
            </div>
            <div className="text-amber-400 font-extrabold text-sm uppercase tracking-widest mb-2">Option 2</div>
            <h3 className="text-3xl font-extrabold mb-2 text-white">Office Support</h3>
            <p className="text-white/80 font-bold mb-4">We Handle The Daily Grind</p>
            <p className="text-white/90 text-lg mb-8 flex-grow">
              Hand your entire office over to us. We answer your phones, schedule your jobs, and do the
              bookkeeping so you can finally focus on making money and growing.
            </p>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" /> Live phone answering & booking
                jobs
              </li>
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" /> Relentless follow-up on
                outstanding estimates
              </li>
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" /> Complete invoicing, billing,
                and bookkeeping
              </li>
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" /> Help interviewing and hiring
                good technicians
              </li>
            </ul>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                navigate('book');
              }}
              className="w-full text-center bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-amber-600 transition-colors shadow-lg inline-block"
            >
              Get Full Support
            </a>
          </div>

          {/* Lane 3 */}
          <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 flex flex-col hover:border-slate-700 transition-all shadow-xl">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
              <TrendingUp className="w-8 h-8 text-amber-500" />
            </div>
            <div className="text-amber-500 font-extrabold text-sm uppercase tracking-widest mb-2">Option 3</div>
            <h3 className="text-3xl font-extrabold mb-2 text-white">Equity Partnership</h3>
            <p className="text-slate-300 font-bold mb-4">Funding & Platform Ownership</p>
            <p className="text-slate-400 text-lg mb-8 flex-grow">
              For the right operators, managed operations is just the beginning. Champion invests in scaling your business, and you gain ownership in the platform itself.
            </p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> Cash to grow without
                personal bank loans
              </li>
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> We take on the
                financial risk of scaling
              </li>
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> Defined valuation and exit terms locked in upfront
              </li>
              <li className="flex items-start font-medium">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: brandDark }} /> Share in the entire
                network&apos;s financial success
              </li>
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('contact');
              }}
              className="w-full text-center border border-slate-700 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors inline-block"
            >
              Apply for Partnership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkView({ navigate, brandDark }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Operational Systems',
      desc: 'Proven workflows for dispatch, estimating, pricing, job costing, and closeout. Implementation playbooks and templates built from real operator experience with role-based procedures for office and field teams.',
      icon: <Briefcase className="w-6 h-6" style={{ color: brandDark }} />
    },
    {
      title: 'Performance Benchmarking',
      desc: 'KPI tracking standards across revenue, close rate, average ticket, and labor efficiency. Compare your performance against other operators in the network to identify blind spots before they become expensive problems.',
      icon: <LineChart className="w-6 h-6" style={{ color: brandDark }} />
    },
    {
      title: 'Peer Operator Environment',
      desc: 'Weekly problem-solving calls with operators running real companies. Role-specific sessions for owners, dispatchers, and estimators focused on real operational conversations — not theory or motivation.',
      icon: <Users className="w-6 h-6" style={{ color: brandDark }} />
    },
    {
      title: 'Vendor & Resource Advantages',
      desc: 'Preferred vendor relationships negotiated across the network. Tools configured with best-practice setups so you skip the trial-and-error, plus reduced software adoption friction with guided implementation.',
      icon: <Wrench className="w-6 h-6" style={{ color: brandDark }} />
    },
    {
      title: 'Training & Accountability',
      desc: "Structured growth roadmap tailored to your company's stage. Hiring and training frameworks that reduce turnover, paired with ongoing operational reviews and measurable milestones.",
      icon: <Target className="w-6 h-6" style={{ color: brandDark }} />
    },
    {
      title: 'Annual In-Person Summit',
      desc: 'Member summit with operators from across the network. Hands-on operational workshops on the topics that matter most, facilitating deep peer collaboration and relationship building in person.',
      icon: <MapPin className="w-6 h-6" style={{ color: brandDark }} />
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen pb-20">
      {/* Hero */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 text-center text-white" style={{ backgroundColor: brandDark }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full font-bold shadow-sm text-sm mb-8 border border-white/20 bg-white/10 uppercase tracking-wider text-amber-400">
            The Champions Network
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">Stop Carrying the Learning Curve Alone.</h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl mx-auto">
            A network is a group of companies choosing to run the same direction — operating inside shared infrastructure instead of personal trial-and-error.
          </p>
        </div>
      </section>

      {/* Why a Network Works */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">Why a Network Works</h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-slate-700 font-medium leading-relaxed">
            <div>
              <p className="mb-6">
                Alone, every lesson costs you money. In a network, one lesson improves everyone. When one company refines how they answer phones, everyone improves booking. When one company figures out better job scoping, everyone avoids the same underbids.
              </p>
              <p>
                Better pricing comes from shared volume. Better operations come from shared systems. Better decisions come from shared data collected across multiple businesses — not one memory bank.
              </p>
            </div>
            <div>
              <div className="p-8 rounded-3xl border" style={{ backgroundColor: 'rgba(61, 76, 66, 0.05)', borderColor: 'rgba(61, 76, 66, 0.1)' }}>
                <p className="font-semibold text-slate-900 mb-4 text-xl">
                  HVAC, plumbing, and electrical companies have organized this way for over a decade. Now it&apos;s the handyman industry&apos;s turn.
                </p>
                <p className="text-slate-700">You still run your business. You just stop carrying the entire learning curve by yourself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Members Get */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">What Members Get</h2>
            <p className="text-xl text-slate-600 font-medium">Every component of the network is designed to create operational clarity — not information overload.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border"
                  style={{ backgroundColor: 'rgba(61, 76, 66, 0.05)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
                >
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-[2rem] p-12 md:p-16 text-center text-white shadow-2xl" style={{ backgroundColor: brandDark }}>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Operate at a Higher Standard?</h3>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
            Let&apos;s talk about where your business stands and whether the Champions Network is the right fit. No pitch — just a real conversation between operators.
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              navigate('book');
            }}
            className="bg-amber-500 text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-amber-600 transition-colors shadow-lg inline-flex items-center justify-center"
          >
            Book a Free Chat <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}



function PartnersView({ navigate, brandDark }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full font-bold shadow-sm text-sm mb-6 border uppercase tracking-wider"
            style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)', color: brandDark, borderColor: 'rgba(61, 76, 66, 0.2)' }}
          >
            Our Network
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Companies We Partner With
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Champion Service Partners teams up with independent handyman businesses across different markets — each with its own identity, history, and customer base.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:pr-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-slate-500 font-semibold mb-6">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Salt Lake City, UT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Handy's Handyman Services</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                A premier handyman service built on trust, quality craftsmanship, and exceptional customer care. Handy's represents the kind of operator-driven business Champion Service Partners teams up with.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div
                  className="p-6 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(61, 76, 66, 0.03)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
                >
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Starting Revenue</p>
                  <p className="text-3xl font-extrabold" style={{ color: brandDark }}>$345K</p>
                </div>
                <div
                  className="p-6 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(61, 76, 66, 0.03)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
                >
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Current Revenue</p>
                  <p className="text-3xl font-extrabold text-green-600">$1.2M</p>
                </div>
                <div
                  className="p-6 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(61, 76, 66, 0.03)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
                >
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Established</p>
                  <p className="text-3xl font-extrabold text-slate-900">2024</p>
                </div>
                <div
                  className="p-6 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(61, 76, 66, 0.03)', borderColor: 'rgba(61, 76, 66, 0.1)' }}
                >
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">5-Star Reviews</p>
                  <p className="text-3xl font-extrabold text-slate-900 flex items-center">
                    300+ <Star className="w-6 h-6 text-amber-500 fill-current ml-2" />
                  </p>
                </div>
              </div>
            </div>

            <div className="relative" style={{ backgroundColor: brandDark }}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}
              ></div>
              <div className="h-full w-full flex flex-col justify-center p-10 md:p-16 text-white relative z-10">
                <h3 className="text-2xl font-extrabold mb-8 text-amber-400">What our partners share:</h3>
                <ul className="space-y-6 text-lg font-medium">
                  <li className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 border border-white/20">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                    Pride in their work
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 border border-white/20">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                    Commitment to service
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 border border-white/20">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                    Desire to build something sustainable
                  </li>
                </ul>

                <div className="mt-12 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <p className="text-xl font-bold leading-snug">
                    These companies remain local.<br />
                    <span className="text-amber-400">Champion Service Partners provides the structure behind the scenes.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ArticlesView({ navigate, brandDark }) {
  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">Contractor Growth Hub</h1>
          <p className="text-xl text-slate-600 font-medium">
            Guides, strategies, and resources designed specifically to help local handyman and home service businesses scale, increase profits, and reduce owner stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <a
              href={`#article-${article.id}`}
              key={article.id}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                navigate('article', article.id);
              }}
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)', color: brandDark }}
                  >
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4 transition-colors leading-tight group-hover:text-amber-600">
                  {article.title}
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">{article.excerpt}</p>
              </div>
              <div className="px-8 pb-8 mt-auto flex justify-between items-center border-t border-slate-50 pt-6">
                <span className="text-sm text-slate-500 font-medium">{article.date}</span>
                <span className="flex items-center font-bold group-hover:translate-x-1 transition-transform" style={{ color: brandDark }}>
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleArticleView({ articleId, navigate, brandDark }) {
  const article = articlesData.find((a) => a.id === articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h2>
          <a
            href="#articles"
            onClick={(e) => {
              e.preventDefault();
              navigate('articles');
            }}
            className="font-bold hover:underline"
            style={{ color: brandDark }}
          >
            &larr; Back to all articles
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <a
          href="#articles"
          onClick={(e) => {
            e.preventDefault();
            navigate('articles');
          }}
          className="inline-flex items-center font-bold transition-colors mb-10 opacity-80 hover:opacity-100"
          style={{ color: brandDark }}
        >
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Back to Articles
        </a>

        <header className="mb-12 border-b border-slate-200 pb-10">
          <div className="flex items-center space-x-4 mb-6">
            <span
              className="text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)', color: brandDark }}
            >
              {article.category}
            </span>
            <span className="text-sm text-slate-500 font-medium">{article.date}</span>
            <span className="text-sm text-slate-500 font-medium hidden sm:inline">•</span>
            <span className="text-sm text-slate-500 font-medium hidden sm:inline">{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {article.title}
          </h1>
        </header>

        <article className="prose prose-lg prose-slate prose-headings:font-extrabold prose-headings:text-slate-900 max-w-none text-slate-700 font-medium leading-relaxed">
          <style>{`
            article a { color: ${brandDark}; text-decoration: underline; font-weight: 700; }
            article li::marker { color: ${brandDark}; font-weight: 900; }
          `}</style>
          {article.content}
        </article>

        <div className="mt-20 rounded-3xl p-10 text-center border border-slate-200" style={{ backgroundColor: 'rgba(61, 76, 66, 0.02)' }}>
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg bg-white border border-slate-200 overflow-hidden"
            style={{ boxShadow: `0 10px 15px -3px rgba(61, 76, 66, 0.18)` }}
          >
            <img src="/logo.png" alt="Champion Service Partners logo" className="w-full h-full object-contain p-2" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Want to implement these strategies?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Our back-office team and coaching network helps local handyman businesses scale past $500K without the owner doing it all.
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              navigate('book');
            }}
            className="text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-md inline-block hover:opacity-90"
            style={{ backgroundColor: brandDark }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactView({ navigate, brandDark }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('https://formsubmit.co/ajax/olorvidabianca@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Contact Information */}
          <div className="max-w-xl">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full font-bold shadow-sm text-sm mb-6 border uppercase tracking-wider"
              style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)', color: brandDark, borderColor: 'rgba(61, 76, 66, 0.2)' }}
            >
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Let&apos;s Discuss Your Business Growth.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Ready to hand off your back-office and start scaling? Send us a message or book a discovery call to see if Champion Service Partners is the right fit for your handyman business.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm mr-5 flex-shrink-0">
                  <MessageSquare className="w-6 h-6" style={{ color: brandDark }} />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-1">Book a Free Call</h4>
                  <p className="text-slate-600 font-medium mb-3">Skip the form and talk to an operator today.</p>
                  <a
                    href="#book"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('book');
                    }}
                    className="font-bold transition-colors flex items-center opacity-90 hover:opacity-100"
                    style={{ color: brandDark }}
                  >
                    View Calendar <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Container */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-200">
            {status === 'success' ? (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)' }}>
                  <CheckCircle2 className="w-10 h-10" style={{ color: brandDark }} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-lg text-slate-600 font-medium mb-8">Thank you for reaching out. We have received your message and will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="font-bold hover:underline" style={{ color: brandDark }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Send us a Message</h3>

                {status === 'error' && (
                  <div className="bg-rose-50 text-rose-700 p-4 rounded-xl text-sm font-bold border border-rose-200">
                    Oops! There was a problem sending your message. Please try again or email us directly.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 outline-none transition-all font-medium text-slate-900"
                      style={{ '--tw-ring-color': brandDark }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 outline-none transition-all font-medium text-slate-900"
                      style={{ '--tw-ring-color': brandDark }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 outline-none transition-all font-medium text-slate-900"
                    style={{ '--tw-ring-color': brandDark }}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700">
                    How can we help you grow?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 outline-none transition-all font-medium text-slate-900 resize-none"
                    style={{ '--tw-ring-color': brandDark }}
                    placeholder="Tell us a little about your business and where you're currently stuck..."
                  />
                </div>

                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-md flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ backgroundColor: brandDark }}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BookView({ brandDark }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full font-bold shadow-sm text-sm mb-6 border uppercase tracking-wider"
            style={{ backgroundColor: 'rgba(61, 76, 66, 0.1)', color: brandDark, borderColor: 'rgba(61, 76, 66, 0.2)' }}
          >
            Free Consultation
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Book Your Discovery Call</h1>
          <p className="text-xl text-slate-600 font-medium mb-8">Choose a time that works for you. Let&apos;s discuss how we can help your business grow and give you your time back.</p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 bg-white py-5 px-8 rounded-2xl shadow-sm border border-slate-200 mb-8 inline-flex">
            <div className="flex items-center text-slate-700 font-bold text-lg">
              <Clock className="w-5 h-5 mr-2.5 flex-shrink-0" style={{ color: brandDark }} />
              <span>30-Minute Call</span>
            </div>
            <div className="flex items-center text-slate-700 font-bold text-lg">
              <Users className="w-5 h-5 mr-2.5 flex-shrink-0" style={{ color: brandDark }} />
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center text-slate-700 font-bold text-lg">
              <ShieldCheck className="w-5 h-5 mr-2.5 flex-shrink-0" style={{ color: brandDark }} />
              <span>No Commitment Required</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden w-full h-[700px]">
          <iframe
            src="https://calendly.com/tim-handyshome/30min?month=2026-03&date=2026-03-16&embed_domain=championservicepartners.com&embed_type=Inline"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Scheduling"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
