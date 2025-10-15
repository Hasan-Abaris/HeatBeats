"use client";
import React, { useEffect, useState } from 'react'
import Articles from "./Articles";
import MoreResources from "./MoreResources";
import PopularArticles from './PopularArticles';
import TrendingCourses from './TrendingCourses';
import Loadar from '@/app/comman/Loader';
import { getBlogList } from '@/app/comman/FrontApi';


const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        blog: []
    })
    const getData = async () => {
        setLoading(true)
        try {
            const res = await getBlogList()
           
            
            if (res.status === 200) {
                setData({
                    ...data,
                    blog: res.data.data
                })
            }
        } catch (error) {

        }
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <section className="py-20 md:px-16 p-6">
                {loading && <Loadar />}
                <div className=" mx-auto px-6 md:px-12">
                    <h2 className="text-5xl text-center font-extrabold uppercase text-gray-900 tracking-wide">
                        Our Latest Post
                    </h2>
                    <p className="text-center mt-3 text-gray-700 mb-5">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                    <h2 className="text-4xl text-center font-extrabold uppercase text-gray-900 tracking-wide mb-10">
                        What are you interested in learning?
                    </h2>
                    <Articles data={data}/>
                    <MoreResources />
                    <PopularArticles />
                    <TrendingCourses />
                </div>
            </section>
        </>
    );
};

export default Blogs;
