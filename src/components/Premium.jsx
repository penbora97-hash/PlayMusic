import React from "react";

export default function Premium() {
  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 py-16 mt-16">
          {/* Left */}
        <div className="ml-6 ">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Listen without limits. <br />
            Try 1 month of Premium <br />
            Individual for US$0.
          </h2>

          <p className="text-gray-300 mt-4">
            Only US$3.29/month after. Cancel anytime.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-pink-200 text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-300">
              Try 1 month for US$0
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">
              View all plans
            </button>
          </div>
        </div>
      <div className="max-w-6xl mx-auto mt-7">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Affordable plans for any situation
        </h1>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          Choose a Premium plan and enjoy ad-free music, offline downloads, and high quality audio.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Individual */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col min-h-[420px] hover:border-white/20 transition">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-pink-200 text-black px-3 py-1 rounded-full">
                US$0 for 1 month
              </span>

              <h2 className="text-2xl font-bold mt-5">Individual</h2>
              <p className="text-gray-400 mt-1 text-sm">
                US$3.29 / month after trial
              </p>

              <ul className="text-sm text-gray-300 mt-6 space-y-3">
                <li>• 1 Premium account</li>
                <li>• Cancel anytime</li>
              </ul>
            </div>

            <button className="w-full mt-auto rounded-full bg-white text-black py-3 font-semibold hover:opacity-90">
              Try 1 month for US$0
            </button>
          </div>

          {/* Student */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col min-h-[420px] hover:border-white/20 transition">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-purple-200 text-black px-3 py-1 rounded-full">
                US$0 for 1 month
              </span>

              <h2 className="text-2xl font-bold mt-5">Student</h2>
              <p className="text-gray-400 mt-1 text-sm">
                US$1.69 / month after trial
              </p>

              <ul className="text-sm text-gray-300 mt-6 space-y-3">
                <li>• Verified student account</li>
                <li>• Discount for eligible students</li>
                <li>• Cancel anytime</li>
              </ul>
            </div>

            <button className="w-full mt-auto rounded-full bg-white text-black py-3 font-semibold hover:opacity-90">
              Try 1 month for US$0
            </button>
          </div>

          {/* Duo */}
          <div className="bg-zinc-900 border border-yellow-400/40 rounded-2xl p-6 flex flex-col min-h-[420px] relative hover:border-yellow-400 transition">
            <span className="absolute -top-3 right-6 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </span>

            <div className="flex-1">
              <h2 className="text-2xl font-bold mt-4">Duo</h2>
              <p className="text-yellow-400 font-semibold mt-2">
                US$4.49 / month
              </p>

              <ul className="text-sm text-gray-300 mt-6 space-y-3">
                <li>• 2 Premium accounts</li>
                <li>• For couples living together</li>
                <li>• Cancel anytime</li>
              </ul>
            </div>

            <button className="w-full mt-auto rounded-full bg-yellow-400 text-black py-3 font-semibold hover:bg-yellow-500">
              Get Premium Duo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
