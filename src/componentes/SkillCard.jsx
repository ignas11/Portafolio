function SkillCard({ name, category }) { 
    return <article className="skill-card">
        <span>{category}</span>
        <h3>{name}</h3>
    </article>; }
export default SkillCard;
