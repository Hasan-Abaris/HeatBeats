
const IncentiveCard = ({ icon, text }) => (
    <div className=" items-start space-x-4 p-4 bg-white rounded-lg shadow">
      <div className="text-blue-500 text-6xl">{icon}</div>
      <h4 className=" text-gray-700 text-center">{text}</h4>
    </div>
  );
  
  export default IncentiveCard;