'use client';

import React, { useState } from 'react';
import Loadar from '@/app/comman/Loader';
import { Tosters, ErrorTosters } from '@/app/comman/Tosters';
import { useRouter } from 'next/navigation';
import { updatePassword } from '@/app/comman/FrontApi';
function ChangePass() {
    const [formData, setFormData] = useState({
        current_password: '',
        password: '',
        password_confirmation: '',
    });
  const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const res = await updatePassword(formData);
            if (res.status === 200) {
                Tosters('Password Update in successfully!')
                setLoading(false);
                setTimeout(() => {
                    router.push('/login')
                }, 2000);
            }

        } catch (err) {
            console.log(err);

            setLoading(false);
            ErrorTosters(err?.response?.data?.message ? err.response.data.message : 'Update Failed!');
        }
    };

    return (
        <section className="py-10 md:px-16 p-6">
            {loading && <Loadar />}
            <form className="flex justify-center" onSubmit={handleSubmit}>
                <div className="bg-gray-100 p-16 w-full md:w-1/3">
                    <div className="mb-8">
                        <input
                            id="current_password"
                            name="current_password"
                            className="p-2 w-full outline-none border"
                            type="password"
                            placeholder="Enter Existing Password"
                            value={formData.current_password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            id="password"
                            name="password"
                            className="p-2 w-full outline-none border"
                            type="password"
                            placeholder="New Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-8 text-sm text-gray-600">
                        <p className="mb-1">Password must have:</p>
                        <ul className="list-disc pl-5">
                            <li>At least 1 upper-case and 1 lower-case letter</li>
                            <li>Minimum 8 characters and Maximum 50 characters</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            className="p-2 w-full outline-none border"
                            type="password"
                            placeholder="Confirm Password"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bgBlueDark text-white px-7 py-2 rounded hover:scale-105 duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default ChangePass;
