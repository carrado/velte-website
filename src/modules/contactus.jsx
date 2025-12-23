import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Headphones,
  Shield,
  Target,
  Globe,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Event cover images (you should replace these with actual event images)
  const eventImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: 'general',
          eventType: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'support', label: 'Technical Support', icon: <Headphones className="w-4 h-4" /> },
    { id: 'sales', label: 'Sales & Partnership', icon: <Users className="w-4 h-4" /> },
    { id: 'billing', label: 'Billing & Payments', icon: <Shield className="w-4 h-4" /> },
  ];

  const contactChannels = [
    {
      title: 'Customer Support',
      email: 'support@velte.ng',
      phone: '+234 816 327 6826',
      description: 'Platform assistance & technical issues',
      icon: <Headphones className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sales & Partnerships',
      email: 'sales@velte.ng',
      phone: '+234 906 123 4567',
      description: 'Business development & partnerships',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'General Inquiries',
      email: 'hello@velte.ng',
      phone: '+234 807 654 3210',
      description: 'General questions & information',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-[#F76B10]/5">
      {/* Hero Section with Event Image Slider */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {eventImages.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedImage === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {eventImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedImage === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`View event image ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Event Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBE47] to-white">Event Vision</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Let's create unforgettable experiences together. Our team is ready to help you plan, execute, and elevate your next event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Channels */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#F76B10]" />
                  Direct Contact Channels
                </h2>
                
                <div className="space-y-6">
                  {contactChannels.map((channel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center flex-shrink-0`}>
                          {React.cloneElement(channel.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-500" />
                              <a 
                                href={`tel:${channel.phone.replace(/\s+/g, '')}`}
                                className="text-gray-700 hover:text-[#F76B10] transition-colors font-medium"
                              >
                                {channel.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-500" />
                              <a 
                                href={`mailto:${channel.email}`}
                                className="text-gray-700 hover:text-[#F76B10] transition-colors"
                              >
                                {channel.email}
                              </a>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-3">{channel.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F76B10]" />
                  Office Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 5:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Saturday - Sunday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM WAT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-8">
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Received!</h3>
                      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                        Thank you for reaching out. Our event specialists will contact you within 
                        <span className="font-semibold text-[#F76B10]"> 24 hours</span> to discuss your requirements.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSubmitSuccess(false)}
                        className="px-8 py-4 bg-gradient-to-r from-[#F76B10] to-[#FBBE47] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F76B10] to-[#FBBE47] flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">Let's Create Together</h2>
                            <p className="text-gray-600">Fill out the form below and we'll get back to you promptly</p>
                          </div>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F76B10]/30 focus:border-[#F76B10] outline-none transition-all"
                              placeholder="Enter your full name"
                              value={formData.fullName}
                              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F76B10]/30 focus:border-[#F76B10] outline-none transition-all"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <Phone className="w-5 h-5" />
                              </div>
                              <input
                                type="tel"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F76B10]/30 focus:border-[#F76B10] outline-none transition-all"
                                placeholder="+234 816 327 6826"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F76B10]/30 focus:border-[#F76B10] outline-none transition-all"
                              placeholder="Your company name"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Inquiry Type *
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {inquiryTypes.map((type) => (
                              <button
                                key={type.id}
                                type="button"
                                onClick={() => setFormData({...formData, inquiryType: type.id})}
                                className={`p-3 text-sm font-medium rounded-xl transition-all duration-300 flex flex-col items-center gap-2 ${
                                  formData.inquiryType === type.id
                                    ? 'bg-gradient-to-br from-[#F76B10] to-[#FBBE47] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                }`}
                              >
                                {type.icon}
                                <span className="text-xs">{type.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Message *
                          </label>
                          <textarea
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F76B10]/30 focus:border-[#F76B10] outline-none transition-all resize-none"
                            placeholder="Tell us about your event vision, requirements, and any specific needs..."
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          />
                          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                            <span>Please include event date, expected attendees, and budget range if available</span>
                            <span>{formData.message.length}/2000</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="w-5 h-5 text-[#F76B10]" />
                            <span className="text-sm">Your information is secure and confidential</span>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="group px-8 py-4 bg-gradient-to-r from-[#F76B10] to-[#FBBE47] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending Your Message...
                              </span>
                            ) : (
                              <span className="flex items-center justify-center gap-2">
                                Send Message
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </span>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Quick Contact Banner */}
              <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                    <p className="text-white/80">Call our emergency support line</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6" />
                      <div>
                        <div className="text-sm text-white/70">24/7 Emergency Line</div>
                        <a 
                          href="tel:+2348163276826"
                          className="text-2xl font-bold hover:text-[#FBBE47] transition-colors"
                        >
                          +234 816 327 6826
                        </a>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our event platform and services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  question: "What's your average response time?",
                  answer: "We guarantee a response within 24 business hours for all inquiries. Priority support responds within 4 hours for enterprise clients.",
                  icon: <Clock className="w-5 h-5" />
                },
                {
                  question: "How do I schedule a platform demo?",
                  answer: "Contact our sales team at sales@velte.ng or call +234 906 123 4567 to schedule a personalized platform demonstration at your convenience.",
                  icon: <Calendar className="w-5 h-5" />
                },
                {
                  question: "What regions do you operate in?",
                  answer: "We currently serve major cities across Nigeria with expansion plans to other African countries. Virtual event support is available worldwide.",
                  icon: <MapPin className="w-5 h-5" />
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F76B10]/10 flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(faq.icon, { className: "w-5 h-5 text-[#F76B10]" })}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Still have questions? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@velte.ng"
                  className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-300 hover:border-[#F76B10] transition-all flex items-center justify-center gap-2"
                >
                  Email Support
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;