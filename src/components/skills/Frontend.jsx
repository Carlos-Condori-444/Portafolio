const skills = [
    { name: "HTML", level: "Basic" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
];

export const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {skills.map((skill, index) => (
                        <div className="skills__data" key={index}>
                            <i className="bx bx-badge-check"></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
