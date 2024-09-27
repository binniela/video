'use client'

import { useEffect, useRef } from 'react'
import VideoBackground from '../components/VideoBackground'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LandingPage() {
  const videoSrc = '/videos/background.mp4' // Replace with your video path
  const fallbackImageSrc = '/images/fallback.jpg' // Optional: Replace with a fallback image path
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div ref={heroRef} className="relative h-screen">
        <VideoBackground videoSrc={videoSrc} fallbackImageSrc={fallbackImageSrc} />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold leading-tight mb-4 text-black">
                Empowering<br />Your<br />Journey
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Auxilium is your partner in navigating the complexities of modern business. We provide innovative solutions to help you thrive in today&apos;s dynamic environment.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://main.d2nee70q3udcww.amplifyapp.com/"
                  className="px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Get Started
                </a>
                <a
                  href="https://main.d2nee70q3udcww.amplifyapp.com/"
                  className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center scroll-animate">About Our Company</h2>
          <p className="text-xl text-gray-700 mb-8 scroll-animate">
            Auxilium is dedicated to empowering businesses with cutting-edge solutions. Our team of experts works tirelessly to develop innovative strategies that drive growth and success in today&apos;s fast-paced market.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>To provide unparalleled support and innovative solutions to businesses of all sizes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>To be the leading force in business empowerment and technological advancement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p>Innovation, integrity, collaboration, and customer-centricity guide everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center scroll-animate">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Business Consulting</h3>
              <p>Expert advice to optimize your business processes and increase efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Technology Solutions</h3>
              <p>Cutting-edge tech implementations to keep you ahead of the competition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Market Analysis</h3>
              <p>In-depth market research to inform your strategic decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
              <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
              <p>Comprehensive digital strategies to revolutionize your business model.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center scroll-animate">Got a question?</h2>
          <div className="space-y-4">
            <FaqItem question="Can I use Auxilium for free?" />
            <FaqItem question="Is uplading images allowed?" />
            <FaqItem question="How easy is it to start using Auxilium?" />
            <FaqItem question="Is my data safe with Auxilium?" />
            <FaqItem question="Where is Auxilium data stored?" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FaqItem({ question }: { question: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button className="flex justify-between items-center w-full text-left">
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}
