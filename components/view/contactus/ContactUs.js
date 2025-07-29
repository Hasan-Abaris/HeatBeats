'use client';

import React, { useState } from 'react';
import Loadar from '@/app/comman/Loader';
import { ErrorTosters, Tosters } from '@/app/comman/Tosters';
import { postContactQuery } from '@/app/comman/FrontApi';

function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        const obj = {
            phone: form.phone,
            email: form.email,
            query: form.message,
            name: form.name
        }
        setLoading(true);
        try {
            const res = await postContactQuery(obj);
            if (res.status === 200) {
                Tosters('Message Send successfully!')
                setLoading(false);
                setTimeout(() => {

                    setForm({ name: '', phone: '', email: '', message: '' });
                }, 2000);
            }

        } catch (err) {
            console.log(err);
            
            ErrorTosters('Message Send Failed!')
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="p-6 md:px-16 md:py-16 bg-blue-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center h-full">
                    <div className="text-center md:text-start">
                        <h6 className="font-bold text-base mb-6 underline text-white">
                            Get in Touch
                        </h6>
                        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-white">
                            And we would love to show you our Ridiculous Commitment to Learning.
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img src="/images/contactus_new.png" alt="Contact Us" className="w-full h-auto max-w-md" />
                    </div>
                </div>
            </section>
            {loading && <Loadar />}
            <section className="bg-gray-100 py-16 px-6 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <ContactCard
                            title="LOOKING FOR A COURSE FOR YOURSELF?"
                            email="sales@SLA.co"
                            phone1="+91 88871 58520"
                            phone2="+1 833 855 5775"
                        />
                        <ContactCard
                            title="NEED A CORPORATE LEARNING SOLUTION?"
                            email="corp@SLA.co"
                            phone1="+91 88803 33399"
                        />
                        <ContactCard
                            title="WANT TO BECOME AN AFFILIATE OR RESELLER PARTNER?"
                            email="partners@SLA.co"
                            phone1="+91-70226 53302"
                            phone2="+1-786-664-2214"
                        />
                        <ContactCard
                            title="ARE YOU FROM THE MEDIA?"
                            email="media@SLA.co"
                            phone1="+91-96069-89639"
                            phone2="+1-833-855-5775"
                        />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-center font-bold text-lg mb-4">SEND US A MESSAGE</h2>
                        <form  className="space-y-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full border px-4 py-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="+91 Mobile Number"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className="w-full border px-4 py-2 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full border px-4 py-2 rounded"
                            />
                            <textarea
                                placeholder="Your Query"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full border px-4 py-2 rounded"
                            />
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-center font-bold text-lg mb-4">REGISTERED OFFICE ADDRESS</h2>
                            <p className="text-sm">
                                SLA <br />
                                4th Floor, No. 324, Indiqube ETA, <br />
                                Outer Ring Road, <br />
                                Doddanekundi, Bengaluru, <br />
                                Karnataka, India - 560048 <br />
                                CIN - U80904KA2011PTC060481
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <a href="https://goo.gl/maps/epWiwzowewy" className="text-blue-500 underline">https://goo.gl/maps/epWiwzowewy</a>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-sm">
                            <h2 className="text-center font-bold text-lg mb-4">GRIEVANCE REDRESSAL</h2>
                            <p>
                                In case you have any concerns or queries, please reach out to our Grievance Officer.<br />
                                <strong>Name:</strong> Mr. Vinay Bhat<br />
                                <strong>Email:</strong> grievance@SLA.co<br />
                                <strong>Timings:</strong> 10 AM to 6 PM, Monday to Friday
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

function ContactCard({ title, email, phone1, phone2 }) {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg text-center text-sm">
            <h3 className="font-bold mb-2">{title}</h3>
            <p>Email: <a href={`mailto:${email}`} className="text-blue-600 underline">{email}</a></p>
            <p>Phone (India): {phone1}</p>
            {phone2 && <p>Phone (US & ROW): {phone2}</p>}
        </div>
    );
}

export default ContactUs;
