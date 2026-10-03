
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Percent,
  ShoppingBag,
  Truck,
} from "lucide-react";

const categories = [
  "Groceries",
  "Fresh Produce",
  "Beverages",
  "Household",
  "Personal Care",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Top offer bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-sm text-white">
          <div className="flex items-center gap-2">
            <Percent className="h-4 w-4 text-emerald-400" />
            <span>
              <span className="font-semibold">Special Offer:</span>{" "}
              Get up to 30% off selected products
            </span>
          </div>

          <button className="flex items-center gap-1 font-medium text-emerald-400 transition hover:text-emerald-300">
            Shop Offers
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Main Hero */}
        <div className="grid min-h-130 overflow-hidden rounded-[2rem] bg-emerald-600 lg:grid-cols-2">
          {/* Left content */}
          <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-white/10" />

            <div className="relative z-10">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <ShoppingBag className="h-4 w-4" />
                Everything you need, all in one place
              </span>

              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Everyday
                <span className="block text-amber-300">Shopping Made Easy.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-emerald-50 sm:text-lg">
                Discover quality groceries, fresh produce, household
                essentials, personal care products and more — all at prices
                you'll love.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-300 hover:text-slate-900">
                  Shop Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                  Explore Categories
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Benefits */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-amber-300" />
                  Fast Delivery
                </div>

                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-amber-300" />
                  Quality Products
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-amber-300" />
                  Easy Shopping
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative min-h-90 overflow-hidden bg-emerald-500 lg:min-h-full">
            {/* Main image */}
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=85"
              alt="Department store shopping"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-emerald-600/50 via-transparent to-transparent" />

            {/* Sale card */}
            <div className="absolute right-5 top-5 rounded-2xl bg-white p-4 shadow-2xl sm:right-8 sm:top-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Today's Deal
              </p>

              <p className="mt-1 text-3xl font-black text-emerald-600">
                30% OFF
              </p>

              <p className="text-xs text-slate-500">Selected items</p>
            </div>

            {/* Bottom product card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:w-72">
              <p className="text-sm font-bold text-slate-900">
                Fresh. Quality. Affordable.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Your trusted destination for everyday essentials.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-600">
                SHOP BY CATEGORY
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Find what you need
              </h2>
            </div>

            <button className="hidden items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-emerald-600 sm:flex">
              View All
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, index) => (
              <button
                key={category}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <div>
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    {category}
                  </span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

