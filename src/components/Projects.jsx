import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Bot,
  Map,
  Cpu,
  Gamepad,
} from "lucide-react";

// Enhanced project data with detailed descriptions and modal popups
const projects = [
  {
    id: 1,
    title: "Voice Assisted Meeting Planner",
    shortDescription:
      "An intelligent, voice-powered bot that manages your Google Calendar using natural language and Google Gemini AI. Schedule, view, and manage meetings hands-free—perfect for busy professionals!",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Make scheduling and managing meetings as easy as having a conversation. No more typing or manual calendar juggling—just talk to your AI assistant!
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Built a conversational bot that understands natural language and context ("next Friday at 2 PM").</li>
            <li>Integrated Google Calendar API for seamless event creation, viewing, and deletion.</li>
            <li>Implemented smart scheduling to detect conflicts and suggest alternatives.</li>
            <li>Added support for recurring meetings and both voice and text commands.</li>
            <li>Used Google Gemini AI for advanced language understanding and context awareness.</li>
          </ul>
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul className="list-disc ml-5">
            <li>Natural language conversation—talk to the bot like a real assistant.</li>
            <li>Google Calendar integration for all event management.</li>
            <li>Smart scheduling, context awareness, and recurring meetings.</li>
            <li>Voice and text support for maximum flexibility.</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> Google Gemini AI, Google Calendar API, Node.js, React, Speech Recognition
        </p>
      </>
    ),
    image: "voice assistant scheduling calendar with AI interface",
    tags: ["AI", "Voice", "Google Calendar", "Gemini AI", "Node.js", "React"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Bot className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 2,
    title: "Real Time Text To Speech (TTS)",
    shortDescription:
      "A real-time TTS app that speaks as you type—supports punctuation-based and pause-based speech for natural, interactive experiences.",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Instantly convert typed text into speech for accessibility, live dictation, and chat-like scenarios.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Developed two TTS versions: one that speaks at punctuation, and one that speaks after a pause in typing.</li>
            <li>Implemented real-time text processing and speech synthesis for immediate feedback.</li>
            <li>Designed for both natural language and live chat/dictation use cases.</li>
          </ul>
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul className="list-disc ml-5">
            <li><b>Version 2:</b> Speaks at full stops, commas, and other punctuation—great for natural language output.</li>
            <li><b>Version 3:</b> Speaks when you pause typing for 1 second—perfect for live chat or dictation.</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> React, Web Speech API, JavaScript
        </p>
      </>
    ),
    image: "real time text to speech app interface with live feedback",
    tags: ["TTS", "Speech", "React", "Web Speech API", "Accessibility"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Cpu className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 3,
    title: "Custom Geobot (Offline Q&A)",
    shortDescription:
      "A robust geobot for field researchers—ask questions about locations and geological data even without internet!",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Empower field teams to access and query geological data in remote areas, streamlining research and data collection.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Built an Angular frontend with interactive maps, marker clustering, and offline support.</li>
            <li>Implemented Node.js backend for user management and geospatial queries.</li>
            <li>Developed high-performance ASP.NET Core APIs using Dapper for fast data access.</li>
            <li>Modeled and optimized SQL Server schemas for efficient data retrieval.</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> Angular, Node.js, ASP.NET Core, Dapper, SQL Server
        </p>
      </>
    ),
    image: "map interface with location markers and data overlays for geobot",
    tags: ["Angular", "Node.js", "ASP.NET Core", "Dapper", "SQL Server"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Map className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 4,
    title: "X-Ray Classifier (ML)",
    shortDescription:
      "AI-powered pipeline that classifies X-rays for TB, Pneumonia, COVID-19, and more—helping radiologists prioritize urgent cases.",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Automate disease detection and support medical teams with fast, accurate triage.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Processed and cleaned 20,000+ X-ray images from diverse datasets.</li>
            <li>Engineered data augmentation for robust model generalization.</li>
            <li>Trained and fine-tuned deep learning models (ResNet50, VGG16, custom CNN) in TensorFlow and PyTorch.</li>
            <li>Achieved 92%+ validation accuracy and added Grad-CAM for explainable AI.</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> TensorFlow, PyTorch, CNN, Grad-CAM, NumPy, Pandas
        </p>
      </>
    ),
    image: "medical x-ray images with AI analysis overlay",
    tags: ["TensorFlow", "PyTorch", "CNN", "Image Processing", "Grad-CAM"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Cpu className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 5,
    title: "City Escape Game (Java)",
    shortDescription:
      "A fast-paced 2D cop-and-thief chase game—dodge, strategize, and escape through dynamic city terrain!",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Master OOP design and real-time game logic while delivering a fun, challenging experience.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Architected the game with modular classes for map, objects, and terrain.</li>
            <li>Implemented file-based level loading, tile mapping, and asset management for replayability.</li>
            <li>Added AI pathfinding for cops, player controls, and real-time collision detection.</li>
            <li>Created score tracking, power-ups (diamonds, nitro), and a millisecond-precision timer.</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> Java, Swing, File I/O, OOP, Game Loop Architecture
        </p>
      </>
    ),
    image: "pixel art style 2D game screen with characters and city background",
    tags: ["Java", "OOP", "Game Dev", "File I/O"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Gamepad className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 6,
    title: "PlantCare App (Flutter)",
    shortDescription:
      "A beautiful Flutter app to keep your plants happy—track care routines, get reminders, and manage your indoor jungle!",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Help plant lovers easily manage watering, fertilizing, and plant care with a delightful mobile experience.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Designed a modern Flutter UI for adding plants, viewing care history, and tracking routines.</li>
            <li>Integrated local notifications for watering and fertilizing reminders.</li>
            <li>Enabled offline access and fast data storage with SQLite.</li>
            <li>Added intuitive swipe actions for marking care tasks as done.</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> Flutter, Dart, SQLite, Local Notifications
        </p>
      </>
    ),
    image: "mobile app interface showing plant care information and reminders",
    tags: ["Flutter", "Dart", "Mobile", "Notifications"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Bot className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 7,
    title: "HR Policy Q&A Assistant",
    shortDescription:
      "A FastAPI chatbot that answers HR policy questions from your PDF using Gemini AI and ChromaDB for lightning-fast, context-aware answers.",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Instantly answer employee questions about HR policies by querying your actual PDF—no more searching through pages!
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Built a FastAPI backend that loads, splits, and embeds your HR policy PDF for semantic search.</li>
            <li>Integrated ChromaDB for fast, accurate retrieval of relevant policy chunks.</li>
            <li>Used Google's Gemini model to generate context-aware answers with page references.</li>
            <li>Designed a REST API for easy integration with chatbots or web apps.</li>
            <li>Implemented embedding caching for instant repeated queries.</li>
          </ul>
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul className="list-disc ml-5">
            <li>Query your HR policy PDF through a REST API</li>
            <li>ChromaDB for fast semantic retrieval</li>
            <li>Google Gemini for accurate, context-aware answers</li>
            <li>FastAPI backend with robust error handling</li>
            <li>Embeddings cache for speed</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> FastAPI, ChromaDB, Google Gemini, Python, REST API
        </p>
      </>
    ),
    image: "chatbot answering HR policy questions with PDF and AI icons",
    tags: ["FastAPI", "ChromaDB", "Gemini AI", "Python", "RAG", "REST API"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Bot className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 8,
    title: "AI Tutor",
    shortDescription:
      "A personalized AI-powered learning system that assesses your knowledge, generates custom questions, and builds your learning path.",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Help anyone master new topics efficiently with a tutor that adapts to your strengths and weaknesses.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Designed a modular, SOLID-principled backend for personalized learning assessment.</li>
            <li>Built AI logic to generate tailored questions and adapt learning paths in real time.</li>
            <li>Created a clean, scalable architecture for easy feature expansion.</li>
          </ul>
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul className="list-disc ml-5">
            <li>Personalized learning assessment and feedback</li>
            <li>AI-generated questions and adaptive learning paths</li>
            <li>Clean, scalable codebase using SOLID principles</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> Python, AI, SOLID, Clean Architecture
        </p>
      </>
    ),
    image: "AI tutor interface with personalized learning path and question generation",
    tags: ["AI", "Python", "SOLID", "Clean Architecture", "EdTech"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Cpu className="w-5 h-5 text-netflix-red mr-2" />, 
  },
  {
    id: 9,
    title: "Finance Manager",
    shortDescription:
      "An AI-powered personal finance assistant that tracks expenses, analyzes spending, and answers your money questions in plain English.",
    longDescription: (
      <>
        <p>
          <strong>Purpose:</strong> Make managing your money effortless—just chat with your AI assistant to track expenses, get reports, and understand your finances.
        </p>
        <p>
          <strong>What I did:</strong>
          <ul className="list-disc ml-5">
            <li>Built a FastAPI backend that understands natural language queries about expenses and income.</li>
            <li>Integrated Google's Gemini AI for smart categorization and time-aware analysis.</li>
            <li>Implemented automatic transaction recording and detailed financial reports.</li>
            <li>Added conversation memory for context-aware answers and balance checks.</li>
          </ul>
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul className="list-disc ml-5">
            <li>Chat in plain English—no forms or spreadsheets</li>
            <li>Automatic transaction recording and smart categorization</li>
            <li>Detailed spending analysis and financial summaries</li>
            <li>Balance inquiries and time-aware analysis ("last month", "yesterday")</li>
            <li>Conversation memory for better context</li>
          </ul>
        </p>
        <p>
          <strong>Key Technologies:</strong> FastAPI, Gemini AI, Python, NLP, REST API
        </p>
      </>
    ),
    image: "AI finance assistant dashboard with charts and chat interface",
    tags: ["FastAPI", "Gemini AI", "Python", "NLP", "Finance", "REST API"],
    github: "https://github.com/Vansh-837",
    demo: "#",
    icon: <Cpu className="w-5 h-5 text-netflix-red mr-2" />, 
  },
];

