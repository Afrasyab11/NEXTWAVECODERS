import Image from "next/image";
import icons from "@/assets";
const services = [
  {
    id: 1,
    title: "Full Stack AI Web Development",
    description:
      "Creating web applications that blend AI technologies into both frontend and backend, enhancing user experiences with features like NLP-driven interfaces and machine learning-powered functionality.",
  },
  {
    id: 2,
    title: "Fine Tuning",
    description:
      "Adjusting pre-trained machine learning models to optimize performance for specific tasks or datasets by tweaking parameters, hyperparameters, or training processes.",
  },
  {
    id: 3,
    title: "AI Mobile App Development",
    description:
      "Integrating AI capabilities into mobile apps for enhanced user experiences, including features like image recognition, voice recognition, personalization, and real-time data analysis.",
  },
  {
    id: 4,
    title: "LangChain",
    description:
      "LangChain is a framework for developing applications powered by language models, offering modules like Models, Prompts, Memory, Indexes, Chains, and Agents. Common use cases include Personal Assistants, Question Answering, Chatbots, and more. It provides reference documentation, an ecosystem for integration, and additional resources like LangChainHub and a Model Laboratory.",
  },
  {
    id: 5,
    title: "Web Scraping",
    description:
      "Automated extraction of data from websites for tasks such as market research, competitor analysis, and content aggregation, achieved through scripts or specialized software.",
  },
  {
    id: 6,
    title: "Chatbot",
    description:
      "AI-powered software simulating human-like conversation via text or voice interfaces, deployed across websites, messaging platforms, and mobile apps to provide automated assistance and engagement with users.",
  },
];

export const Services = () => {
  return (
    <>
      <div className="w-full flex flex-col space-y-12 h-[100vh]">
        <p className="text-[25px] uppercase  text- border-b-4 border-secondary text-white w-[90px]">
          Services
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full  gap-x-4 gap-y-4 ">
          {services?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-end space-y-4 bg-semi-primary border-[1px] h-[250px] border-secondary rounded-lg p-4"
            >
              <p className="text-xl text-white">{item?.title}</p>
              <p className="text-base text-white text-justify">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
};
