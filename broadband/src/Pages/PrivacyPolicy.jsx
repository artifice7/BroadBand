import { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../Home/FooterSection";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full font-poppins">
      {/* Header Section */}
      <section className="h-screen bg-[url('/About-main.png')] bg-cover bg-center relative">
        <Navbar />
        <div className="flex flex-col relative top-1/3 pl-5 sm:pl-10 2xl:pl-32 mx-auto">
          <h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black mb-4 z-20 relative"
            style={{ fontFamily: "MADE Gentle, sans-serif" }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Privacy Policy
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-semibold"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
          <a href="#privacy-content" className="scroll-down">
            Scroll Down{" "}
            <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
          </a>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section id="privacy-content" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none" data-aos="fade-up">
            
            <div className="mb-8">
              {/* <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p> */}
              <p className="text-gray-700 leading-relaxed">
                At SUDAMA TELECOM Private Limited, we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our broadband internet services, visit our website, or interact with us.
              </p>
            </div>

            <div className="space-y-8">
              
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name, address, phone number, and email address</li>
                  <li>Government-issued identification documents (for service verification)</li>
                  <li>Payment information and billing details</li>
                  <li>Service usage data and preferences</li>
                  <li>Technical support and customer service interactions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">Technical Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Internet usage patterns and bandwidth consumption</li>
                  <li>Device information (IP address, MAC address, device type)</li>
                  <li>Network performance and diagnostic data</li>
                  <li>Website cookies and browsing data (on our website only)</li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Providing and maintaining broadband internet services</li>
                  <li>Processing payments and managing billing</li>
                  <li>Customer support and technical assistance</li>
                  <li>Service improvements and network optimization</li>
                  <li>Compliance with legal and regulatory requirements</li>
                  <li>Marketing communications (with your consent)</li>
                  <li>Fraud prevention and security monitoring</li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in service delivery</li>
                  <li><strong>Legal Requirements:</strong> When required by law enforcement or court orders</li>
                  <li><strong>Emergency Situations:</strong> To protect safety and prevent illegal activities</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you have given explicit permission</li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">We implement robust security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and employee training on data protection</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular software updates and security patches</li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information for as long as necessary to provide our services and comply 
                  with legal obligations. Customer account information is typically retained for the duration of 
                  your service agreement plus 7 years for billing and tax purposes, unless a longer retention 
                  period is required by law.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies and Website Data</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to enhance your browsing experience. We use:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> To understand website usage and improve our services</li>
                  <li><strong>Marketing Cookies:</strong> For personalized content (with your consent)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices of these external sites. We encourage you to review their privacy policies before 
                  providing any personal information.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="1000">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect 
                  personal information from children. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="1100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any significant 
                  changes by email or through our website. The updated policy will be effective from the date 
                  of publication.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="1200" className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>SUDAMA TELECOM Private Limited</strong></p>
                  <p className="text-gray-700">Nr. Dr. Bharat Shah Ravliya Plot, Porbandar 360575</p>
                  <p className="text-gray-700">Phone: +91 9328291290 / +91 9624340302</p>
                  <p className="text-gray-700">Email: akashbroadbandpbr@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy; 