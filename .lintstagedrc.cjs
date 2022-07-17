module.exports = {
  'src/**/*.{js,ts,jsx,tsx}': [
    'eslint --cache --max-warnings=0 --fix --no-ignore',
    'vitest --watch=false --coverage --passWithNoTests',
  ],
  '!.{js,jsx,ts,tsx}*': 'prettier --cache --write',
};
