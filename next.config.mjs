/** @type {import('next').NextConfig} */
export default {distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next', poweredByHeader:false, images:{unoptimized:true}, output:'export'};
