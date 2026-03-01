// import React from 'react';
// import { Users, Box, Database, ArrowRight } from 'lucide-react';

// interface ApplicationCard {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   features: string[];
//   stats: {
//     value: string;
//     label: string;
//   }[];
// }

// const ApplicationCard: React.FC<ApplicationCard> = ({ 
//   icon, title, description, features, stats
// }) => {
//   return (
//     <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-red-500/50 dark:hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
//       {/* Gradient background on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       <div className="relative p-8 h-full flex flex-col">
//         {/* Icon and Title */}
//         <div className="mb-6">
//           <div className="mb-4">
//             <div className="text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
//               {icon}
//             </div>
//           </div>
//           <h3 className="text-2xl font-logo font-bold text-gray-900 dark:text-white mb-2">
//             {title}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//             {description}
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex items-baseline gap-2">
//               <span className="text-4xl font-logo font-extrabold bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400 text-transparent bg-clip-text">
//                 {stat.value}
//               </span>
//               <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="flex-1">
//           <ul className="space-y-3">
//             {features.map((feature, index) => (
//               <li key={index} className="flex items-start gap-3">
//                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
//                 <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
//                   {feature}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA Link */}
//         <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
//           <a 
//             href="#contact"
//             onClick={(e) => {
//               e.preventDefault();
//               const element = document.querySelector('#contact');
//               if (element) {
//                 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//               }
//             }}
//             className="flex items-center text-red-600 dark:text-red-400 font-medium text-sm group-hover:gap-3 transition-all hover:text-red-700 dark:hover:text-red-300 cursor-pointer"
//           >
//             <span>Contact</span>
//             <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Applications: React.FC = () => {
//   const applications = [
//     {
//       icon: <Box size={20} />,
//       title: 'AI Automation',
//       description: 'Intelligent workflows that automate complex business processes.',
//       stats: [
//         { value: '80%', label: 'Efficiency Gain' }
//       ],
//       features: [
//         'Process Automation',
//         'Smart Decision Making',
//         'Seamless Integration'
//       ]
//     },
//     {
//       icon: <Database size={20} />,
//       title: 'AI Analytics',
//       description: 'Transform data into actionable insights with advanced AI models.',
//       stats: [
//         { value: '3x', label: 'Faster Insights' }
//       ],
//       features: [
//         'Predictive Analytics',
//         'Real-time Dashboards',
//         'Custom Reports'
//       ]
//     },
//     {
//       icon: <Users size={20} />,
//       title: 'AI Infrastructure',
//       description: 'Scalable cloud platform powered by cutting-edge AI technology.',
//       stats: [
//         { value: '99.9%', label: 'Uptime' }
//       ],
//       features: [
//         'Auto Scaling',
//         'Enterprise Security',
//         'Global Deployment'
//       ]
//     }
//   ];

//   return (
//     <section id="applications" className="py-20 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-sm relative">      
//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-logo font-bold text-gray-900 dark:text-white leading-tight mb-4">
//             AI-Powered Enterprise Solutions
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             Transform your business with intelligent automation and cutting-edge AI technology.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {applications.map((app, index) => (
//             <ApplicationCard
//               key={index}
//               icon={app.icon}
//               title={app.title}
//               description={app.description}
//               features={app.features}
//               stats={app.stats}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Applications;