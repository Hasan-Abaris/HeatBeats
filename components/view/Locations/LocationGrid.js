import Image from 'next/image';

const locations = [
  {
    city: 'BANGALORE',
    addressLines: [
      '5th FLOOR, Wing A, No. 38/4, INDIQUIBE ETA, DODDANEKUNDI VILLAGE, OUTER RING ROAD, Bengaluru (Bangalore) Urban, Karnataka, 560048.',
    ],
  },
  {
    city: 'DELHI',
    addressLines: [
      '5th floor Punj Essen House, 17-18, Nehru Place, New Delhi, Delhi - 110019.',
    ],
  },
  {
    city: 'HYDERABAD',
    addressLines: [
      '1st Floor Mid Town Plaza Road, No. 1 Banjara Hills, Andhra Pradesh, Hyderabad - 500033.',
    ],
  },
  {
    city: 'KOLKATA',
    addressLines: [
      '3rd & 4th Floor, Arcadia Centre Premise No.31, Dr. Ambedkar Sarani, Kolkata, West Bengal - 700046.',
    ],
  },
  {
    city: 'MUMBAI',
    addressLines: [
      'Duru House, 2nd/ 3rd/ 4th floors, Juhu Tara Road, Next to JW Marriot, Juhu, Mumbai, Maharashtra - 400049',
    ],
  },
  {
    city: 'PUNE',
    addressLines: [
      '6th Floor Pentagon P-2 Magarpatta City Hadapsar, Pune, Maharashtra - 411013.',
    ],
  },
  {
    city: 'GURGAON',
    addressLines: [
      'Plot No 9, Udyog Vihar Phase-IV, Sector- 18, Gurugram, Haryana - 122015.',
    ],
  },
  {
    city: 'NOIDA',
    addressLines: ['G-41, Sector-16A, Noida, Uttar Pradesh - 201301.'],
  },
  {
    city: 'CHENNAI',
    addressLines: [
      'Spaze Icon, Ground & First Floor, 70 SIPCOT Industrial Park, Oragadam, Chennai – 603109.',
    ],
  },
  {
    city: 'NEW YORK',
    addressLines: ['123 Madison Ave, 5th Floor, New York, NY 10016.'],
  },
  {
    city: 'SAN FRANCISCO',
    addressLines: ['456 Market Street, Suite 800, San Francisco, CA 94111.'],
  },
  {
    city: 'CHICAGO',
    addressLines: ['789 Michigan Avenue, Floor 10, Chicago, IL 60611.'],
  },
  {
    city: 'LOS ANGELES',
    addressLines: ['2020 Sunset Blvd, 3rd Floor, Los Angeles, CA 90026.'],
  },
  {
    city: 'DALLAS',
    addressLines: ['600 Elm Street, Suite 2000, Dallas, TX 75201.'],
  },
  {
    city: 'ATLANTA',
    addressLines: ['350 Peachtree Street NE, Suite 900, Atlanta, GA 30308.'],
  },
  {
    city: 'SEATTLE',
    addressLines: ['701 5th Avenue, 42nd Floor, Seattle, WA 98104.'],
  },
  {
    city: 'MIAMI',
    addressLines: ['910 Brickell Ave, Penthouse, Miami, FL 33131.'],
  },
  {
    city: 'BOSTON',
    addressLines: ['1 Beacon Street, 15th Floor, Boston, MA 02108.'],
  },
];

export default function LocationGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[60vw] mx-auto px-4">
        {' '}
        {/* Container for the entire grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {locations.map(({ city, addressLines }) => (
            <div
              key={city}
              className="relative bg-white rounded-xl shadow-[0_6px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.06)] pt-14 pb-8 px-6 text-center"
            >
              {/* Shared Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-[0_6px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/locations-map.svg"
                  alt="Location Icon"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>

              {/* City */}
              <h3 className="text-xl font-bold text-gray-800 mt-2">{city}</h3>

              {/* Underline */}
              <div className="w-4/5 h-0.5 bg-blue-500 rounded mx-auto my-3" />

              {/* Company */}
              <p className="text-sm font-semibold text-gray-700 mb-3">
                SLA Consultants
              </p>

              {/* Address */}
              <div className="text-sm text-gray-600 leading-relaxed space-y-1">
                {addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
