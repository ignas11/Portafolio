function SectionTitle({ eyebrow, title, description }) { 
    return <header className="section-title">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{description}</span>
        </header>; }
export default SectionTitle;
