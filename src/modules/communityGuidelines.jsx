import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  Calendar,
  ShoppingBag,
  Ticket,
  Flag,
  AlertTriangle,
  Mail,
  ChevronRight,
  Heart,
  CheckCircle,
  Lock,
  Target,
  Globe,
  BookOpen,
  Sparkles
} from "lucide-react";

const CommunityGuidelines = () => {
  const [openSection, setOpenSection] = useState("");  
  
  const guidelines = [
    {
      id: "purpose",
      title: "1. Purpose of These Guidelines",
      icon: <Target className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      content: `Velte is a platform built on trust. These Community Guidelines outline acceptable behavior and responsibilities for all users to ensure safe, professional, and reliable event experiences.

By using Velte, you agree to follow these guidelines in addition to our Terms & Conditions.`
    },
    {
      id: "values",
      title: "2. Our Core Values",
      icon: <Heart className="w-5 h-5" />,
      color: "from-red-500 to-pink-500",
      content: `We expect all members of the Velte community to act with:

• Respect – Treat others professionally and courteously  
• Honesty – Provide truthful information and representations  
• Reliability – Honor commitments and agreements  
• Safety – Prioritize the safety and well-being of others  
• Accountability – Take responsibility for your actions`,
      values: [
        { icon: "🤝", label: "Respect" },
        { icon: "✨", label: "Honesty" },
        { icon: "⚡", label: "Reliability" },
        { icon: "🛡️", label: "Safety" },
        { icon: "📝", label: "Accountability" }
      ]
    },
    {
      id: "all-users",
      title: "3. Expectations for All Users",
      icon: <Users className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      content: `All users must:

• Provide accurate account and profile information  
• Communicate respectfully and professionally  
• Use the Platform for legitimate event-related purposes  
• Comply with applicable laws and regulations  
• Respect intellectual property and privacy rights  

You may not impersonate others, mislead users, or manipulate platform features.`,
      requirements: [
        "Accurate Information",
        "Professional Communication",
        "Legal Compliance",
        "Respect Privacy"
      ]
    },
    {
      id: "organizers",
      title: "4. Event Organizer Guidelines",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      content: `Event Organizers are expected to:

• Provide clear and accurate event details  
• Clearly state refund and cancellation policies  
• Obtain required permits and approvals  
• Treat vendors and attendees fairly  
• Communicate changes or cancellations promptly  

Organizers must not advertise false events or misrepresent event experiences.`,
      role: "Organizer"
    },
    {
      id: "vendors",
      title: "5. Vendor Guidelines",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500",
      content: `Vendors must:

• Accurately represent services, pricing, and availability  
• Deliver services as agreed  
• Communicate professionally with clients  
• Comply with health, safety, and business regulations  
• Honor accepted bookings  

Failure to deliver services or repeated complaints may result in suspension or removal.`,
      role: "Vendor"
    },
    {
      id: "attendees",
      title: "6. Attendee Guidelines",
      icon: <Ticket className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500",
      content: `Attendees are expected to:

• Review event details carefully before purchasing  
• Follow event rules and venue policies  
• Treat organizers and vendors respectfully  
• Avoid abusive, disruptive, or unsafe behavior  

Attendees must not engage in harassment, fraud, or chargeback abuse.`,
      role: "Attendee"
    },
    {
      id: "prohibited",
      title: "7. Prohibited Conduct",
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
      content: `The following behaviors are strictly prohibited:

• Fraud, scams, or deceptive practices  
• Harassment, hate speech, or threats  
• Posting false reviews or manipulating ratings  
• Moving transactions off-platform to bypass fees  
• Selling illegal, unsafe, or prohibited services  
• Uploading harmful, offensive, or misleading content  

Violations may result in immediate enforcement action.`,
      warnings: ["No Fraud", "No Harassment", "No Off-platform Deals", "No Illegal Content"]
    },
    {
      id: "enforcement",
      title: "8. Trust, Safety & Enforcement",
      icon: <Shield className="w-5 h-5" />,
      color: "from-gray-700 to-gray-900",
      content: `Velte reserves the right to take action to protect the community, including:

• Content removal  
• Account warnings  
• Temporary suspension  
• Permanent account termination  
• Withholding payouts during investigations  

Enforcement decisions are made at Velte's discretion and may occur without prior notice.`,
      actions: ["Warnings", "Suspension", "Termination", "Payout Hold"]
    },
    {
      id: "reporting",
      title: "9. Reporting Violations",
      icon: <Flag className="w-5 h-5" />,
      color: "from-violet-500 to-purple-500",
      content: `If you experience or witness a violation of these guidelines, report it through the Platform or contact our support team.

Reports should include relevant details, evidence, or communication history when possible. Velte reviews reports confidentially and takes appropriate action.`,
      ctas: ["Report In-app", "Email Support", "Provide Evidence"]
    },
    {
      id: "updates",
      title: "10. Updates & Contact",
      icon: <Mail className="w-5 h-5" />,
      color: "from-slate-600 to-slate-800",
      content: `Velte may update these Community Guidelines as the Platform evolves. Continued use of the Platform constitutes acceptance of updated guidelines.

For questions or reports:
support@velte.ng

Last Updated: December 2025`,
      contact: "support@velte.ng"
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-orange-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-200/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm border border-gray-200"
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Community Standards</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Velte <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Community</span> Guidelines
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Building trust, safety, and exceptional experiences for everyone in our global event ecosystem
          </p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-10"
          >
            {[
              { icon: "🤝", value: "Trust First", label: "Foundation" },
              { icon: "🎯", value: "10 Rules", label: "Clear Guidelines" },
              { icon: "🌍", value: "Global", label: "All Markets" },
              { icon: "⚖️", value: "Fair", label: "Equal Treatment" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Guidelines Sections */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {guidelines.map((section, index) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                id={section.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openSection === section.id 
                    ? 'shadow-xl ring-2 ring-gray-200' 
                    : 'shadow-sm hover:shadow-md'
                }`}
              >
                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left"
                >
                  <div className="bg-white p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Icon with Gradient */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                          {React.cloneElement(section.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        
                        {/* Title & Index */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-500">
                              Section {index + 1}
                            </span>
                            {section.role && (
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                {section.role}
                              </span>
                            )}
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {section.title.split('. ')[1] || section.title}
                          </h2>
                        </div>
                      </div>
                      
                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: openSection === section.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 rounded-lg bg-gray-100"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </motion.div>
                    </div>
                    
                    {/* Quick Tags (Visible in collapsed state) */}
                    {openSection !== section.id && section.requirements && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {section.requirements?.slice(0, 2).map((req, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {req}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      key={`content-${section.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-50/50 border-t border-gray-100 p-6 sm:p-8">
                        {/* Content */}
                        <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-8">
                          {section.content}
                        </div>

                        {/* Additional Visual Elements */}
                        {section.values && (
                          <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <Heart className="w-4 h-4 text-red-500" />
                              Core Values
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                              {section.values.map((value, i) => (
                                <div key={i} className="text-center p-3 bg-white rounded-xl border border-gray-100">
                                  <div className="text-2xl mb-2">{value.icon}</div>
                                  <div className="text-sm font-medium text-gray-700">{value.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {section.warnings && (
                          <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-red-500" />
                              Strictly Prohibited
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.warnings.map((warning, i) => (
                                <div key={i} className="px-4 py-2 bg-red-50 border border-red-100 text-red-700 rounded-xl text-sm font-medium">
                                  {warning}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {section.actions && (
                          <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <Shield className="w-4 h-4 text-gray-700" />
                              Possible Actions
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.actions.map((action, i) => (
                                <div key={i} className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium">
                                  {action}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {section.contact && (
                          <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                              <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-600" />
                                <div>
                                  <div className="text-sm text-gray-500">Contact Support</div>
                                  <div className="font-semibold text-gray-900">{section.contact}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Section Footer */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <Lock className="w-4 h-4" />
                              <span>Confidential & Secure</span>
                            </div>
                            <div>Last reviewed: Dec 2025</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Community Commitment Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-white overflow-hidden relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Our Commitment to You</h3>
                  <p className="text-white/90 mb-6 max-w-2xl">
                    Velte is committed to building a fair, transparent, and reliable event ecosystem.
                    These guidelines exist to protect everyone — and to help our global community
                    grow responsibly while delivering exceptional experiences.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm">
                      🤝 Mutual Respect
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm">
                      ⚖️ Fair Treatment
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm">
                      🛡️ Your Safety
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation for Mobile */}
          <div className="lg:hidden mt-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Quick Navigation</h4>
              <div className="grid grid-cols-2 gap-3">
                {guidelines.slice(0, 4).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      toggleSection(section.id);
                      // Scroll to element
                      const element = document.getElementById(section.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="p-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900 text-sm">
                      {section.title.split('. ')[1].split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Section {guidelines.findIndex(s => s.id === section.id) + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityGuidelines;