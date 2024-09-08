'use client';

import { useState } from 'react';

const WebPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl lg:text-5xl font-extrabold title-font my-4 ">Services</h1>
          <h2 className="sm:text-4xl lg:text-4xl font-extrabold title-font mb-4 mt-5 ">Web Design & Development</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
      
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Add your PricingCard components here with the updated code */}
          <PricingCard
            title="Startup WEBSITE PACKAGE"
            price="$299"
            features={[
              "5 Stock Photos",
              "5 Page Website",
              "3 Banner Design",
              "1 jQuery Slider Banner",
              "FREE Google Friendly Sitemap",
              "Complete W3C Certified HTML5",
              "Facebook Page Design",
              "Twitter Page Design",
              "Mobile Responsive will be Additional $99*",
              "CMS will be Additional $149*",
              "Complete Deployment",
              "Dedicated Accounts Manager",
              "100% Ownership Rights",
              "100% Satisfaction Guarantee",
              "100% Unique Design Guarantee",
              "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Professional WEBSITE PACKAGE"
              price="$649"
              features={[
                "10 Page Website",
                "CMS / Admin Panel Support",
                "8 Stock images",
                "5 Banner Designs",
               " 1 jQuery Slider Banner",
                "FREE Google Friendly Sitemap",
                "Complete W3C Certified HTML",
                "Facebook Page Design",
                "Twitter Page Design",
                "YouTube Page Design",
                "Dedicated Project Manager",
                "Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Elite WEBSITE PACKAGE"
              price="$1399"
              features={[
                "Upto 15 Unique Pages Website",
                "Conceptual and Dynamic Website",
                "Mobile Responsive",
               " Reservation/Appointment Tool (Optional)",
               " Online Payment Integration (Optional)",
                "Custom Forms",
                "Lead Capturing Forms (Optional)",
               " Striking Hover Effects",
                "Newsletter Subscription (Optional)",
               " Newsfeed Integration",
               "Social Media Integration",
                "Search Engine Submission",
               " 5 Stock Photos",
                "3 Unique Banner Design",
                "1 jQuery Slider Banner",
                "Complete W3C Certified HTML",
               " Facebook Page Design",
               " Twitter Page Design",
                "YouTube Page Design",
               " Dedicated Project Manager",
                "Complete Deployment",
               " Dedicated Accounts Manager",
                "100% Ownership Rights",
               " 100% Satisfaction Guarantee",
               " 100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Silver Website Package"
              price="$1,699"
              features={[
                "Custom Made, Interactive, Dynamic & High End Design",
                "Custom WP (or) Custom PHP Development",
               " 1 jQuery Slider Banner",
                "Up to 10 Custom Made Banner Designs",
                "10 Stock Images"  ,     
               "Unlimited Revisions",
               "Special Hover Effects",
                "Content Management System (CMS) Online",
                "Appointment/Scheduling/Online Ordering",
                "Online Payment Integration (Optional)",
               " Multi Lingual (Optional)",
                "Custom Dynamic Forms (Optional)",
                "Search Bar",
                "Live Feeds of Social Networks integration",
                "Mobile Responsive",
                "FREE 5 Years Domain Name",
                "Free Google Friendly Sitemap",
               "Complete W3C Certified HTML",
                "Dedicated Project Manager",
                "Dedicated Accounts Manager",
                "Facebook Page Design",
                "Twitter Page Design",
                "YouTube Page Design " ,   
               " Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
               " 100% Satisfaction Guarantee",
              "  100% Unique Design Guaranteeee",
                "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Business Website Package"
              price="$1,999"
              features={[
                "3 months of Search Engine Optimization",
                "Complete website content (verbiage)",
                "2 keywords (per page)",
                "Custom Made, Interactive, Dynamic & High End Design",
               "Custom WP (or) Custom PHP Development",
                "1 jQuery Slider Banner",
                "Up to 10 Custom Made Banner Designs",
                "10 Stock Images",      
               " Unlimited Revisions",
                "Special Hover Effects",
                "Content Management System (CMS)",
                "Online Appointment/Scheduling/Online Ordering",
                "Online Payment Integration (Optional)",
                "Multi Lingual (Optional)",
               " Custom Dynamic Forms (Optional)",
                "Signup Area (For Newsletters, Offers etc.)",
                "Search Bar",
                "Live Feeds of Social Networks integration",
               " Mobile Responsive",
                "15 Seconds 2D Explainer Video",
                "Voice - Over & Sound Effects",
                "Professional Script Writing",
               "Storyboard",
               " FREE 5 Years Domain Name",
               " Free Google Friendly Sitemap",
                "Search Engine Submission",
                "Complete W3C Certified HTML",
                "Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
               " 100% Unique Design Guarantee",
               " 100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Automated Conferencing Portal"
              price="$3,999"
              features={[
                "Unlimited Page Website",
               " Custom Content Management System (CMS)",
                "Unique Pages and UI Design",
                "Complete Custom Development",
                "Process Automation Tools",
                "Newsfeed Integration",
                "Social Media Plugins Integration",
                "Upto 40 Stock images",
                "10 Unique Banner Designs",
                "JQuery Slider",
               "Search Engine Submission",
                "Free Google Friendly Sitemap",
                "Custom Email Addresses",
                "Social Media Page Designs (Facebook, Twitter, Instagram)",
                "Complete W3C Certified HTML",
                "Dedicated Accounts Manager",
               " Complete Deployment",
                "Money Back Guarantee",
                "Automated Course Creation",
               " Video Conferencing",
                "Skills/Certification Tracking",
                "Mobile Learning",
                "Asynchronous Learning",
                "CRM Features ",               
                "Gamification",
                "Social Learning/Message Boards",
                "Motivational Triggers",
               " Forums And Webinars",
                "E-commerce And Subscriptions",
                "Online Course Booking",
                "Excellent Reporting",
                "Invoicing Integration",
                "Financial Integrations",
               "Student Information management",
                "Automated communications",
                "Learning Management System",
                "Quick And Easy Course Scheduling",
                "Reporting And Data Analysis",
                "Assessment Management & Live Feedback",
                "Gradebooks",
                "Quick User Integration",
                "Easy Payment Methods",
                "Online Communities & Social Engagement",
                "Curation of Resources And Adding Own Resources",
                "Complete Deployment",
                "Dedicated Accounts Manager",

                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
               "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Custom CRM Portal"
              price="$4999"
              features={[
                "Unlimited Page Website",
                "Unique Pages and UI Design",
                "Complete Custom Development",
                "Newsfeed Integration",
                "CRM (Customer Relation Management System)",
                "Performance and analytics",
                "Customization of Personal Details",
                "Process management",
                "Sales Automation",
                "Team Collaboration",
                "Marketing Automation",
                "Security" ,                       
                "Integrations",
                "Sales Reports" ,               
                "Trend Analytics"  ,              
                "Forecasting",
                "Territory Management",
                "Account Management",
                "Event Integration",
                "Advanced Data Security",
                "Account Management",
                "Opportunity Management",
                "Sales Forecasting",
                "Quotes"  ,               
                "Document Library",
                "Case Management",
                "Analytics and Dashboards",
                "Lead Management",
                "Resource Management",
                "Analytics"   ,         
                "Web Intelligence",
                "Automated Emails, Invoices & Estimates",
                "Automated Split invoicing",
                "Automated Combine invoices",
                "Invoice templates",
                "Financial Reports",
                "Generate automated sales reports",
                "Core Features " ,          
                "Reporting " ,                  
                "Accounting",
                "Tracking and Visibility",
                "Centralized Modules",
               " Human Resources Management",
                "Business Process Management",
                "Enterprise Analytics",
                "Business Intelligence",
                "Centralized Modules",
                "Accounting" ,               
                "Distribution",
                "Business Intelligence",        
                "Insights"   ,         
                "Standardization" ,       
                "Procurement",
                "Reporting and Analytics",
                "Projection",
                "Enterprise-wide integration",
                "Real-Time Operations",
                "Problem definition",
                "Description of the programs objectives and scope",
                "Assumptions",
               "Implementation costs",
                "Implementation schedule",
                "Development and operational risks",
                "Projected benefits",
                "Team Members"    ,              
                "Contracts",
                "Infrastructure Upgrades",
                "Create work plans and timelines",
                "Analyze gaps",
                "Configure parameters",
                "Migrate data"   ,             
                "Test system  "  ,         
               " Document system",
                "Online Payment Solutions (optional)",
                "Advanced Admin Features 2.0",
                "User Signup/Login Functionalities",
                "Advanced User Features",
                "User Profile Management",
                "General Configuration Features",
                "Complete W3C Certified HTML",
                "Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
               " 100% Money Back Guarantee*"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Beginners E-Commerce Package"
              price="$999"
              features={[
                "Conceptual and Dynamic Website",
                "Content Management System (CMS)",
                "Mobile Responsive",
                "Easy Product Search" ,     
                "Product Reviews",        
                "Up To 5 Products" ,   
                "Up To 3 Categories",
                "Full Shopping Cart Integration",
                "Payment Module Integration",
                "Sales & Inventory Management",
                "Jquery Slider",
                "Free Google Friendly Sitemap",
                "FREE 1 Years Hosting",
                "Custom Email Addresses",
                "Complete W3C Certified HTML",
                "Facebook Page Design",
                "Twitter Page Design",
                "YouTube Page Design" ,       
                "Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Corporate E-Commerce Package"
              price="$2,199"
              features={[
                "Conceptual and Dynamic Website",
                "Content Management System (CMS)",
               " Mobile Responsive",
                "Easy Product Search",
                "Product Reviews"  ,        
                "Up To 10 Products" ,   
                "Up To 6 Categories",
                "Full Shopping Cart Integration",
                "Payment Module Integration",
                "Sales & Inventory Management",
                "Jquery Slider",
                "Free Google Friendly Sitemap",
                "Custom Email Addresses",
                "Complete W3C Certified HTML",
               " Facebook Page Design",
                "Twitter Page Design",
               " YouTube Page Design",
               " Instagram Page Design " ,  
               " Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Elite E-Commerce Package"
              price="$3,499"
              features={[
                "By 6 Award Winning Designers",
                "Icon Design"  ,
                "UNLIMITED Revisions" ,     
                "Print Media",
                "Stationary Design (BusinessCard,Letterhead & Envelope)",
                "Invoice Design, Email Signature",
               " Bi-Fold Brochure (OR) 2 Sided Flyer Design",
                "Product Catalog Design",
                "Signage Design (OR) Label Design",
                "T-Shirt Design (OR) Car Wrap Design Website" ,  
                "E-Commerce Store Design",
                "Product Detail Page Design",
                "Unique Banner Slider",
                "Featured Products Showcase",
                "Full Shopping Cart Integration",
               " Up To 15 Products"  , 
                "Up To 9 Categories",
               " Product Rating & Reviews",
                "Easy Product Search",
               " Payment Gateway Integration",
               " Multi-currency Support",
               " Content Management System",
                "Customer Log-in Area",
                "Mobile Responsive",
                "Social Media Plugins Integration",
               " Tell a Friend Feature",
                "Mobile Responsive",
                "Social Media Pages(Facebook,Twitter,Instagram,YouTube)",

                "Value Added Services",
                "Dedicated Account Manager",
                "Unlimited Revisions",
               " All Final File Formats" ,       
                "Complete Deployment",
               " Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
               title="Custom CRM/ERP Portal Website Package
              "
                          price="$9,999"
                          features={[
                            "Unique Pages and UI Design",
                            "Complete Custom Development",
                           " Newsfeed Integration",
                            "CRM (Customer Relation Management System)",
                           " Performance and analytics",
                            "Customization of Personal Details",
                            "Process management",
                            "Sales Automation",
                            "Team Collaboration",
                           " Marketing Automation" ,      
                            "Security " ,                             
                            "Integrations" ,                              
                            "Mobile Notifications",
                            "Sales Reports"   ,            
                            "Trend Analytics" ,               
                            "Forecasting"  ,               
                            "Territory Management",
                            "Account Management",
                            "Event Integration",
                            "Advanced Data Security",
                            "Opportunity Management",
                            "Sales Forecasting",
                            "Call/Video Logging" ,                   ,
                            "Quotes"    ,                      
                            "Contracts"  ,               
                            "Document Library",
                            "Case Management",
                            "Analytics and Dashboards",
                            "Lead Management",
                            "Resource Management",
                            "Analytics"   ,              
                            "Web Intelligence",
                            "Automated Emails, Invoices & Estimates",
                            "Automated Split invoicing",
                            "Automated Combine invoices",
                            "Invoice templates",
                            "Financial Reports",
                            "Generate extremely detailed reports for your sales and services. Filter reports by date-range and category to see whats making you the most money.",
                            "Generate automated sales reports",
                            "Core Modules",
                            "Human Resources "   ,                       
                            "Integration"   ,                                          
                            "Business Intelligence",
                            "Sales/Marketing " ,                                 
                           " Finance",
                            "Core Features"  ,                                           
                           " Reporting",
                            "Accounting"  ,                                   
                            "Tracking and Visibility",
                            "Centralized Modules",
                            "ERP Database"    ,                                
                            "Human Resources Management",
                            "Business Process Management",
                            "Enterprise Analytics",
                            "Business Intelligence"  ,            
                            "Business Process Management",
                            "Centralized Modules",
                            "ERP Database "   ,                                           
                            "Integrations",
                            "If (Manufacturing) (Optional)",
                            "Accounting"  ,                                       
                            "Distribution",
                           " Business Intelligence" ,      
                            "Insights "  ,                                           
                            "Standardization" ,                                         
                            "Procurement",
                            "Reporting and Analytics",
                            "Forecasting" ,                                       
                            "Projection",
                            "Enterprise-wide integration",
                            "Real-Time Operations",
                           " Problem definition",
                            "Description of the programs objectives and scope",
                            "Assumptions",
                            "Implementation costs",
                            "Implementation schedule",
                            "Development and operational risks",
                            "Projected benefits "  ,                       
                            "Team Members "  ,                                            
                            "Contracts",
                            "Infrastructure Upgrades",
                            "Create work plans and timelines",
                            "Analyze gaps",
                            "Configure parameters",
                            "Migrate data" ,                           
                           " Test system",                                              
                            "Document system",
                            "Advanced Admin Features 2.0",
                            "User Signup/Login Functionalities",
                            "Advanced User Features",
                            "User Profile Management",
                            "General Configuration Features",
                            "Complete W3C Certified HTML",
                            "Complete Deployment",
                           " Dedicated Accounts Manager",
                            "100% Ownership Rights",
                            "100% Satisfaction Guarantee",
                            "100% Unique Design Guarantee",
                            "100% Money Back Guarantee"
            ]}
            buttonText="Button"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          {/* Add other PricingCard components similarly */}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, badge, buttonText, buttonStyle, footerText }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${badge ? "border-indigo-500" : "border-gray-700"}`}>
        {badge && (
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{badge}</span>
        )}
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">{title}</h2>
        <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">{price}</h1>
        {features.slice(0, expanded ? features.length : 5).map((feature, index) => (
          <p key={index} className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {feature}
          </p>
        ))}
        {features.length > 5 && (
          <button
            className="text-indigo-500 mt-3"
            onClick={toggleExpanded}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
        <button className={`flex items-center mt-auto ${buttonStyle} border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded`}>
          {buttonText}
        </button>
        <p className="text-xs text-gray-400 mt-3">{footerText}</p>
      </div>
    </div>
  );
};

export default WebPricing;
