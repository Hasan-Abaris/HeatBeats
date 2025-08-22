import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Loadar from '@/app/comman/Loader';
import { ErrorTosters, Tosters } from '@/app/comman/Tosters';
import { postContactQuery, getSiteSettings } from '@/app/comman/FrontApi';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

function CounsellingModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [sitePhone, setSitePhone] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getSiteSettings();
       

        if (res.status === 200 && res.data.status) {
          setSitePhone(res.data.data['site.phone']);
        }
      } catch (err) {
        console.error('Error fetching site settings:', err);
      }
    };
    fetchSettings();
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSubmit = async () => {


    if (!email || !phone || !query) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      //("Calling postContactQuery with payload:", { email, phone, query });

      const res = await postContactQuery({ email, phone, query });

      //("postContactQuery response:", res);

      if (res.status === 200 && res.data.status === true) {
        Tosters(res.data.message || 'Query Sent Successfully!');
        setLoading(false);
        setTimeout(() => setIsOpen(false), 1000);
        setEmail('');
        setPhone('');
        setQuery('');
      } else {
        console.warn("postContactQuery returned non-success status:", res);
        setLoading(false);
        ErrorTosters(res.data?.message || 'Failed to send query');
      }
    } catch (err) {
      console.error("Error in postContactQuery:", err);
      console.error("Error response details:", err?.response);

      setLoading(false);
      ErrorTosters(err?.response?.data?.message || 'Failed to send query');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      {loading && <Loadar />}

      {/* Header */}
      <div
        onClick={toggleOpen}
        className="bg-[#E53935] text-white px-4 py-3 flex justify-between items-center cursor-pointer"
      >
        <span className="font-semibold text-sm">Drop us a Query</span>
        {isOpen ? (
          <ChevronDownIcon className="w-4 h-4" />
        ) : (
          <ChevronUpIcon className="w-4 h-4" />
        )}
      </div>

      {isOpen && (
        <div className="bg-white p-4 animate-slide-up">
       {/* Avatars */}
<div className="flex justify-center space-x-2 mb-4">
  <img 
    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
    alt="avatar1" 
    className="w-10 h-10 rounded-full border" 
  />
  <img 
    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
    alt="avatar2" 
    className="w-10 h-10 rounded-full border" 
  />
  <img 
    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
    alt="avatar3" 
    className="w-10 h-10 rounded-full border" 
  />
</div>


          {/* Phone Info */}
          <div className="flex items-center mb-4">
            <div className="bg-[#E53935] p-2 rounded">📞</div>
            <div className="ml-3">
              <p className="text-[#E53935] font-semibold">
                {sitePhone ? `+91 ${sitePhone}` : 'Loading...'}
              </p>
              <p className="text-xs text-gray-500">Available 24x7 for your queries</p>
            </div>
          </div>

          {/* Query Textarea */}
          <div className="mb-3">
            <textarea
              placeholder="Type your query here*"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={3}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label className="block text-xs text-gray-700 mb-1">Phone Number</label>
            <div className="flex">
              <select
                className="border border-gray-300 rounded-l px-2 py-2 text-sm bg-gray-200"
                disabled
              >
                <option value="IN">IN +91</option>
              </select>
              <input
                type="tel"
                placeholder="Enter Phone Number*"
                className="flex-1 border border-l-0 border-gray-300 rounded-r px-3 py-2 text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs text-gray-700 mb-1">Email Id</label>
            <input
              type="email"
              placeholder="Enter your email*"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-[#E53935] hover:bg-red-700 text-white font-semibold py-2 rounded text-sm transition"
            onClick={handleSubmit}
            disabled={loading}
          >
            SUBMIT QUERY
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default CounsellingModel;
