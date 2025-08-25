// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   presets: [
//     require('tailwindcss-preset-email'),
//   ],
//   content: [
//     './components/**/*.html',
//     './emails/**/*.html',
//     './layouts/**/*.html',
//   ],
// }

import emailPreset from 'tailwindcss-preset-email';
/** @type {import('tailwindcss').Config} */
export default {
    presets: [emailPreset],
    content: ['./components/**/*.html', './emails/**/*.html', './layouts/**/*.html'],
};
