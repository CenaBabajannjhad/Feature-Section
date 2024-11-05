/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      "semibold" : "outfit-semibold",
      "regular" : "outfit-reg"
    },


    extend: {
      backgroundImage: {
        "main-background" : "url('../../assets/svg/Background_image.svg')"
      },
      colors: {
        "dark-charcoal" : "#121826",
        "gunmetal" : "#212936",
        "platinum" : "#E5E7EB",
        "cadet-grey" : "#9DA3AE",
        "light-periwinkle" : "#DEE9FC",
        "misty-rose" : "#FBE5E6",
        "light-apricot" : "#FCEED8"
      },
      fontSize: {
        "heading" : "2.5rem",
        "small-heading" : "1.25rem",
        "body-text" : "1rem"
      },
    },
  },
  plugins: [],
}
