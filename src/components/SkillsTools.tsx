import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass, FlaskConical, Layers, LineChart, Rocket, Users,
  LayoutDashboard, TestTube, Cog, Map, GitBranch, Palette,
  Database, BarChart3
} from "lucide-react";

const skills = [
  { icon: Compass, label: "Product Strategy", desc: "Roadmaps, GTM strategy, prioritization" },
  { icon: Users, label: "User Research", desc: "Interviews, personas, human-centered design" },
  { icon: FlaskConical, label: "Experimentation", desc: "A/B testing, MVPs, hypothesis validation" },
  { icon: Rocket, label: "Go-to-Market", desc: "Launch strategy, pilots, market entry" },
  { icon: Layers, label: "Platform & API Management", desc: "Multi-sided platforms, ecosystem strategy" },
  { icon: LineChart, label: "Data-Driven Decisions", desc: "SQL, analytics, monitoring & evaluation" },
];

const tools = [
  { icon: Map, label: "Linear", category: "Roadmapping" },
  { icon: Cog, label: "Jira", category: "Project Mgmt" },
  { icon: Cog, label: "Asana", category: "Project Mgmt" },
  { icon: GitBranch, label: "Confluence", category: "Documentation" },
  { icon: Palette, label: "Notion", category: "Knowledge Mgmt" },
  { icon: LayoutDashboard, label: "Figma", category: "Design" },
  { icon: LineChart, label: "Tableau", category: "Analytics" },
  { icon: BarChart3, label: "Looker Studio", category: "Analytics" },
  { icon: TestTube, label: "Google Analytics", category: "Analytics" },
  { icon: FlaskConical, label: "PostHog", category: "Product Analytics" },
  { icon: GitBranch, label: "GitLab", category: "Dev Tools" },
  { icon: Database, label: "SQL", category: "Data" },
];

const SkillsTools = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Capabilities</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-16">
            Skills & <span className="gradient-text">Tools</span>
          </h2>

          {/* Product Skills */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-xl p-5 hover:shadow-lg transition-all duration-300"
              >
                <skill.icon className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-medium mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <h3 className="text-label text-primary mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                className="glass rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-md transition-all"
              >
                <tool.icon className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-medium">{tool.label}</span>
                <span className="text-[10px] text-muted-foreground">{tool.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsTools;
