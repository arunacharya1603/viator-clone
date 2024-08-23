import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Media and Trustpilot Section */}
        <div className="flex flex-col gap-5 items-center justify-between mb-8">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.404.595 24 1.325 24H12.81v-9.294H9.691v-3.622h3.119V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.764v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.596 1.324-1.324V1.325C24 .595 23.404 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 00-8.379 4.482c-4.084-.205-7.7-2.158-10.125-5.118a4.822 4.822 0 00-.664 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616c-.054 2.419 1.675 4.69 4.125 5.195a4.935 4.935 0 01-2.224.084c.627 1.956 2.445 3.379 4.604 3.418a9.86 9.86 0 01-6.1 2.104c-.396 0-.786-.023-1.17-.067a13.957 13.957 0 007.557 2.213c9.054 0 14.004-7.5 14.004-14.004 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.59a9.924 9.924 0 01-2.046.559z" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12.004 0C5.37 0 0 5.373 0 12.012c0 5.034 3.181 9.335 7.725 11.033-.108-.938-.207-2.378.04-3.398.226-.973 1.454-6.192 1.454-6.192s-.371-.738-.371-1.827c0-1.709.99-2.987 2.221-2.987 1.048 0 1.553.788 1.553 1.732 0 1.056-.673 2.633-1.02 4.1-.293 1.234.618 2.238 1.832 2.238 2.2 0 3.891-2.325 3.891-5.678 0-2.964-2.131-5.025-5.177-5.025-3.528 0-5.611 2.645-5.611 5.373 0 1.056.41 2.192.922 2.807a.371.371 0 01.085.354c-.092.391-.3 1.234-.342 1.406-.053.226-.174.274-.405.165-1.507-.703-2.446-2.91-2.446-4.681 0-3.82 2.776-7.34 8.012-7.34 4.199 0 7.454 2.993 7.454 6.999 0 4.161-2.622 7.502-6.257 7.502-1.222 0-2.373-.634-2.763-1.382l-.752 2.86c-.274 1.073-1.015 2.41-1.515 3.225 1.137.35 2.33.54 3.583.54 6.633 0 12.003-5.373 12.003-12.009C24.007 5.373 18.633 0 12.004 0z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.974.974 1.239 2.242 1.301 3.607.058 1.267.07 1.647.07 4.851 0 3.204-.012 3.584-.07 4.851-.062 1.366-.326 2.633-1.301 3.607-.974.974-2.242 1.239-3.607 1.301-1.267.058-1.647.07-4.851.07-3.204 0-3.584-.012-4.851-.07-1.366-.062-2.633-.326-3.608-1.301-.974-.974-1.239-2.242-1.301-3.607-.058-1.267-.07-1.647-.07-4.851 0-3.204.012-3.584.07-4.851.062-1.366.326-2.633 1.301-3.607.974-.974 2.242-1.239 3.607-1.301 1.267-.058 1.647-.07 4.851-.07M12 0C8.741 0 8.332.014 7.052.072 5.77.13 4.548.379 3.463 1.463 2.379 2.548 2.13 3.77 2.072 5.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.281.308 2.504 1.392 3.588 1.085 1.085 2.307 1.334 3.588 1.392 1.28.058 1.688.072 4.948.072s3.668-.014 4.948-.072c1.281-.058 2.504-.308 3.588-1.392 1.085-1.085 1.334-2.307 1.392-3.588.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.308-2.504-1.392-3.588C19.505.379 18.281.13 17 0c-1.28-.058-1.688-.072-4.948-.072S8.741.014 7.052.072C5.77.13 4.548.379 3.463 1.463 2.379 2.548 2.13 3.77 2.072 5.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.281.308 2.504 1.392 3.588 1.085 1.085 2.307 1.334 3.588 1.392 1.28.058 1.688.072 4.948.072s3.668-.014 4.948-.072c1.281-.058 2.504-.308 3.588-1.392 1.085-1.085 1.334-2.307 1.392-3.588.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.308-2.504-1.392-3.588-1.085-1.085-2.307-1.334-3.588-1.392-1.28-.058-1.688-.072-4.948-.072zM12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.994 3.994 0 110-7.988 3.994 3.994 0 010 7.988zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M23.498 6.186a3.021 3.021 0 00-2.127-2.132C19.635 3.662 12 3.662 12 3.662s-7.636 0-9.372.392a3.02 3.02 0 00-2.127 2.132C.127 8.354.127 12 .127 12s0 3.646.374 5.814a3.021 3.021 0 002.127 2.132C4.365 20.338 12 20.338 12 20.338s7.636 0 9.372-.392a3.021 3.021 0 002.127-2.132C23.873 15.646 23.873 12 23.873 12s0-3.646-.374-5.814zM9.724 15.568V8.432L15.819 12 9.724 15.568z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M18.967 3.073a4.73 4.73 0 01-2.11-1.09 5.274 5.274 0 01-1.323-1.97h-2.292v15.658a4.049 4.049 0 01-5.144-2.71 4.039 4.039 0 01-.154-1.144 4.065 4.065 0 012.266-3.623 4.052 4.052 0 011.881-.445c.153 0 .306.01.458.03V6.792a7.826 7.826 0 00-1.172-.09c-4.355 0-7.891 3.517-7.891 7.851 0 2.095.826 4.064 2.344 5.531a7.953 7.953 0 005.607 2.31 7.957 7.957 0 005.607-2.31 7.825 7.825 0 002.346-5.53v-7.28a6.767 6.767 0 01-2.212-.513z" />
              </svg>
            </a>
          </div>

          {/* Trustpilot Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-green-500">
              <span>★★★★ 4</span>
            </div>
<span className="text-gray-400 lg:block hidden">rating | 213,637 reviews</span>
            <a href="#" className="text-green-500 ml-2 hover:text-white transition">
              Trustpilot
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-400 border-t border-white pt-8">
          {[
            "Help Center",
            "Privacy and Cookies Statement",
            "About Viator",
            "Careers",
            "Travel Agents",
            "Viator Blog",
            "Sitemap",
            "Become an Affiliate",
            "Supplier Sign Up",
            "News",
          ].map((linkText) => (
            <a href="#" key={linkText} className="hover:text-white transition">
              {linkText}
            </a>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="lg:mt-8 mt-4 flex lg:flex-row flex-col justify-start lg:justify-between items-start lg:items-center border-t border-white lg:text-center text-left">
          {/* App Store Links */}
          <div className="mt-5 mb-4 flex justify-center lg:justify-start space-x-4">
            <a
              href="#"
              className="inline-block border border-gray-700 rounded-lg px-5 py-1 hover:border-white transition"
            >
              <img
                src="https://cache.vtrcdn.com/orion/images/buttons/google-play-store/en/get-on-google-play.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a
              href="#"
              className="inline-block border border-gray-700 rounded-lg px-5 py-1 hover:border-white transition"
            >
              <img
                src="https://cache.vtrcdn.com/orion/images/buttons/apple-app-store/en/download-on-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>

          {/* Footer Text and Links */}
          <div className="flex flex-col lg:flex-row items-center text-xs text-gray-400 space-y-2 lg:space-y-0 lg:space-x-4">
            <span className="text-center lg:text-left">
              © 1997-2024 Viator, Inc.
            </span>
            <span className="hidden lg:block">|</span>
            <a
              href="#"
              className="hover:text-white transition text-center lg:text-left"
            >
              Terms & Conditions
            </a>
            <span className="hidden lg:block">|</span>
            <a
              href="#"
              className="hover:text-white transition text-center lg:text-left"
            >
              How Viator works
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
