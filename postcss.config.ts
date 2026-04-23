type PostCssConfig = {
  plugins: Record<string, Record<string, never>>;
};

const postcssConfig: PostCssConfig = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default postcssConfig;