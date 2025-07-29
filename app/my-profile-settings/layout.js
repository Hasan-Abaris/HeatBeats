"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser } from "react-icons/fa";
const tabs = [
    { href: '/my-profile-settings/my-profile', label: 'Personalize', icon: <FaUser /> },
    { href: '/my-profile-settings/topics-intrest', label: 'Topics of Intrest' },
    { href: '/my-profile-settings/career-service', label: 'Career Service' },
    { href: '/change-password', label: 'Change Password' },
    { href: '/my-profile-settings/order', label: 'My Order & Invoices' },
    { href: '/my-profile-settings/referral', label: 'My Wallet' },
];

export default function SettingsLayout({ children }) {
    const pathname = usePathname();

    return (
        <section className='py-10 md:px-16 p-6 bg-gray-50'>
            <div className="flex">
                <div className="w-60  bg-white shadow-md rounded-sm">
                    <Link

                        href={"my-profile"}
                        className={`block p-4 hover:bg-gray-200 
                                }`}
                    >
                        <div className="flex items-center gap-3 justify-center">
                            <span className='text-[20px] border rounded-full bg-blue-300 p-2 text-white'>
                                <FaUser />
                            </span>
                            <span className='text-[20px]'>My Profile</span>
                        </div>


                    </Link>
                    {tabs.map((tab) => (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`block p-4 hover:bg-gray-200 ${pathname === tab.href ? 'bgBlueDark text-white' : ''
                                }`}
                        >
                            <div className="flex items-center gap-3 justify-center">
                                <span className='text-[20px]'>{tab.label}</span>
                            </div>


                        </Link>
                    ))}
                </div>

                <div className="flex-1 px-8">{children}</div>
            </div>
        </section>
    );
}
