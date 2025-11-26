
/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',       // Perform a static HTML export (next export)
	trailingSlash: true,    // Emit each page as /pagename/index.html
	images: {
	  unoptimized: true,    // Don’t apply Next.js’s image optimization (serve static)
	},
	// If you need a base path, uncomment the next line and set BASE_URL in your env
	// basePath: process.env.BASE_URL || '',
  };
  
  module.exports = nextConfig;