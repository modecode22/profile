/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",

	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
  extend:{
      colors:{
    pr:"#f5f3f4",
    pr1:"#6fffe9",
    pr2:"#5bc0be",
    pr3:"#3a506b",
    pr4:"#1c2541",
    pr5:"#0b132b",
  }
  }
  },
	plugins: [],
}
