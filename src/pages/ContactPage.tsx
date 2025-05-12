import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Contact Me"
        subtitle="Have questions about the course materials or want to discuss networking topics? Get in touch!"
      />

      <Section className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Whether you have questions about specific study materials, need help with networking concepts, 
                or just want to connect, I'm here to help. Feel free to reach out through any of the 
                following contact methods or by filling out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contact@neteduportal.com</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                    I respond to emails within 24-48 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                    Monday through Friday, 9am-5pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 University Campus<br />
                    Building 4, Room 201<br />
                    Anytown, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday, Wednesday: 10am - 2pm<br />
                    Thursday: 1pm - 5pm<br />
                    Or by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <div className="h-96 bg-gray-300 dark:bg-gray-700 mt-12">
        {/* This would be replaced with an actual map integration */}
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interactive map would be displayed here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;