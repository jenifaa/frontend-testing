
import {
  BadgeCheck,
  Heart,
  ShoppingBasket,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBasket,
    title: "Everything in One Place",
    description:
      "From everyday groceries to household essentials, find everything you need under one roof.",
  },
  {
    icon: BadgeCheck,
    title: "Quality You Can Trust",
    description:
      "We carefully select our products to provide reliable quality for you and your family.",
  },
  {
    icon: Truck,
    title: "Fast & Convenient",
    description:
      "Shop easily and get your everyday essentials delivered right to your doorstep.",
  },
  {
    icon: Heart,
    title: "Customers First",
    description:
      "Your satisfaction matters to us. We aim to make every shopping experience simple and enjoyable.",
  },
];

const About = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            About Us
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Everyday Store,
            <span className="block text-emerald-600">
              Made for Everyday Life.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We bring together quality products, fair prices, and a convenient
            shopping experience to make your everyday shopping easier.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1601598851547-4302969d9f1a?auto=format&fit=crop&w=1200&q=85"
                alt="Shopping in a departmental store"
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[500px]"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-3 rounded-2xl bg-emerald-600 px-6 py-5 text-white shadow-xl sm:-right-6">
              <p className="text-3xl font-black">100%</p>
              <p className="mt-1 text-sm font-medium text-emerald-50">
                Customer Focused
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Why Choose Us
            </span>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              More than shopping.
              <span className="block text-slate-500">
                It&apos;s a better way to shop.
              </span>
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Our goal is simple — to make your everyday shopping convenient,
              affordable, and enjoyable. Whether you need fresh groceries,
              household products, personal care items, or daily essentials,
              we make it easy to find what you need.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              With a wide range of products and a commitment to quality, we
              strive to become a trusted part of your everyday life.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 divide-x divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 py-8 sm:grid-cols-4">
          <div className="px-4 text-center">
            <p className="text-2xl font-black text-slate-900 sm:text-3xl">
              10K+
            </p>
            <p className="mt-1 text-sm text-slate-500">Happy Customers</p>
          </div>

          <div className="px-4 text-center">
            <p className="text-2xl font-black text-slate-900 sm:text-3xl">
              5K+
            </p>
            <p className="mt-1 text-sm text-slate-500">Products</p>
          </div>

          <div className="mt-6 border-t border-slate-200 px-4 text-center sm:mt-0 sm:border-t-0">
            <p className="text-2xl font-black text-slate-900 sm:text-3xl">
              24/7
            </p>
            <p className="mt-1 text-sm text-slate-500">Online Shopping</p>
          </div>

          <div className="mt-6 border-t border-slate-200 px-4 text-center sm:mt-0 sm:border-t-0">
            <p className="text-2xl font-black text-slate-900 sm:text-3xl">
              100%
            </p>
            <p className="mt-1 text-sm text-slate-500">Quality Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

