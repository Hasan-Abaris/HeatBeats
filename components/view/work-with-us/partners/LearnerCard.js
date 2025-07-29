const LearnerCard = ({ icon, text }) => (
  <div className="flex items-start space-x-4 p-2 text-white">
    <div className="text-white text-2xl">{icon}</div>
    <p className="text-lg">{text}</p>
  </div>
);

export default LearnerCard;