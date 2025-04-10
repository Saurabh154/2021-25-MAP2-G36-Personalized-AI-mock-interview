"use client";
import React from "react";
import { ArrowRight, CheckCircle2, Globe2, Users2, Zap } from "lucide-react";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function Home() {
  const router = useRouter();  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between ">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <Globe2 className="h-8 w-8" />
            <span>AI Interview</span>
          </div>

          {/* User actions */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="hidden md:flex items-center space-x-5">
              <SignInButton>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button variant={'outline'}className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Master Your Technical Interviews with AI
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Practice with our AI interviewer and get real-time feedback.
              Perfect your responses and land your dream job in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>router.replace('/dashboard')}className="bg-white text-indigo-600 px-8 py-4 rounded-full font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center">
                Start Practicing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <Header/> */}
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Why Choose AI Interview?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-600" />}
              title="AI-Powered Practice"
              description="Get realistic interview experience with our advanced AI interviewer that adapts to your responses."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-8 w-8 text-indigo-600" />}
              title="Real-time Feedback"
              description="Receive instant feedback on your answers, communication skills, and technical accuracy."
            />
            <FeatureCard
              icon={<Users2 className="h-8 w-8 text-indigo-600" />}
              title="Industry Standards"
              description="Practice with questions based on real interviews from top tech companies."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers who have improved their interview
              skills and landed jobs at top tech companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
              name="Sarah Chen"
              role="Software Engineer at Google"
              quote="GiveInterview helped me prepare effectively for my technical interviews. The AI feedback was invaluable."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
              name="Michael Rodriguez"
              role="Senior Developer at Microsoft"
              quote="The realistic interview scenarios and detailed feedback helped me gain confidence in my abilities."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
              name="Emily Johnson"
              role="Full Stack Developer at Meta"
              quote="I credit my successful career transition to the practice I got through GiveInterview."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Ready to Ace Your Next Technical Interview?
          </h2>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-medium hover:bg-indigo-50 transition-colors inline-flex items-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
                <Globe2 className="h-8 w-8" />
                <span>AI Interview</span>
              </div>
              <p className="text-sm">
                Empowering developers to succeed in technical interviews through
                AI-powered practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 AI Interview. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, role, quote }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
}

export default Home;
