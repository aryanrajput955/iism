"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function IISMLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const observeElements = () => {
      const elements = document.querySelectorAll(".fade-in-element")
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible")
            }
          })
        },
        { threshold: 0.1 },
      )

      elements.forEach((el) => observer.observe(el))
    }

    window.addEventListener("scroll", handleScroll)
    observeElements()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const departments = [
    {
      title: "Education and Skill Management",
      description:
        "Skill development programmes as per NSDC and short term courses on computer as a computer literacy programme at rural areas.",
      icon: "🎓",
      color: "bg-blue-500",
    },
    {
      title: "Farmers Welfare",
      description:
        "Organising Training, capacity building, demonstration, technology and inputs dissemination, free consultancy service to farmers, farmer's assistance booth cum plant health clinic.",
      icon: "🌾",
      color: "bg-green-500",
    },
    {
      title: "Crop Production",
      description:
        "Agri & allied crops production like vegetables including off-season, fish, mushroom, milk, egg, poultry, goat, piggery, etc.",
      icon: "🌱",
      color: "bg-emerald-500",
    },
    {
      title: "Agri-Business",
      description:
        "Formation of market chain linkage system for both raw and processed products. Designing convergence marketing.",
      icon: "💼",
      color: "bg-orange-500",
    },
    {
      title: "Food Processing",
      description:
        "Extend help in setting-up standardized food processing facilities. Trying to set the culture of excellence in quality and total customer service.",
      icon: "🏭",
      color: "bg-purple-500",
    },
    {
      title: "Administration",
      description: "Responsible to maintain all the departments to run smoothly; Internal evaluation of the staffs.",
      icon: "⚙️",
      color: "bg-gray-500",
    },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Schemes", href: "#schemes" },
    { name: "Departments", href: "#departments" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-gray-200"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image src="/logo.png" alt="IISM Logo" width={40} height={40} className="roundedlg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">IISM</h1>
                <p className="text-xs text-gray-600">Sustainable Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t shadow-lg">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/img.jpg"
            alt="Rural farming landscape"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-block bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-green-200 text-sm font-medium">Integrated Institute of Sustainable Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering to Improve the Quality of Life in
              <span className="text-green-300 block mt-2"> Rural Areas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up-delay-1">
              Transforming lives through skill development, sustainable farming, and rural empowerment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More
                <span className="ml-2">→</span>
              </a>
              <a
                href="#departments"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
              >
                Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 fade-in-element">
              Our Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 fade-in-element">
              Transforming Rural Communities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-element">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">👁️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    "Empowering to Improve the Quality of Life in Rural Areas" is the core vision of Integrated
                    Institute of Sustainable Management (IISM). To transform the lives of farmers, IISM has started to
                    offer skills, especially to the poor and underprivileged youths of Manipur.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To emerge as a hub of skill provider especially for the farmers and school/college dropouts,
                    providing self employment through skill development trainings on various trades and disciplines.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-xl">❤️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Delivering knowledge of technical know-how for precision farming with focus on organic farming,
                    technology dissemination, and linking market chains to sustain enterprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative fade-in-element">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/img.jpg"
                  alt="Farmers training session"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center fade-in-element">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-green-100">Farmers Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-green-100">Villages Reached</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-green-100">Skill Programs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 fade-in-element">
              Our Schemes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 fade-in-element">
              Comprehensive Development Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-element">
              We offer various schemes and programs designed to empower rural communities through skill development,
              sustainable farming practices, and entrepreneurship opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-element">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600">NSDC certified programs and computer literacy courses for rural youth</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-element">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organic Farming</h3>
              <p className="text-gray-600">
                Precision farming techniques with focus on sustainable and organic practices
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-element">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Linkage</h3>
              <p className="text-gray-600">
                Connecting farmers with markets for better price realization and sustainability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 fade-in-element">
              Our Departments
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 fade-in-element">
              Specialized Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-element">
              Our organization is structured into specialized departments, each focusing on specific aspects of rural
              development and sustainable management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-element"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${dept.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-xl">{dept.icon}</span>
                    </div>
                    <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chief Consultants/Advisors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4 fade-in-element">
              Our Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 fade-in-element">
              Chief Consultants & Advisors of IISM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-element">
              Our distinguished panel of experts and advisors bring decades of experience in agriculture, education, and
              rural development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consultant 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-element">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🌾</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">P. DEVAKANTA</h3>
                  <h4 className="text-lg font-semibold text-green-700 mb-3">ORGANIC CROP PRODUCTION</h4>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p>• National Awardee of Plant Genome Farmer's Reward 2012 by PPV & FRA</p>
                    <p>• President of AMAPCON</p>
                    <p>• Member DEE of Central Agricultural University</p>
                    <p>• Master Trainer of Banana Fibre</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="text-lg mr-2">📱</span>
                    <span className="font-medium">+91-97742695172</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultant 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-element">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">DR. M. THOITHOI</h3>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">FARMERS ASSISTANCE & PLANT HEALTH CLINIC</h4>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p>• Former PC of Thoubal KVK</p>
                    <p>• Renowned Radio and Television Talker</p>
                    <p>• Chairman of Crop Solution</p>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <span className="text-lg mr-2">📱</span>
                    <span className="font-medium">+91-94362800213</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultant 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-element">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">DR. SAJIB BORUA</h3>
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">EDUCATION AND SKILL MANAGEMENT</h4>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p>• Senior Faculty of Extension Education of India – NE Region</p>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <span className="text-lg mr-2">📱</span>
                    <span className="font-medium">+91-94350916154</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultant 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-element">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🏭</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">N. BANDANA DEVI</h3>
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">FOOD VALUE ADDITION</h4>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p>• Chief Technical Officer, KVK Bishnupur</p>
                    <p>• Deputy Director of PDDUIAS</p>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <span className="text-lg mr-2">📱</span>
                    <span className="font-medium">+91-94360216825</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultant 5 - Full Width */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-element">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">SAMIR BORDOLOI</h3>
                    <h4 className="text-lg font-semibold text-teal-700 mb-3">AGRI-BUSINESS</h4>
                    <div className="text-sm text-gray-600 space-y-1 mb-4">
                      <p>• Secretary General & Ecological Farming Expert at SPREAD NE</p>
                      <p>• Organic Farming Expert</p>
                      <p>• Board Member of Farm2Food Foundation</p>
                      <p>• Management Board Member of Assam Agricultural University</p>
                    </div>
                    <div className="flex items-center text-teal-600">
                      <span className="text-lg mr-2">📱</span>
                      <span className="font-medium">+91-8486029583</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 fade-in-element shadow-lg">
              <span className="mr-2">💬</span>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-blue-700 bg-clip-text text-transparent mb-6 fade-in-element">
              Let's Transform Rural Communities Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-element leading-relaxed">
              Ready to make a difference? Connect with us to learn more about our programs, partnerships, and how we can
              collaborate to empower rural areas across India.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-element border border-white/20">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Call Us</h3>
              <div className="space-y-3 text-center">
                <div className="bg-blue-50 rounded-lg p-3 hover:bg-blue-100 transition-colors cursor-pointer">
                  <p className="font-semibold text-blue-700">Main Office</p>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 hover:bg-blue-100 transition-colors cursor-pointer">
                  <p className="font-semibold text-blue-700">Support</p>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium">
                  Call Now
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-element border border-white/20">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping animation-delay-1000"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Email Us</h3>
              <div className="space-y-3 text-center">
                <div className="bg-green-50 rounded-lg p-3 hover:bg-green-100 transition-colors cursor-pointer">
                  <p className="font-semibold text-green-700">General Inquiries</p>
                  <p className="text-gray-600">info@iism.org</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 hover:bg-green-100 transition-colors cursor-pointer">
                  <p className="font-semibold text-green-700">Partnerships</p>
                  <p className="text-gray-600">contact@iism.org</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 font-medium">
                  Send Email
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-element border border-white/20">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping animation-delay-2000"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Visit Us</h3>
              <div className="space-y-3 text-center">
                <div className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition-colors cursor-pointer">
                  <p className="font-semibold text-purple-700">IISM Campus</p>
                  <p className="text-gray-600">Manipur, India</p>
                  <p className="text-sm text-gray-500 mt-2">Open Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-2">Send Us a Message</h3>
                <p className="text-green-100">
                  We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="p-8 space-y-6 fade-in-element">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Enter your full name"
                        required
                      />
                      <span className="absolute left-4 top-3.5 text-gray-400">👤</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="your.email@example.com"
                        required
                      />
                      <span className="absolute left-4 top-3.5 text-gray-400">✉️</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <span className="absolute left-4 top-3.5 text-gray-400">📱</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white appearance-none"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="training">Training Programs</option>
                        <option value="consultation">Consultation Services</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="absolute left-4 top-3.5 text-gray-400">📋</span>
                      <span className="absolute right-4 top-3.5 text-gray-400">▼</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your inquiry, project, or how we can help you..."
                      required
                    ></textarea>
                    <span className="absolute left-4 top-3.5 text-gray-400">💬</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    I'd like to receive updates about IISM programs and initiatives
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="mr-2">🚀</span>
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="sm:w-auto bg-gray-100 text-gray-700 py-4 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 border-2 border-gray-200"
                  >
                    <span className="mr-2">📋</span>
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Contact Options */}
        
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image src="/logo.png" alt="IISM Logo" width={40} height={40} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">IISM</h3>
                  <p className="text-sm text-gray-400">Sustainable Management</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering rural communities through sustainable development and skill enhancement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#schemes" className="hover:text-white transition-colors">
                    Schemes
                  </a>
                </li>
                <li>
                  <a href="#departments" className="hover:text-white transition-colors">
                    Departments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Departments</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Education & Skill Management</li>
                <li>Farmers Welfare</li>
                <li>Crop Production</li>
                <li>Agri-Business</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@iism.org</li>
                <li>+91 XXXXX XXXXX</li>
                <li>Manipur, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 IISM - Integrated Institute of Sustainable Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
