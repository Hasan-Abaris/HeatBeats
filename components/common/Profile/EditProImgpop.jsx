import { Input } from '@/components/ui/input';
import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
function EditProImgpop({ isOpen, setIsOpen }) {
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {isOpen && (
                <div className="bg-white shadow-xl max-w-2xl w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  overflow-hidden">
                    <div className="flex justify-between items-center shadow-md p-4 border-b">
                        <span className="font-semibold text-lg">Upload Image</span>
                        <button onClick={closeModal}>
                            <LiaTimesSolid />
                        </button>
                    </div>

                    <div className="p-4 pb-0">
                        <span className='text-slate-400'>Please select an image to upload</span>
                        <div className='my-4'>
                            <span className='relative'>
                                <input
                                    id="price"
                                    name="price"
                                    className="inline-block border-0 w-32 opacity-0"
                                    type="file"
                                />
                                <span className='absolute top-0 left-3 z-[-1] bgBlueDark text-white px-4'>Choose File</span>
                            </span>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='bg-slate-200 h-80'>

                        </div>
                        <div className='text-center'>
                            <button className='disable bg-slate-200 px-5 py-2  my-2 font-medium rounded'>Upload</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default EditProImgpop
