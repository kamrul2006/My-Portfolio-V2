
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Send,
  MessageSquare,
  Github,
  Linkedin,
  Facebook,
  Link as LinkIcon,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:kamrulislamapurba@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "kamrulislamapurba@gmail.com",
      href: "mailto:kamrulislamapurba@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "Your phone number",
      href: null,
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kishoreganj, Bangladesh",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/kamrul.islam.apurba",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kamrul-islam-apurba-kg/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "YOUR_GITHUB_URL",
      label: "GitHub",
    },
    {
      icon: LinkIcon,
      href: "https://kiapurba.vercel.app/",
      label: "Portfolio",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-400">
            <Mail size={15} />
            Get In Touch
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            Have a project in mind, a question, or just want to say hello?
            I'd love to hear from you!
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Card */}
          <div className="rounded-3xl border border-white/10 bg-[#101214] p-7 md:p-9">

            <h3 className="text-2xl font-bold">
              Let's <span className="text-cyan-400">Connect</span>
            </h3>

            <p className="mt-3 max-w-md leading-7 text-gray-400">
              Feel free to reach out. I'm always open to discussing
              new projects, creative ideas, and opportunities.
            </p>

            {/* Contact Information */}
            <div className="mt-9 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-gray-400">
                        {item.title}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-all font-medium transition hover:text-cyan-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                    >
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-[#101214] p-7 md:p-9">

            <h3 className="text-2xl font-bold">
              Send a <span className="text-cyan-400">Message</span>
            </h3>

            <p className="mt-3 text-gray-400">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare
                  size={20}
                  className="absolute left-4 top-5 text-cyan-400"
                />

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <Send size={19} />
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
