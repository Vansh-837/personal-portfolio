
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Terminal, Settings, Users } from 'lucide-react';


const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: <Code className="mr-2 h-5 w-5 text-netflix-red group-data-[state=active]:text-white" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL (SSMS)", level: 85 },
      { name: "MATLAB", level: 90 },
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: <Terminal className="mr-2 h-5 w-5 text-netflix-red group-data-[state=active]:text-white" />,
    skills: [
      { name: "Flask", level: 85 },
      { name: "Langchain", level: 95 },
      { name: "Angular", level: 75 },
      { name: "ASP.NET Core", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "TensorFlow/PyTorch", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "React", level: 70 }, 
      { name: "TailwindCSS", level: 95 },
      { name: "Numpy", level: 90 },
    ]
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: <Settings className="mr-2 h-5 w-5 text-netflix-red group-data-[state=active]:text-white" />,
    skills: [
      { name: "Git/Github", level: 95 },
      { name: "Jupyter NB", level: 100 },
      { name: "VS Code / VS 2022", level: 100 },
      { name: "Postman", level: 100 },
      { name: "ChromaDB", level: 90 },
      { name: "Neovim", level: 85 },
      { name: "Figma", level: 90 },
    ]
  },
  {
    id: "technologies",
    title: "Technologies & OS",
    icon: <Users className="mr-2 h-5 w-5 text-netflix-red group-data-[state=active]:text-white" />,
    skills: [
      { name: "Linux Ubuntu", level: 80 },
      { name: "MacOS X", level: 95 },
      { name: "Windows", level: 95 },
      { name: "LLM Workflows", level: 100},
      { name: "Agengtic RAG ", level: 100},
      { name: "Vector Databases", level: 70},
      { name: "REST APIs", level: 85},
    ]
  }
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-netflix-light">{skill.level}%</span>
      </div>
      <div className="h-3 bg-netflix-dark rounded-full overflow-hidden border border-netflix-gray/50">
        <motion.div 
          className="h-full bg-netflix-red"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.05 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="netflix-section bg-gradient-to-b from-netflix-black to-black">
      <div className="netflix-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="netflix-title text-4xl md:text-5xl mb-4">SKILLS & EXPERTISE</h2>
          <p className="text-netflix-light max-w-2xl mx-auto">
            A versatile toolkit for building innovative software solutions, from AI to full-stack applications.
          </p>
        </motion.div>
        
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-netflix-dark border border-netflix-gray rounded-md p-1">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-netflix-red data-[state=active]:text-white text-netflix-light hover:bg-netflix-red/20 hover:text-white transition-all duration-200 flex items-center justify-center group py-2.5"
              >
                {category.icon}
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                {category.skills.sort((a, b) => b.level - a.level).map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
