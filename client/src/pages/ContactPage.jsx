import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheck,
  FaExclamationTriangle,
  FaSpinner,
  FaHeartbeat,
  FaUserMd,
  FaCross,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import FloatingHearts from "../components/FloatingHearts";
import { submitContactForm } from "../services/contactService";
import MedicalBackgroundGraphics from "../components/MedicalBackgroundGraphics";
// Medical Background Graphics Component

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fieldFocus, setFieldFocus] = useState({});

  const medicalDepartments = [
    { value: "", label: "Select a department" },
    { value: "cardiology", label: "Cardiology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "neurology", label: "Neurology" },
    { value: "oncology", label: "Oncology" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "dermatology", label: "Dermatology" },
    { value: "ophthalmology", label: "Ophthalmology" },
    { value: "psychiatry", label: "Psychiatry" },
    { value: "general-surgery", label: "General Surgery" },
    { value: "emergency-medicine", label: "Emergency Medicine" },
    { value: "internal-medicine", label: "Internal Medicine" },
    { value: "radiology", label: "Radiology" },
    { value: "pathology", label: "Pathology" },
    { value: "urology", label: "Urology" },
    { value: "nephrology", label: "Nephrology" },
    { value: "other", label: "Other" },
  ];

  // Real-time validation
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Name should only contain letters";
        return "";

      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email";
        return "";

      case "phone":
        if (!value) return "Phone number is required";
        if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value))
          return "Please enter a valid phone number";
        return "";

      case "address":
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 10)
          return "Address must be at least 10 characters";
        return "";

      case "department":
        if (!value) return "Please select a department";
        return "";

      case "message":
        if (value.trim() && value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    const error = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleFieldFocus = (fieldName) => {
    setFieldFocus((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleFieldBlur = (fieldName) => {
    setFieldFocus((prev) => ({
      ...prev,
      [fieldName]: false,
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        department: "",
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName) => {
    if (formErrors[fieldName]) return "error";
    if (formData[fieldName] && !formErrors[fieldName]) return "success";
    return "default";
  };

  const getFieldIcon = (fieldName) => {
    const status = getFieldStatus(fieldName);
    if (status === "error")
      return <FaExclamationTriangle className="text-red-500" />;
    if (status === "success") return <FaCheck className="text-[#1aab3c]" />;
    return null;
  };

  const getFieldClasses = (fieldName) => {
    const baseClasses =
      "w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg transition-colors duration-200 text-sm sm:text-base";
    const status = getFieldStatus(fieldName);

    switch (status) {
      case "error":
        return `${baseClasses} border-red-300 focus:ring-red-500 bg-red-50`;
      case "success":
        return `${baseClasses} border-[#1aab3c] focus:ring-[#1aab3c] bg-green-50`;
      default:
        return `${baseClasses} border-gray-300 focus:ring-blue-500`;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white/70 backdrop-blur-sm pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-4 sm:pb-8 md:pb-12 lg:pb-16 relative overflow-hidden">
        {/* Floating Hearts Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FloatingHearts />
        </div>

        <div className="relative z-10">
          {/* Success Message Modal Card */}
          {submitSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <FaCheck className="text-[#1aab3c] text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-green-700 text-base sm:text-lg mb-6">
                    Your details have been successfully submitted. We will get
                    back to you soon.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      What happens next?
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#1aab3c] rounded-full mr-3"></span>
                        We'll review your inquiry within 24 hours
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#1aab3c] rounded-full mr-3"></span>
                        Our medical team will contact you via phone or email
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#1aab3c] rounded-full mr-3"></span>
                        We'll schedule your appointment at your convenience
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="w-full bg-[#1aab3c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#7a9f35] transition-colors duration-200 text-lg"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
              {/* Left Section - Information */}
              <ScrollAnimation direction="left" delay={0.1}>
                <div className="space-y-6 sm:space-y-8 w-full max-w-xl mx-auto xl:mx-0">
                  {/* Navigation Button */}
                  <ScrollAnimation direction="up" delay={0.1}>
                    <Link to="/about">
                      <button className="group border-2 border-[#222] text-[#222] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 transition-colors duration-200 hover:bg-[#222] hover:text-white focus:outline-none mb-8 sm:mb-10">
                        About Aram Medicals
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">
                          <svg
                            width="18"
                            height="18"
                            className="sm:w-6 sm:h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </ScrollAnimation>

                  {/* Headline */}
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                      Contact us for all your medical needs
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                      Get in touch with our medical professionals for
                      consultations, appointments, and{" "}
                      <span className="font-semibold">healthcare services</span>
                      . We're here to help you with all your{" "}
                      <span className="font-semibold">medical concerns</span>.
                    </p>
                  </div>

                  {/* Address Section */}
                  <div className="border-t border-gray-200 pt-6 sm:pt-8">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-blue-400 text-lg sm:text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-left">
                          Aram Medical Foundation
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          91,91/1-91/4, New Scheme road, Pollachi - 642 001,
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="border-t border-gray-200 pt-6 sm:pt-8">
                    <div className="flex items-start space-x-3 mb-4 sm:mb-6">
                      <FaEnvelope className="text-blue-400 text-lg sm:text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                          Contact
                        </h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors duration-200">
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
                          Email
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 break-all">
                          info@arammedicalfoundation.com
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors duration-200">
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
                          Mobile
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          +91 8667411477
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right Section - Contact Form */}
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100 w-full max-w-xl mx-auto xl:mx-0">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    Get in Touch
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3 text-left"
                      >
                        Full Name<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus("fullName")}
                          onBlur={() => handleFieldBlur("fullName")}
                          placeholder="Enter your full name"
                          className={getFieldClasses("fullName")}
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldIcon("fullName")}
                        </div>
                      </div>
                      {formErrors.fullName && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <FaExclamationTriangle className="mr-1 flex-shrink-0" />
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3 text-left"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus("email")}
                          onBlur={() => handleFieldBlur("email")}
                          placeholder="Enter your email address"
                          className={getFieldClasses("email")}
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldIcon("email")}
                        </div>
                      </div>
                      {formErrors.email && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <FaExclamationTriangle className="mr-1 flex-shrink-0" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3 text-left"
                      >
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus("phone")}
                          onBlur={() => handleFieldBlur("phone")}
                          placeholder="Enter your phone number"
                          className={getFieldClasses("phone")}
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldIcon("phone")}
                        </div>
                      </div>
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <FaExclamationTriangle className="mr-1 flex-shrink-0" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm sm:text-base font-medium text-gray-900 mb-2 sm:mb-3 text-left"
                      >
                        Address<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus("address")}
                          onBlur={() => handleFieldBlur("address")}
                          placeholder="Enter your complete address"
                          rows={3}
                          className={
                            getFieldClasses("address") + " resize-none"
                          }
                          required
                        />
                        <div className="absolute right-3 top-3">
                          {getFieldIcon("address")}
                        </div>
                      </div>
                      {formErrors.address && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <FaExclamationTriangle className="mr-1 flex-shrink-0" />
                          {formErrors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="department"
                        className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2 text-left"
                      >
                        Medical Department
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus("department")}
                          onBlur={() => handleFieldBlur("department")}
                          className={
                            getFieldClasses("department") +
                            " bg-white text-sm sm:text-base"
                          }
                          required
                        >
                          {medicalDepartments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.icon} {dept.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldIcon("department")}
                        </div>
                      </div>
                      {formErrors.department && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <FaExclamationTriangle className="mr-1 flex-shrink-0" />
                          {formErrors.department}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2 text-left"
                      >
                        Message{" "}
                        <span className="text-gray-500 text-xs">
                          ({formData.message.length}/500)
                        </span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus("message")}
                          onBlur={() => handleFieldBlur("message")}
                          rows={4}
                          maxLength={500}
                          placeholder="Please describe your medical concern or inquiry..."
                          className={
                            getFieldClasses("message") +
                            " resize-none text-sm sm:text-base"
                          }
                        />
                        <div className="absolute right-3 top-3">
                          {getFieldIcon("message")}
                        </div>
                      </div>
                      {formErrors.message && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                          <FaExclamationTriangle className="mr-1 flex-shrink-0" />
                          {formErrors.message}
                        </p>
                      )}
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Minimum 10 characters</span>
                        <span
                          className={
                            formData.message.length > 450
                              ? "text-orange-500"
                              : ""
                          }
                        >
                          {formData.message.length}/500
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 text-sm sm:text-base ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#1aab3c] hover:bg-[#212878] focus:ring-[#1aab3c]"
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <FaSpinner className="animate-spin mr-2" />
                          <span className="hidden sm:inline">
                            Sending Message...
                          </span>
                          <span className="sm:hidden">Sending...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
