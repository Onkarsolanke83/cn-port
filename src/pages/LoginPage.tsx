import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Lock } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import LoginForm from '../components/login/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Account Login"
        subtitle="Sign in to access administrative features and manage study materials"
      />

      <Section className="bg-white dark:bg-gray-900">
        <div className="max-w-md mx-auto">
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login to Your Account</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Enter your credentials to access the administrative area
                </p>
              </div>

              <LoginForm />

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This login area is for teachers and administrators only.
                  <br />
                  Students can access all study materials without logging in.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default LoginPage;