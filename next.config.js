/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');
//
// module.exports = {
//     images: {
//         domains: ['cdn.snappfood.ir'],
//     },
// };

module.exports = withSvgr({
    images: {
        domains: ['cdn.snappfood.ir','www.zoodfood.com'],
    },
});
