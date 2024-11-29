module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths if necessary
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom breakpoint for small screens (smaller than the default sm)
        'sm': '640px',  // Default sm breakpoint (you can keep this or adjust)
        'md': '868px',  // Default md breakpoint (you can keep this or adjust)
        'lg': '1024px', // Custom lg breakpoint (you can adjust)
        'xl': '1280px', // Custom xl breakpoint (you can adjust)
        '2xl': '1536px', // Custom 2xl breakpoint (you can adjust)
      },
    },
  },
  plugins: [],
};
