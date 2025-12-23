import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  Users,
  FileText,
  Key,
  Trash2,
  Mail,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Download,
  RefreshCw,
  ShieldCheck,
  Cookie,
  Sparkles,
  ShieldAlert,
  Building,
  BadgeCheck,
  Gavel,
  Target,
  Layers,
  BookOpen
} from "lucide-react";

// Import hero image (you'll need to add this to your project)
// For now, using a placeholder - replace with your actual hero image
const HeroCover = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-[#F76B10] via-[#FB7A1E] to-[#FBBE47] opacity-90">
    <div className="absolute inset-0 bg-black opacity-20" />
    {/* Abstract pattern overlay */}
    <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
        </div>
  </div>
);

const PrivacyPolicyPage = () => {

  const policySections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <FileText className="w-5 h-5" />,
      color: "from-[#F76B10] to-[#FB7A1E]",
      content: `Velte Technologies Inc. ("Velte", "we", "our", or "us") is committed to protecting your privacy.
This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
you use the Velte platform, including our website, mobile applications, and services.

By accessing or using Velte, you agree to the collection and use of information in accordance
with this policy.`,
      highlight: "Your privacy matters to us",
      tags: ["Privacy First", "Transparency"]
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      color: "from-[#FB7A1E] to-[#FBBE47]",
      content: `We collect information to provide and improve our services.

Information you provide:
• Name, email address, phone number
• Account credentials (securely encrypted)
• Organizer or vendor business details
• Event details, bookings, and communications
• Support messages, feedback, and reviews

Information collected automatically:
• Device and browser information
• IP address and approximate location
• Usage data and interaction logs
• Cookies and similar technologies

Payment information:
Velte does not store full payment card details. Payments are securely processed by trusted
third-party payment providers.`,
      items: ["Personal Information", "Usage Data", "Payment Processing", "Communication History"],
      note: "Minimal data collection principle"
    },
    {
      id: "how-we-use-data",
      title: "3. How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      color: "from-[#FBBE47] to-[#FFD166]",
      content: `We use your information to:
• Create and manage user accounts
• Facilitate events, bookings, and payments
• Connect organizers, vendors, and attendees
• Communicate updates, confirmations, and alerts
• Provide customer support
• Improve platform features and security
• Prevent fraud, abuse, and misuse
• Comply with legal obligations

We do not sell your personal data.`,
      pledge: "We never sell your data",
      highlightColor: "bg-green-50 border-green-100 text-green-800"
    },
    {
      id: "data-sharing",
      title: "4. How We Share Information",
      icon: <Users className="w-5 h-5" />,
      color: "from-[#FFD166] to-[#FFE08A]",
      content: `We only share data when necessary:

With other users:
• Event details are visible to attendees
• Vendor profiles are visible to organizers
• Contact information is shared only when required for event coordination

With service providers:
• Payment processors
• Hosting and infrastructure providers
• Analytics and security services

For legal reasons:
• To comply with laws or legal requests
• To enforce our Terms and Community Guidelines
• To protect Velte, users, and the public`,
      types: ["With Users", "With Partners", "For Legal Reasons"],
      note: "Limited, purpose-driven sharing"
    },
    {
      id: "cookies",
      title: "5. Cookies & Tracking Technologies",
      icon: <Cookie className="w-5 h-5" />,
      color: "from-[#E55A39] to-[#F76B10]",
      content: `Velte uses cookies and similar technologies to:
• Maintain sessions and login states
• Remember user preferences
• Analyze traffic and platform performance

You may disable cookies in your browser, but some features may not function properly.`,
      warning: "Essential cookies required for core features",
      highlightColor: "bg-amber-50 border-amber-100 text-amber-800"
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      icon: <Trash2 className="w-5 h-5" />,
      color: "from-gray-600 to-gray-800",
      content: `We retain personal data only as long as necessary to:
• Provide our services
• Comply with legal and regulatory requirements
• Resolve disputes and enforce agreements

When data is no longer required, it is securely deleted or anonymized.`,
      duration: "Only as long as necessary",
      tags: ["GDPR Compliant", "CCPA Ready"]
    },
    {
      id: "security",
      title: "7. Data Security",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "from-[#F76B10] to-[#FB7A1E]",
      content: `We use industry-standard safeguards including encryption, access controls, and secure servers.
However, no system is completely secure, and we cannot guarantee absolute protection.`,
      features: ["AES-256 Encryption", "Access Controls", "Secure Servers", "Regular Audits"],
      highlightColor: "bg-blue-50 border-blue-100 text-blue-800"
    },
    {
      id: "your-rights",
      title: "8. Your Rights",
      icon: <Key className="w-5 h-5" />,
      color: "from-[#FBBE47] to-[#FFD166]",
      content: `Depending on your location, you may have the right to:
• Access your personal data
• Correct inaccurate information
• Request deletion of your data
• Restrict or object to processing
• Request data portability

Most settings can be managed in your account. For additional requests, contact us.`,
      rights: ["Access", "Correction", "Deletion", "Portability", "Objection"],
      highlightColor: "bg-purple-50 border-purple-100 text-purple-800"
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      icon: <Users className="w-5 h-5" />,
      color: "from-[#FF8A65] to-[#FFAB91]",
      content: `Velte is not intended for individuals under the age of 18.
We do not knowingly collect data from children. If such data is discovered, it will be deleted.`,
      restriction: "Age 18+ Only",
      warning: "Parental consent required for minors"
    },
    {
      id: "international",
      title: "10. International Data Transfers",
      icon: <Globe className="w-5 h-5" />,
      color: "from-[#4FC3F7] to-[#29B6F6]",
      content: `Velte may process data outside your country of residence.
We ensure appropriate safeguards are in place for international transfers.`,
      global: "Global standards applied",
      tags: ["EU-US DPF", "Standard Clauses"]
    },
    {
      id: "changes",
      title: "11. Changes to This Policy",
      icon: <RefreshCw className="w-5 h-5" />,
      color: "from-gray-600 to-gray-800",
      content: `We may update this Privacy Policy from time to time.
Material changes will be communicated via email or platform notifications.
Continued use of Velte constitutes acceptance of the updated policy.`,
      update: "We'll notify you of changes",
      highlightColor: "bg-gray-50 border-gray-100 text-gray-800"
    },
    {
      id: "contact",
      title: "12. Contact Us",
      icon: <Mail className="w-5 h-5" />,
      color: "from-[#F76B10] to-[#FB7A1E]",
      content: `If you have questions or concerns about this Privacy Policy, contact us at:

support@velte.ng`,
      contact: "support@velte.ng",
      highlightColor: "bg-[#F76B10]/10 border-[#F76B10]/20 text-[#F76B10]"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { height: 0, opacity: 0 }
  };

  // Professional compliance badges
//   const ComplianceBadges = () => (
//     <div className="flex flex-wrap gap-3 justify-center mt-8">
//       {[
//         { icon: <ShieldAlert className="w-5 h-5" />, label: "GDPR Compliant", color: "bg-blue-50 text-blue-700 border-blue-100" },
//         { icon: <Gavel className="w-5 h-5" />, label: "CCPA Ready", color: "bg-green-50 text-green-700 border-green-100" },
//         { icon: <Building className="w-5 h-5" />, label: "SOC 2 Type II", color: "bg-purple-50 text-purple-700 border-purple-100" },
//         { icon: <BadgeCheck className="w-5 h-5" />, label: "ISO 27001", color: "bg-amber-50 text-amber-700 border-amber-100" },
//       ].map((badge, index) => (
//         <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${badge.color} backdrop-blur-sm`}>
//           {badge.icon}
//           <span className="text-sm font-medium">{badge.label}</span>
//         </div>
//       ))}
//     </div>
//   );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Cover */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <HeroCover />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.img
                src="https://res.cloudinary.com/dbhpul04t/image/upload/v1766001844/velte_ijulb7ijulb7ijul-removebg-preview_h3d6xw.png"
                alt="Velte Platform Logo"
                className="w-44 md:w-52 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Policy</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Protecting your data with enterprise-grade security and transparent practices.
            </p>

            {/* Last Updated & Stats */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <RefreshCw className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Last Updated: December 2025</span>
              </div>
              
            </div>

            {/* Compliance Badges */}
            {/* <ComplianceBadges /> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Introduction Summary */}
        <div className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F76B10] to-[#FBBE47] rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                This Privacy Policy outlines how Velte Technologies collects, uses, and protects your information.
                We are committed to transparency and security in all our data practices. Below you'll find detailed
                information about your rights, our security measures, and how to contact us regarding your data.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "256-bit", label: "Encryption", icon: <Lock className="w-5 h-5" /> },
              { value: "0", label: "Data Breaches", icon: <Shield className="w-5 h-5" /> },
              { value: "24h", label: "Response Time", icon: <Mail className="w-5 h-5" /> },
              { value: "4+", label: "Compliance", icon: <BadgeCheck className="w-5 h-5" /> },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-xs">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Policy Details</h2>
            <div className="text-sm text-gray-500">
              {policySections.length} Sections
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {policySections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                id={section.id}
                className="group"
              >
                <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ring-2 ring-[#F76B10]/20`}>
                  {/* Section Header */}
                  <button
                    className="w-full text-left p-8 flex items-start justify-between"
                  >
                    <div className="flex items-start gap-6">
                      {/* Section Number */}
                      <div className="hidden sm:block">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center transition-transform group-hover:scale-105`}>
                          <span className="text-xl font-bold text-white">{index + 1}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-gray-500">
                            SECTION {String(index + 1).padStart(2, '0')}
                          </span>
                          {section.tags?.map((tag, i) => (
                            <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {section.title.split(' ').slice(1).join(' ')}
                        </h3>
                        
                        {/* Quick Preview */}
                        {section.items && (
                          <div className="flex flex-wrap gap-2">
                            {section.items.slice(0, 3).map((item, i) => (
                              <span key={i} className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg border border-gray-100">
                                {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                      <motion.div
                        variants={contentVariants}
                        initial="visible"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 px-8 pb-8 pt-8">
                          {/* Main Content */}
                          <div className="prose prose-2xl max-w-none text-gray-700 mb-10">
                            {section.content.split('\n').map((paragraph, idx) => (
                              paragraph.trim() ? (
                                <p key={idx} className={`${paragraph.startsWith('•') ? 'ml-6' : ''} mb-4`}>
                                  {paragraph}
                                </p>
                              ) : null
                            ))}
                          </div>

                          {/* Additional Info Blocks */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {section.pledge && (
                              <div className="p-5 bg-green-50 border border-green-100 rounded-xl">
                                <div className="flex items-start gap-3">
                                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                  <div>
                                    <h4 className="font-bold text-green-800 text-lg mb-2">Our Commitment</h4>
                                    <p className="text-green-700">{section.pledge}</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {section.warning && (
                              <div className="p-5 bg-amber-50 border border-amber-100 rounded-xl">
                                <div className="flex items-start gap-3">
                                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                  <div>
                                    <h4 className="font-bold text-amber-800 text-lg mb-2">Important Notice</h4>
                                    <p className="text-amber-700">{section.warning}</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {section.rights && (
                              <div className="lg:col-span-2">
                                <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                                  <h4 className="font-bold text-blue-800 text-lg mb-4">Your Data Rights</h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                                    {section.rights.map((right, i) => (
                                      <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <span className="font-medium text-gray-700">{right}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {section.contact && (
                              <div className="lg:col-span-2">
                                <div className="p-5 bg-gradient-to-r from-[#F76B10]/10 to-[#FBBE47]/10 border border-[#F76B10]/20 rounded-xl">
                                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                    <div className="w-14 h-14 bg-white/80 rounded-xl flex items-center justify-center">
                                      <Mail className="w-7 h-7 text-[#F76B10]" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-[#F76B10] text-lg mb-2">Data Privacy Team</h4>
                                      <p className="text-[#F76B10] font-medium text-xl mb-1">{section.contact}</p>
                                      <p className="text-gray-600 text-sm">For privacy-related inquiries and data subject requests</p>
                                    </div>
                                    <button className="px-6 py-3 bg-[#F76B10] text-white font-medium rounded-lg hover:bg-[#FB7A1E] transition-colors">
                                      Contact Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Section Footer */}
                          <div className="mt-10 pt-6 border-t border-gray-200">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Layers className="w-4 h-4" />
                                  <span>Policy Version 3.2</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <RefreshCw className="w-4 h-4" />
                                  <span>Reviewed quarterly</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;