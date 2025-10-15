// @/pages/all-courses/[id].js
"use client";

import { useCallback, useState } from 'react';
import Script from 'next/script';
import CallModel from './CallModel';
import EmiCost from './EmiCost';
import { getCourseDetails } from '@/app/comman/FrontApi'; // Add this import
import { submitCounsellorQuery } from '@/app/comman/FrontApi'; // Optional for corporate form

export default function CourseSchedule({ initialCourseData }) {
  const [selectedTab, setSelectedTab] = useState('Online Classroom');
  const [selectedBatch, setSelectedBatch] = useState(initialCourseData?.batches?.[0]?.date || 'May 31st');
  const [models, showModels] = useState({
    findBach: false,
    knowMore: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [corporateForm, setCorporateForm] = useState({
    name: '',
    companyName: '',
    trainingNeed: '',
    email: '',
    phone: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handlePayment = useCallback(() => {
    const options = {
      key: 'rzp_test_9VeeiBAgDSX9Tq',
      amount: initialCourseData?.price?.amount || '1619900',
      currency: 'INR',
      name: "SLA Consultants",
      description: initialCourseData?.name || "Test Transaction",
      image: "/image/main-logo.png",
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        // name: user?.user?.name,
        // email: user?.user?.email,
        // contact: user?.user?.mobile,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on('payment.failed', function (response) {
      console.error(response);
    });
  }, [initialCourseData]);

  const handleCorporateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitCounsellorQuery(corporateForm);
      alert(res?.data?.message || "Query submitted!");
      setCorporateForm({
        name: '',
        companyName: '',
        trainingNeed: '',
        email: '',
        phone: '',
        query: '',
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Submission failed");
    }
  };

  return (
    <div className="">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 my-4">
          Instructor-led {initialCourseData?.name || 'Power BI'} live online Training Schedule
        </h1>
        <h2 className="text-2xl font-bold mb-4">Flexible batches for you</h2>
        <div className="inline-flex bg-gray-100 rounded-full">
          {['Online Classroom', 'Corporate Training'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-full font-medium ${
                selectedTab === tab
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {selectedTab === 'Online Classroom' && (
        <div>
          <div className="flex flex-col md:flex-row gap-6 bg-gray-200 p-6 shadow-md rounded-lg my-4">
            <div className="w-full md:w-2/3 space-y-3">
              {initialCourseData?.batches?.length > 0 ? (
                initialCourseData.batches.map((batch, idx) => (
                  <div
                    onClick={() => !batch.disabled && setSelectedBatch(batch.date)}
                    key={idx}
                    className={`flex items-start justify-between border rounded p-4 relative ${
                      selectedBatch === batch.date ? 'border-blue-600 bg-white' : 'border-gray-200'
                    } ${batch.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-blue-600'}`}
                  >
                    <div className="flex items-start space-x-3 w-full">
                      <input
                        type="radio"
                        disabled={batch.disabled}
                        checked={selectedBatch === batch.date}
                        onChange={() => setSelectedBatch(batch.date)}
                        className="mt-1"
                      />
                      <div className="flex flex-1 justify-between w-[100%]">
                        <p className="font-bold text-lg">{batch.date}</p>
                        <div className="text-sm text-gray-600">{batch.label}</div>
                        <div className="text-sm text-gray-700">{batch.time}</div>
                        <div className="text-sm font-medium text-blue-700 mt-1 inline-block border border-blue-600 rounded px-2">
                          {batch.label.includes('SAT & SUN') ? 'Weekend' : 'Weekday'}
                        </div>
                      </div>
                    </div>
                    {batch.status && (
                      <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md font-semibold">
                        {batch.status}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No batches available</p>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg w-full md:w-1/3">
              <p className="text-gray-600 text-sm line-through mb-1">
                ₹{initialCourseData?.price?.original || '17,999'}
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                ₹{initialCourseData?.price?.discounted || '16,199'}
              </p>
              <p className="text-green-600 text-sm mb-3">
                {initialCourseData?.price?.discount || '10% OFF, Save ₹1800'}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Starts at ₹{initialCourseData?.price?.emi || '5,400'} / month
              </p>
              <div className="text-xs text-gray-500 mb-4">
                With No Cost EMI{' '}
                <div
                  className="text-blue-600 underline"
                  onClick={() => showModels({ ...models, knowMore: true })}
                >
                  Know more
                </div>
                {models.knowMore && <EmiCost isOpen={models.knowMore} setIsOpen={showModels} />}
              </div>
              <button
                className="bg-red-600 text-white w-full py-2 rounded text-lg font-semibold"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing..' : 'ENROLL NOW'}
              </button>
              <div className="flex justify-center items-center mt-3 text-xs text-gray-500">
                <span className="mr-1">🔒 Secure Transaction</span>
                <img src="https://img.icons8.com/color/24/visa.png" alt="Visa" className="h-4 ml-1" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 flex justify-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 font-bold m-3"
              onClick={() => showModels({ ...models, findBach: true })}
            >
              Cant Find a Batch?
            </button>
            {models.findBach && <CallModel isOpen={models.findBach} setIsOpen={showModels} />}
          </div>
        </div>
      )}

      {selectedTab === 'Corporate Training' && (
        <div className="text-gray-700 text-sm">
          <div className="bg-white p-6 shadow-md rounded-lg my-6 max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Talk to our training advisor
            </h2>
            {submitted ? (
              <p className="text-green-600">Query submitted successfully!</p>
            ) : (
              <form className="space-y-4" onSubmit={handleCorporateSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Type your Name*"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={corporateForm.name}
                    onChange={(e) =>
                      setCorporateForm({ ...corporateForm, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="md:flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Company Name*"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={corporateForm.companyName}
                      onChange={(e) =>
                        setCorporateForm({ ...corporateForm, companyName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Training Need
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={corporateForm.trainingNeed}
                      onChange={(e) =>
                        setCorporateForm({ ...corporateForm, trainingNeed: e.target.value })
                      }
                      required
                    >
                      <option value="" disabled>
                        Select an Option
                      </option>
                      <option>Team Training</option>
                      <option>Custom Curriculum</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="md:flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Id
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email*"
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={corporateForm.email}
                      onChange={(e) =>
                        setCorporateForm({ ...corporateForm, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="flex">
                      <select
                        className="border border-gray-300 rounded-l px-3 py-2 text-sm bg-white"
                        value={corporateForm.countryCode || 'IN'}
                        onChange={(e) =>
                          setCorporateForm({ ...corporateForm, countryCode: e.target.value })
                        }
                      >
                        <option>IN</option>
                        <option>US</option>
                        <option>UK</option>
                      </select>
                      <span className="px-3 py-2 border-t border-b border-gray-300 text-sm flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Enter Phone Number*"
                        className="flex-1 border border-gray-300 rounded-r px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={corporateForm.phone}
                        onChange={(e) =>
                          setCorporateForm({ ...corporateForm, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Query</label>
                  <textarea
                    placeholder="Enter your Query"
                    rows={4}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={corporateForm.query}
                    onChange={(e) =>
                      setCorporateForm({ ...corporateForm, query: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold text-lg w-full md:w-auto"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const response = await getCourseDetails(id);
    const courseData = response?.data?.data || {};

    // Transform API data to match expected structure (adjust based on actual API response)
    const initialCourseData = {
      id: courseData.id,
      name: courseData.name || 'Power BI',
      batches: courseData.batches || [
        {
          date: 'May 05th',
          label: 'MON - FRI (21 Days)',
          time: '08:30 PM to 10:30 PM (IST)',
          status: 'SOLD OUT',
          disabled: true,
        },
        {
          date: 'May 17th',
          label: 'SAT & SUN (7 Weeks)',
          time: '08:30 PM to 11:30 PM (IST)',
          status: 'Filling Fast',
          disabled: false,
        },
        {
          date: 'May 31st',
          label: 'SAT & SUN (7 Weeks)',
          time: '07:00 AM to 10:00 AM (IST)',
          status: '',
          disabled: false,
        },
        {
          date: 'Jun 09th',
          label: 'MON - FRI (21 Days)',
          time: '07:00 AM to 09:00 AM (IST)',
          status: '',
          disabled: false,
        },
      ],
      price: {
        original: courseData.originalPrice || '17999',
        discounted: courseData.discountedPrice || '16199',
        discount: courseData.discount || '10% OFF, Save ₹1800',
        emi: courseData.emi || '5400',
        amount: courseData.amount || '1619900', // For Razorpay (in paise)
      },
    };

    return {
      props: {
        initialCourseData,
      },
    };
  } catch (error) {
    console.error('Error fetching course details:', error);
    return {
      props: {
        initialCourseData: {},
      },
    };
  }
}