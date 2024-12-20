import "./skills.css";
//import { Frontend } from './Frontend'
//import { Backend } from './Backend'
import { SkillsContent } from "./SkillsContent";
import { SkillsData } from "./SkillsData";


const skills_frontend = [
    { name: "HTML", level: "Intermedio" },
    { name: "CSS", level: "Intermedio" },
    { name: "JavaScript", level: "Intermedio" },
    { name: "Bootstrap", level: "Intermedio" },
    { name: "Tailwind CSS", level: "Intermedio" },
    { name: "React", level: "Básico" },
];

const skills_backend = [
    { name: "Python", level: "Intermedio" },
    { name: "Django", level: "Intermedio" },
    { name: "Node.js", level: "Básico" },
    { name: "Java", level: "Básico" },
    { name: "SQL", level: "Intermedio" },
    { name: "NoSQL", level: "Intermedio" },
];

const skills_others = [
    { name: "Linux", level: "Intermedio" },
    { name: "GitHub", level: "Intermedio" },
    { name: "AWS", level: "Básico" },
    { name: "Docker", level: "Básico" },
    { name: "Excel", level: "Básico" },
    { name: "SCRUM", level: "Conocimientos" },
    { name: "Inglés", level: "Intermedio" },
];


export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Mi nivel técnico</span>

            <div className="skills__container container grid">
                {/* Frontend */}
                <SkillsContent title={"Desarrollado Frontend"}>
                    {skills_frontend.map((skill, index) => (
                        
                        <SkillsData key={index} name={skill.name} level={skill.level}/>
                    ))}
                </SkillsContent>
                {/* Backend */}
                <SkillsContent title={"Desarrollado Backend"}>
                    {skills_backend.map((skill, index) => (
                        
                        <SkillsData key={index} name={skill.name} level={skill.level}/>
                    ))}
                </SkillsContent>
                {/* otros */}
                <SkillsContent title={"Otras Habilidades"}>
                    {skills_others.map((skill, index) => (
                        
                        <SkillsData key={index} name={skill.name} level={skill.level}/>
                    ))}
                </SkillsContent>
            </div>
        </section>
    )
}
