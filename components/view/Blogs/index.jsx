'use client';
import React from 'react';
import Articles from "./Articles";
import MoreResources from "./MoreResources";
import PopularArticles from './PopularArticles';
import TrendingCourses from './TrendingCourses';

const Blogs = () => {
    // Static gaming blog data
    const data = {
        blog: [
            {
                id: 1,
                title: "PUBG Battle Strategies",
                description: "Master PUBG gameplay with these advanced battle tactics and survival tips.",
                author: "Gamer Pro",
                date: "Oct 15, 2025",
                image: "https://images.unsplash.com/photo-1605125242020-cb1d38f4f1b8?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                title: "Chess Opening Techniques",
                description: "Learn effective chess openings to gain an early advantage in your games.",
                author: "Chess Master",
                date: "Oct 10, 2025",
                image: "https://images.unsplash.com/photo-1603031853482-cd64b4e91407?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                title: "Carrom King Tips",
                description: "Improve your Carrom skills with these precision striking techniques.",
                author: "Board Game Expert",
                date: "Oct 5, 2025",
                image: "https://images.unsplash.com/photo-1612832021247-0cbbf3dc8e8a?auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                title: "Ludo Masterclass",
                description: "Learn winning strategies and probability techniques to excel at Ludo.",
                author: "Ludo Champ",
                date: "Oct 2, 2025",
                image: "https://images.unsplash.com/photo-1612832032220-97e42a3f0b4b?auto=format&fit=crop&w=800&q=80"
            }
        ]
    };

    return (
        <section className="py-20 md:px-16 p-6">
            <div className="mx-auto px-6 md:px-12">
                <h2 className="text-5xl text-center font-extrabold uppercase text-gray-900 tracking-wide">
                    Our Latest Posts
                </h2>
                <p className="text-center mt-3 text-gray-700 mb-5">
                    Explore the latest tips, strategies, and tutorials for your favorite games like PUBG, Chess, Carrom, and Ludo.
                </p>
                <h2 className="text-4xl text-center font-extrabold uppercase text-gray-900 tracking-wide mb-10">
                    What are you interested in learning?
                </h2>

                {/* Gaming Articles */}
                <Articles data={data} />

                {/* More Resources */}
                <MoreResources />

                {/* Popular Gaming Articles */}
                <PopularArticles />

                {/* Trending Gaming Courses */}
                <TrendingCourses />
            </div>
        </section>
    );
};

export default Blogs;
