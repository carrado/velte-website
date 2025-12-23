import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, Globe, Shield, Zap, Target, Users, CreditCard, Calendar, 
  MapPin, TrendingUp, Award, ChevronRight, Sparkles, Globe as GlobeIcon,
  Building, Users as UsersIcon, Award as AwardIcon, ArrowRight
} from "lucide-react";

const AboutUsPage = () => {
  const [activeContinent, setActiveContinent] = useState("Africa");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const principles = [
    { icon: <Target />, text: "User-Centered Innovation", desc: "Designing for real people with intuitive experiences" },
    { icon: <Shield />, text: "Trust & Security First", desc: "Enterprise-grade security protecting every transaction" },
    { icon: <Globe />, text: "Globally Accessible", desc: "Localized solutions with worldwide compatibility" },
    { icon: <Zap />, text: "Simplified Complexity", desc: "Turning complex workflows into seamless experiences" }
  ];

  const features = [
    { 
      icon: <Calendar />, 
      title: "Unified Event Platform", 
      text: "End-to-end event management, promotion, and analytics through one integrated dashboard with global compatibility.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      icon: <Users />, 
      title: "Global Vendor Network", 
      text: "Connect with verified professionals worldwide through our secure marketplace and intelligent matching system.",
      image: "https://res.cloudinary.com/dbhpul04t/image/upload/v1766489534/businesswomen-talking-each-other_xwhpku.jpg"
    },
    { 
      icon: <CreditCard />, 
      title: "Secure Payment Ecosystem", 
      text: "Multi-currency transactions, digital ticketing, and transparent financial operations across borders.",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const marketStories = [
    { 
      continent: "Africa", 
      description: "Rapidly growing event economies", 
      focus: "Mobile-first innovation & community-driven experiences", 
      icon: "🌍",
      highlights: "Digital adoption acceleration, cultural festivals, community celebrations",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-orange-500 to-amber-500"
    },
    { 
      continent: "North America", 
      description: "Mature enterprise event markets", 
      focus: "Advanced integrations & sophisticated business workflows", 
      icon: "🗽",
      highlights: "Tech conferences, corporate summits, professional networking",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      continent: "Asia", 
      description: "Mass-scale digital transformation", 
      focus: "High-volume optimization & cultural customization", 
      icon: "🗾",
      highlights: "Cultural festivals, mass gatherings, rapid tech adoption",
      image: "https://res.cloudinary.com/dbhpul04t/image/upload/v1766489534/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_fl6tqd.jpg",
      color: "from-red-500 to-pink-500"
    },
    { 
      continent: "Europe", 
      description: "Established business event standards", 
      focus: "Compliance, precision, & sustainable event practices", 
      icon: "🏛️",
      highlights: "International conferences, trade shows, cultural exhibitions",
      image: "https://res.cloudinary.com/dbhpul04t/image/upload/v1766489535/diverse-business-people-dinner-party_p3gkux.jpg",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      continent: "Latin America", 
      description: "Vibrant community event culture", 
      focus: "Social connectivity & celebratory experiences", 
      icon: "💃",
      highlights: "Festivals, family celebrations, community gatherings",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-purple-500 to-fuchsia-500"
    },
    { 
      continent: "Oceania", 
      description: "Premium experiential events", 
      focus: "Destination events & boutique experiences", 
      icon: "🌊",
      highlights: "Destination weddings, luxury retreats, outdoor festivals",
      image: "https://res.cloudinary.com/dbhpul04t/image/upload/v1766426064/rose-petals-cover-green-garden-ready-traditional-hindu-weddi_ep300e.jpg",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const selectedContinent = marketStories.find(m => m.continent === activeContinent);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Hero Section with Background Video/Image */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 md:pb-32">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-amber-500/15 to-yellow-400/10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">Global Event Infrastructure</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              The Universal Platform for
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Event Excellence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Seamlessly connect creators, vendors, and attendees worldwide through intelligent
              infrastructure designed for every event culture and scale.
            </motion.p>

            {/* Stats
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: "50+", label: "Countries", icon: <GlobeIcon className="w-5 h-5" /> },
                { value: "10K+", label: "Events", icon: <Calendar className="w-5 h-5" /> },
                { value: "5K+", label: "Vendors", icon: <UsersIcon className="w-5 h-5" /> },
                { value: "99.9%", label: "Uptime", icon: <AwardIcon className="w-5 h-5" /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-orange-500 mb-1">
                    {stat.icon}
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Problem Section with Split Layout */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Problem Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-red-50 rounded-full">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="font-semibold text-red-600">The Global Challenge</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Event Management's <span className="text-red-500">Universal Fragmentation</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Disconnected tools creating operational silos across markets",
                  "Inconsistent payment systems lacking cross-border compatibility",
                  "Localized solutions failing to scale for global organizers",
                  "Fragmented attendee experiences damaging brand consistency"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <p className="text-gray-700 flex-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-100 rounded-3xl p-8 md:p-10">
                  <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-orange-100 rounded-full">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold text-orange-600">Our Integrated Solution</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                    Unified Platform, <span className="text-orange-600">Global Impact</span>
                  </h3>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Velte bridges geographical and technological divides with intelligent
                    infrastructure that adapts locally while connecting globally. From enterprise
                    conferences in New York to community festivals in Lagos.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Global Payments", value: "Multi-currency" },
                      { label: "Local Adaptation", value: "Cultural Fit" },
                      { label: "Unified Analytics", value: "Real-time Insights" },
                      { label: "Secure Transactions", value: "Bank-level Security" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/80 p-4 rounded-xl">
                        <div className="text-sm text-gray-600">{item.label}</div>
                        <div className="font-semibold text-gray-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-amber-50 rounded-full">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="font-semibold text-amber-600">Platform Capabilities</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Complete <span className="text-orange-500">Event Ecosystem</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and scale events globally
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      i === 0 ? 'from-orange-500/20 to-transparent' :
                      i === 1 ? 'from-blue-500/20 to-transparent' :
                      'from-amber-500/20 to-transparent'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`inline-flex items-center gap-3 p-3 rounded-xl mb-6 ${
                    i === 0 ? 'bg-orange-100' : i === 1 ? 'bg-blue-100' : 'bg-amber-100'
                  }`}>
                    <div className={`p-3 rounded-lg ${
                      i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-blue-500' : 'bg-amber-500'
                    }`}>
                      {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <span className={`font-semibold ${
                      i === 0 ? 'text-orange-700' : i === 1 ? 'text-blue-700' : 'text-amber-700'
                    }`}>
                      Feature {i + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {feature.text}
                  </p>
                  
                  <div className="flex items-center gap-2 text-orange-600 font-semibold">
                    <span>Explore Feature</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Interactive Map */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-amber-50 rounded-full">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span className="font-semibold text-amber-600">Global Presence</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Serving <span className="text-amber-600">Every Continent</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Locally adapted solutions with global connectivity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Continent Selector */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 border border-gray-200 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Select Continent</h3>
                <div className="space-y-3">
                  {marketStories.map((market) => (
                    <button
                      key={market.continent}
                      onClick={() => setActiveContinent(market.continent)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                        activeContinent === market.continent
                          ? 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-3xl">{market.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{market.continent}</div>
                        <div className="text-sm text-gray-600 mt-1">{market.description}</div>
                      </div>
                      {activeContinent === market.continent && (
                        <ChevronRight className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Continent Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedContinent.continent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200"
                >
                  {/* Continent Header */}
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${selectedContinent.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="text-5xl mb-2">{selectedContinent.icon}</div>
                      <h3 className="text-3xl font-bold text-white">{selectedContinent.continent}</h3>
                    </div>
                  </div>

                  {/* Continent Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">Market Focus</h4>
                        <p className="text-gray-700 leading-relaxed">{selectedContinent.focus}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">Key Highlights</h4>
                        <ul className="space-y-2">
                          {selectedContinent.highlights.split(', ').map((highlight, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              <div className="w-2 h-2 rounded-full bg-orange-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { label: "Market Size", value: "Growing" },
                        { label: "Adoption Rate", value: "High" },
                        { label: "Event Types", value: "Diverse" },
                        { label: "Local Partners", value: "50+" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-orange-500">Guiding Principles</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The foundation of everything we build at Velte
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-200 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(principle.icon, { className: "w-7 h-7 text-white" })}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{principle.text}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-dd23140edf6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-yellow-200">Event Experience</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of creators, vendors, and attendees already revolutionizing
              their events with Velte's global platform.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <span>Start Free Trial</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
                Schedule a Demo
              </button>
            </motion.div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm font-medium">
                TRUSTED BY INDUSTRY LEADERS • ENTERPRISE-GRADE SECURITY • 24/7 GLOBAL SUPPORT
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;