import './RatingBadge.css';

function RatingBadge({source, value}) {
  return (
    <div className="rating-badge">
      <span className="rating-badge__value">{source}</span>
      <span className="rating-badge__source">{value}</span>
    </div>
  );
}

export default RatingBadge;
