export default function FeatureCard({ icon: Icon, title, description, colorClass }) {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${colorClass}`}>
        <Icon size={28} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
