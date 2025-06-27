import { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../Home/FooterSection";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);
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
            Terms & Conditions
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-semibold"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Please read our terms and conditions carefully before using our services.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
          <a href="#terms-content" className="scroll-down">
            Scroll Down{" "}
            <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
          </a>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section id="terms-content" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none" data-aos="fade-up">
            
            <div className="mb-8">
              {/* <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p> */}
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using the services provided by SUDAMA TELECOM PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
                you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-6">
                SUDAMA TELECOM provides broadband internet services, including various speed packages and related telecommunications 
                services. Our services are subject to availability in your area and technical feasibility.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Service Plans and Pricing</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>All service plans and pricing are as advertised on our website and marketing materials</li>
                <li>Prices are subject to change with 30 days written notice</li>
                <li>Installation charges and equipment costs are separate unless specified otherwise</li>
                <li>Monthly charges are billed in advance</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Payment Terms</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>Monthly service charges are due and payable in advance</li>
                <li>Late payment may result in service suspension or termination</li>
                <li>A reconnection fee may apply for service restoration after suspension</li>
                <li>All taxes and government levies are additional to the service charges</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Installation and Equipment</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>Installation will be scheduled based on technical feasibility and availability</li>
                <li>Equipment provided remains property of SUDAMA TELECOM</li>
                <li>Customer is responsible for the care and security of installed equipment</li>
                <li>Damage or loss of equipment will be charged to the customer</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Service Level and Performance</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>Internet speeds are &quot;up to&quot; the advertised speeds and may vary based on network conditions</li>
                <li>Service availability is typically 99.5% uptime, excluding scheduled maintenance</li>
                <li>We reserve the right to perform maintenance that may temporarily affect service</li>
                <li>Customer support is available during business hours as specified</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Acceptable Use Policy</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>Services must be used in compliance with all applicable laws and regulations</li>
                <li>Illegal activities, spam, or malicious use is strictly prohibited</li>
                <li>Excessive usage that affects network performance may result in service limitations</li>
                <li>Reselling of services without written permission is not allowed</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Service Termination</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>Either party may terminate service with 30 days written notice</li>
                <li>We may terminate service immediately for breach of terms or non-payment</li>
                <li>Upon termination, all equipment must be returned in good condition</li>
                <li>Pro-rated refunds may apply for prepaid services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                SUDAMA TELECOM&apos;s liability is limited to the monthly service charge. We are not liable for indirect, 
                incidental, or consequential damages arising from service interruptions or equipment failure.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Privacy and Data Protection</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>We respect your privacy and protect your personal information</li>
                <li>Usage data may be collected for service improvement and billing purposes</li>
                <li>Personal information will not be shared with third parties without consent</li>
                <li>Please refer to our Privacy Policy for detailed information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Technical Support</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>Technical support is available during business hours</li>
                <li>Emergency support may be available for critical issues</li>
                <li>Support response times may vary based on issue complexity</li>
                <li>Remote assistance may be provided when possible</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Modifications to Terms</h2>
              <p className="text-gray-700 mb-6">
                These terms may be updated from time to time. Continued use of our services after changes 
                constitutes acceptance of the modified terms. We will notify customers of material changes 
                with reasonable advance notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms are governed by the laws of India. Any disputes shall be subject to the 
                jurisdiction of courts in Porbandar, Gujarat.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Contact Information</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-2">For questions about these terms and conditions, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>SUDAMA TELECOM PRIVATE LIMITED</strong></p>
                  <p>Nr. Dr. Bharat Shah Ravliya Plot, Porbandar 360575</p>
                  <p>Phone: +91 9328291290, +91 9624340302</p>
                  <p>Email: akashbroadbandpbr@gmail.com</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
                <p className="text-blue-800">
                  <strong>Note:</strong> By using our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TermsConditions;