function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="w-full"
        onClick={() => setModalOpen(true)}
      >
        <Card className="netflix-card h-full flex flex-col cursor-pointer">
          <div className="relative aspect-video overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={project.title}
              src="https://images.unsplash.com/photo-1697256200022-f61abccad430"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent" />
            <div className="absolute top-4 left-4 p-2 bg-netflix-red/80 rounded-full text-white">
              {project.icon}
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">{project.title}</CardTitle>
            <CardDescription className="text-netflix-light h-20 overflow-y-auto">
              {project.shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="skill-badge">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-netflix-light hover:text-netflix-red transition-colors flex items-center"
            >
              <Github className="w-5 h-5 mr-1" /> GitHub
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-netflix-light hover:text-netflix-red transition-colors flex items-center"
              >
                <ExternalLink className="w-5 h-5 mr-1" /> Demo
              </a>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-netflix-black p-6 rounded-2xl max-w-2xl max-h-[80vh] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl text-white mb-4">{project.title}</h3>
            <div className="text-netflix-light mb-6">{project.longDescription}</div>
            <button
              className="mt-2 px-4 py-2 bg-netflix-red text-white rounded-lg hover:bg-netflix-red/90"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="netflix-section bg-netflix-black">
      <div className="netflix-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="netflix-title text-4xl md:text-5xl mb-4">PROJECTS</h2>
          <p className="text-netflix-light max-w-2xl mx-auto">
            A showcase of what I build: from AI backends to full-stack applications and ML pipelines.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
