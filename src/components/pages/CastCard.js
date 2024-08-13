import React from 'react';
import '../Assets/CastCard.css'

const CastCard = ({ castMember }) => {
  const profileUrl = castMember.profile_path 
    ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
    : 'https://via.placeholder.com/150x225?text=No+Image+Available';

  return (
    <div className="cast-card">
      <img className="cast-image" src={profileUrl} alt={castMember.name} />
      <div className="cast-details">
        <h3 className="cast-name">{castMember.name}</h3>
        <p className="cast-character">{castMember.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
