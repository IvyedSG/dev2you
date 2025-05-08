module.exports = {
  darkMode: "class", // Habilitar el modo oscuro con la clase "dark"
  theme: {
    extend: {
      colors: {
        dark: "#0F0F0F",
        light: "#FFFFFF",
        accent: "#53FC19",
        "gray-dark": "#1A1A1A",
        "gray-light": "#A0A0A0",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dev2you: {
          primary: "#53FC19",
          secondary: "#FFFFFF",
          accent: "#53FC19",
          neutral: "#0F0F0F",
          "base-100": "#0F0F0F", // Fondo oscuro por defecto
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
