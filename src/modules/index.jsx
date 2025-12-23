import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Event background images (optimized URLs from Unsplash/Cloudinary)
  const eventImages = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Wedding event
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80", // Conference
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Concert
    "https://res.cloudinary.com/dbhpul04t/image/upload/v1766426064/rose-petals-cover-green-garden-ready-traditional-hindu-weddi_ep300e.jpg", // Corporate event
    "https://res.cloudinary.com/dbhpul04t/image/upload/v1766425842/decorated-banquet-hall-with-flowers_bo1oto.jpg", // Festival
  ];

  const problemSolutionImages = [
    "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Vendor market
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Event planning
  ];

  const carouselInterval = useRef(null);

  useEffect(() => {
    // Auto-rotate carousel
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    }, 5000);

    return () => {
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
      carouselInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % eventImages.length);
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-100/20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* HERO SECTION WITH CAROUSEL */}
      <section ref={heroRef} className="relative overflow-hidden pt-24 pb-32 h-screen min-h-[800px] flex items-center">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {eventImages.map((img, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-amber-400/10" />
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  resetInterval();
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/70'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-full absolute top-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative group">
              <motion.img
                src="https://res.cloudinary.com/dbhpul04t/image/upload/v1766001844/velte_ijulb7ijulb7ijul-removebg-preview_h3d6xw.png"
                alt="Velte Platform Logo"
                className="w-44 md:w-52 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl"
            >
              The Comprehensive Platform for
              <motion.span 
                className="block mt-4 bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200 bg-clip-text text-transparent"
                whileInView={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Events, Vendors & Tickets
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-lg max-w-3xl mx-auto"
            >
              Streamline event planning, connect with verified vendors, 
              manage ticket sales, and coordinate all aspects of your event 
              through one integrated marketplace platform.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all backdrop-blur-sm"
              >
                Create an Event
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#fbbf24",
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                Join as a Vendor
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section ref={featuresRef} className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed for Every Stakeholder in the <span className="text-orange-500">Event Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unified platform that serves all participants in the event industry
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Event Organizers & Planners",
                text: "Design, publish, and manage complete events with integrated vendor coordination, ticket management, and real-time analytics from a centralized dashboard.",
                icon: "🎯",
                bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
              },
              {
                title: "Event Service Vendors",
                text: "Showcase your services to a targeted audience, receive qualified bookings, manage schedules efficiently, and process secure payments through our verified system.",
                icon: "🤝",
                bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Event Attendees & Guests",
                text: "Discover curated events, purchase tickets seamlessly, and enjoy enhanced event experiences with simplified access and management features.",
                icon: "🎟️",
                bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)"
                }}
                className="group relative p-10 rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm hover:border-orange-200 transition-all duration-300 overflow-hidden"
              >
                {/* Card Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-gray-800 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Problem Side Background */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${problemSolutionImages[0]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 to-transparent" />
        </div>

        {/* Solution Side Background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${problemSolutionImages[1]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-50/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-red-50 rounded-full">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="font-semibold text-red-600">Industry Challenge</span>
              </div>
              <h2 className="text-4xl font-bold mb-8">
                The Fragmented Nature of <span className="text-red-500">Event Management</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "Vendor sourcing through fragmented channels like WhatsApp and personal referrals",
                  "Disconnected payment systems lacking security and transparency",
                  "Inefficient event coordination leading to communication gaps and operational delays",
                  "Limited tracking capabilities for event performance and attendee engagement"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-lg text-gray-700"
                  >
                    <span className="text-2xl mt-1">❌</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-emerald-100">
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-emerald-50 rounded-full">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <span className="font-semibold text-emerald-600">Velte Solution</span>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-emerald-700">
                  Our Integrated Platform <span className="text-orange-500">Transforms</span> Event Execution
                </h3>
                <ul className="space-y-6">
                  {[
                    "Centralized vendor marketplace with verified profiles and transparent reviews",
                    "Secure, integrated payment processing with escrow protection for all transactions",
                    "Comprehensive dashboard suite providing real-time insights and coordination tools",
                    "End-to-end event lifecycle management from planning to post-event analytics"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 text-lg text-gray-700"
                    >
                      <span className="text-2xl text-emerald-500 mt-1">✔</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-10 pt-8 border-t border-gray-100"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-sm font-semibold text-gray-500">
                    COMPREHENSIVE EVENT MANAGEMENT PLATFORM
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-orange-500">Velte Process</span>: Streamlined Event Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three intuitive steps to transform your event planning experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400/30 via-amber-400/30 to-yellow-400/30 transform -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Event Creation & Discovery",
                  text: "Organizers publish comprehensive event profiles while attendees explore curated events through intelligent discovery features.",
                  color: "from-orange-400 to-amber-400",
                  bgImage: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  step: "02",
                  title: "Vendor Booking & Ticket Sales",
                  text: "Verified vendors receive qualified booking requests while event tickets are distributed through secure, instant sales channels.",
                  color: "from-amber-400 to-yellow-400",
                  bgImage: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  step: "03",
                  title: "Management & Payment Processing",
                  text: "Track all bookings, coordinate logistics, analyze performance metrics, and process secure payments through integrated financial tools.",
                  color: "from-yellow-400 to-orange-300",
                  bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  {/* Step Background Image */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${step.bgImage})` }}
                  />
                  
                  <div className="relative p-10 rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg">
                    <motion.div
                      className={`text-6xl font-bold mb-6 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-5 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.text}
                    </p>
                    <motion.div
                      className="mt-8 h-1 w-20 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY SECTION */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 rounded-full shadow-sm">
              <div className="flex gap-2">
                {["🔒", "⭐", "✓"].map((icon, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                    className="text-2xl"
                  >
                    {icon}
                  </motion.span>
                ))}
              </div>
              <span className="font-semibold text-gray-700">Trust & Security Framework</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Enterprise-Grade <span className="text-orange-600">Security</span> with Verified <span className="text-amber-600">Trust</span>
            </h2>
            
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our platform incorporates escrow-protected payments, comprehensive vendor verification, 
              transparent booking workflows, and financial safeguards to protect all participants.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "Escrow Payments", value: "100%", icon: "💰", bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
                { label: "Verified Vendors", value: "✓", icon: "✅", bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
                { label: "Secure Transactions", value: "🔐", icon: "🔐", bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
                { label: "Transparent Process", value: "📊", icon: "📊", bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative px-8 py-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
                >
                  {/* Card Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {item.value}
                    </div>
                    <div className="font-medium text-gray-700">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-dd23140edf6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-amber-600/80 to-yellow-500/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
              Transform Your <span className="text-yellow-200">Event Experience</span> with Velte
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Whether you're organizing professional events, providing premium services, 
              or attending exceptional gatherings — Velte provides the comprehensive platform designed for your success.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 rounded-2xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all backdrop-blur-sm"
              >
                Get Started Free
              </motion.button>
              <motion.button
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 rounded-2xl border-2 border-white/50 text-white font-bold text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                Explore Events
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-16 pt-8 border-t border-white/20"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-white/80 text-sm font-medium tracking-wider drop-shadow">
                LAUNCHING ACROSS NIGERIA • TRUSTED BY THOUSANDS
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;