import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  BookOpen,
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Globe,
  Users,
  CreditCard,
  Lock,
  Scale,
  Mail,
  Calendar,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

const TermsPage = () => {
  const [openSections, setOpenSections] = useState({});
  const [activeSection, setActiveSection] = useState('introduction');

  const termsData = [
    {
      id: 'introduction',
      title: '1. Agreement & Platform Overview',
      icon: <Globe className="w-5 h-5" />,
      content: `These Terms and Conditions ("Terms") govern your access to and use of the Velte platform ("Velte", "Platform", "we", "us", or "our"), including our website, mobile applications, and related services.

Velte provides a digital marketplace and event management infrastructure that enables users to create events, discover and book event vendors, sell or purchase event tickets, and coordinate event-related services.

By accessing or using the Platform, you agree to be legally bound by these Terms. If you do not agree, you must discontinue use of the Platform immediately.

If you are using Velte on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.`
    },
    {
      id: 'definitions',
      title: '2. Definitions',
      icon: <BookOpen className="w-5 h-5" />,
      content: `"Platform" refers to all Velte-operated software, applications, tools, and services.

"User" means any individual or legal entity that accesses or uses the Platform.

"Event Organizer" refers to Users who create, manage, promote, or host events.

"Vendor" refers to Users who offer event-related services or products, including but not limited to catering, photography, decoration, entertainment, logistics, or venues.

"Attendee" refers to Users who purchase tickets or register for events.

"Transaction" means any booking, ticket purchase, or payment facilitated through the Platform.

"Content" includes all text, images, media, data, and materials submitted to the Platform by Users.`
    },
    {
      id: 'account-registration',
      title: '3. Account Registration & Eligibility',
      icon: <Users className="w-5 h-5" />,
      content: `3.1 Eligibility  
You must be at least 18 years old to use Velte. By registering, you confirm that you meet this requirement.

3.2 Account Information  
You agree to provide accurate, complete, and current information and to keep it updated. Velte may suspend or terminate accounts that provide false or misleading information.

3.3 Account Security  
You are responsible for safeguarding your login credentials and all activities conducted under your account.

3.4 Account Types  
Velte may offer different account roles (Organizer, Vendor, Attendee). Each role may have specific features, responsibilities, or limitations.`
    },
    {
      id: 'platform-usage',
      title: '4. Platform Use & Responsibilities',
      icon: <Scale className="w-5 h-5" />,
      content: `4.1 Acceptable Use  
You agree not to misuse the Platform or use it for unlawful, harmful, or deceptive activities.

4.2 Event Organizers  
Event Organizers are solely responsible for:
- The accuracy of event details
- Obtaining required permits or approvals
- Delivering events as advertised
- Managing refunds according to their stated policies

Velte does not organize, host, or control events.

4.3 Vendors  
Vendors are solely responsible for:
- The quality, legality, and delivery of their services
- Honoring accepted bookings
- Compliance with applicable laws and regulations

Velte does not guarantee vendor performance.

4.4 Attendees  
Attendees are responsible for reviewing event details, refund policies, and vendor terms before making purchases.`
    },
    {
      id: 'payments',
      title: '5. Payments, Fees & Escrow',
      icon: <CreditCard className="w-5 h-5" />,
      content: `5.1 Payments  
Velte facilitates payments using third-party payment processors. Velte is not a bank or licensed financial institution.

5.2 Platform Fees  
Velte may charge service fees, commissions, or subscription fees. All applicable fees will be disclosed before completion of a transaction.

5.3 Escrow & Payouts  
For certain transactions, payments may be temporarily held to support trust and dispute resolution. Release of funds may depend on event completion or agreed milestones.

5.4 Refunds  
Refund eligibility and timelines are determined by Event Organizers or Vendors. Velte may assist with processing but does not guarantee refunds.

5.5 Taxes  
Users are solely responsible for determining and remitting any applicable taxes.`
    },
    {
      id: 'disputes',
      title: '6. Disputes & Cancellations',
      icon: <AlertCircle className="w-5 h-5" />,
      content: `6.1 Disputes Between Users  
Velte is not a party to agreements between Users. However, Velte may review disputes and facilitate resolution at its discretion.

6.2 Cancellations  
Event cancellations, vendor cancellations, or changes are the responsibility of the relevant User. Velte is not liable for losses resulting from cancellations.

6.3 Chargebacks  
Abuse of chargebacks or fraudulent claims may result in account suspension or termination.`
    },
    {
      id: 'intellectual-property',
      title: '7. Intellectual Property',
      icon: <Lock className="w-5 h-5" />,
      content: `7.1 Platform Ownership  
All rights to the Platform, including software, branding, and design, belong to Velte.

7.2 User Content  
You retain ownership of your Content but grant Velte a non-exclusive, royalty-free license to use it for operating and promoting the Platform.

7.3 Trademarks  
"Velte" and related logos are trademarks of Velte. Unauthorized use is prohibited.`
    },
    {
      id: 'liability',
      title: '8. Disclaimers & Limitation of Liability',
      icon: <Shield className="w-5 h-5" />,
      content: `8.1 No Warranties  
The Platform is provided "as is" without warranties of any kind.

8.2 Limitation of Liability  
Velte is not liable for indirect, incidental, or consequential damages arising from your use of the Platform.

8.3 Maximum Liability  
Velte's total liability shall not exceed the fees paid by you to Velte in the six (6) months preceding the claim.`
    },
    {
      id: 'termination',
      title: '9. Suspension & Termination',
      icon: <FileText className="w-5 h-5" />,
      content: `Velte may suspend or terminate your account if you violate these Terms or engage in harmful conduct.

Upon termination, your access to the Platform will cease. Certain provisions will survive termination.`
    },
    {
      id: 'general',
      title: '10. General Provisions',
      icon: <TrendingUp className="w-5 h-5" />,
      content: `10.1 Governing Law  
These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles.

10.2 Changes  
Velte may update these Terms periodically. Continued use constitutes acceptance.

10.3 Entire Agreement  
These Terms and our Privacy Policy constitute the entire agreement between you and Velte.

10.4 Contact  
For legal inquiries: legal@velte.ng

Last Updated: December 2025`
    }
  ];

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    setActiveSection(id);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const keyPoints = [
    { icon: <CheckCircle />, text: 'Clear & Transparent Terms' },
    { icon: <Shield />, text: 'Your Security Protected' },
    { icon: <Globe />, text: 'Global Platform Access' },
    { icon: <Users />, text: 'Community Guidelines' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-orange-50/20">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/80 rounded-full backdrop-blur-sm">
            <Scale className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">Legal Documentation</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Velte <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Terms</span> & Conditions
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Understand how we protect your rights and define our mutual responsibilities
            on the world's most comprehensive event management platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm"
              >
                <div className="text-orange-500">
                  {point.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{point.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Table of Contents - Desktop */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/4 lg:sticky lg:top-8 lg:self-start"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {termsData.map((section) => (
                  <motion.button
                    key={section.id}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${activeSection === section.id
                        ? 'bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700'
                        : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${activeSection === section.id
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-orange-50'
                        }`}>
                        {section.icon}
                      </div>
                      <span className="font-medium">{section.title.split('. ')[1] || section.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === section.id ? 'rotate-90 text-orange-500' : 'text-gray-400'
                      }`} />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: December 2025</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p className="mb-2">Version: 3.2</p>
                  <p>Effective immediately upon publication</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terms Content */}
          <motion.div variants={itemVariants} className="lg:w-3/4">
            <div className="space-y-8">
              {termsData.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${activeSection === section.id ? 'ring-2 ring-orange-500 ring-opacity-20' : ''
                    }`}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full"
                  >
                    <div className="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                            <div className="text-white font-bold text-lg">{index + 1}</div>
                          </div>
                          <div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-left">
                              {section.title}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                {section.icon}
                                <span>Section {index + 1} of {termsData.length}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openSections[section.id] ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-2 rounded-lg bg-gray-100"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  {/* Section Content */}
                  <AnimatePresence>
                    {openSections[section.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 md:p-8">
                          <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {section.content}
                            </div>
                          </div>

                          {/* Section Footer */}
                          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              Last reviewed: December 2025
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
                                Legally Binding
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Your Agreement Matters</h3>
                    <p className="text-white/90 leading-relaxed">
                      By using the Velte platform, you acknowledge that you have read, understood,
                      and agree to be bound by these Terms & Conditions. This agreement forms the
                      foundation of our trusted partnership in revolutionizing event management worldwide.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Footer Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                  <div className="text-center lg:text-left">
                    <h4 className="font-bold text-gray-900 mb-3 text-xl">Questions or Concerns?</h4>
                    <p className="text-gray-600 max-w-lg">
                      Our legal team is here to help clarify any aspect of these terms
                      and ensure you have the confidence to build amazing events with Velte.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow flex items-center gap-3"
                    >
                      <Mail className="w-5 h-5" />
                      Contact Legal Team
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-full shadow-2xl px-6 py-4 flex items-center gap-3"
        >
          <select
            onChange={(e) => scrollToSection(e.target.value)}
            className="bg-transparent border-none outline-none text-sm font-semibold text-gray-700 appearance-none"
          >
            <option value="">Jump to Section</option>
            {termsData.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title.split('. ')[1] || section.title}
              </option>
            ))}
          </select>
          <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;