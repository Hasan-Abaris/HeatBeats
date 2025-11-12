"use client";
import React from "react";
import { HelpCircle, MessageSquare, PlusCircle } from "lucide-react";

export default function Questions() {
  const questions = [
    {
      q: "Which game has the best graphics in 2025?",
      author: "Karan",
      answers: 14,
      time: "2h ago",
    },
    {
      q: "How to improve aim in FPS games?",
      author: "Simran",
      answers: 25,
      time: "5h ago",
    },
    {
      q: "What’s the best streaming setup under $1000?",
      author: "Rohit",
      answers: 9,
      time: "1d ago",
    },
  ];

  return (
    <div className="min-h-screen mt-8 mb-12 space-y-16">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center items-center gap-3 mb-3">
          <HelpCircle size={34} className="text-emerald-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            Community Questions
          </h1>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Ask, learn, and share your gaming knowledge with the{" "}
          <span className="text-emerald-400 font-semibold">HeatsBeasts</span> community 💬
        </p>
      </div>

      {/* Ask a Question Section */}
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-emerald-400 mb-5 text-center">
          📝 Ask a Question
        </h2>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-emerald-600/30 transition-all duration-300">
          <textarea
            placeholder="Type your question here..."
            className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none h-24"
          ></textarea>

          <button className="mt-4 w-full py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all flex justify-center items-center gap-2">
            <PlusCircle size={18} /> Post Question
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="px-4">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
          💬 Latest Questions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {q.q}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Asked by <span className="text-emerald-400">{q.author}</span> • {q.time}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <MessageSquare size={15} className="text-emerald-400" /> {q.answers} Answers
                </span>
                <button className="text-emerald-500 hover:underline">
                  View Discussion →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-2">Want to browse more questions?</p>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg">
          Explore All Discussions
        </button>
      </div>
    </div>
  );
}
