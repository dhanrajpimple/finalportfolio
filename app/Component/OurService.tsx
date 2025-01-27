import { FaMobileAlt, FaDesktop, FaServer, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We create cutting-edge mobile applications for iOS and Android platforms, ensuring a seamless user experience and robust functionality.",
    icon: <FaMobileAlt aria-label="Mobile App Development Icon" />,
  },
  {
    title: "Frontend Development",
    description:
      "Our frontend development services focus on creating responsive, intuitive, and visually appealing user interfaces using the latest web technologies.",
    icon: <FaDesktop aria-label="Frontend Development Icon" />,
  },
  {
    title: "Backend Development",
    description:
      "We build scalable and secure backend systems that power your applications, ensuring high performance and reliability.",
    icon: <FaServer aria-label="Backend Development Icon" />,
  },
  {
    title: "AI Integration",
    description:
      "We integrate advanced AI capabilities into your applications, from natural language processing to machine learning models, enhancing your product's intelligence.",
    icon: <FaRobot aria-label="AI Integration Icon" />,
  },
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ title, description, icon }, index) => (
            <div
              key={`service-${index}`}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl text-blue-600 dark:text-blue-400 mr-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
