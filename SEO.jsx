import React from 'react';

const SEO = () => {
  const title = 'Nirwair Kumar Chaudhary | IIT Madras | Full-Stack Developer';
  const description = 'Portfolio of Nirwair Kumar Chaudhary - IIT Madras Civil Engineering student, curiosity-driven full-stack developer specializing in React, Node.js, and MongoDB. Building innovative solutions at the intersection of engineering and code.';
  const url = 'https://your-portfolio.vercel.app'; // Update with your actual URL
  const image = `${url}/og-image.jpg`; // Update with your OG image path

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Nirwair Kumar Chaudhary, IIT Madras, Civil Engineering, Full-Stack Developer, React Developer, Node.js, MongoDB, Portfolio, Software Engineer, Web Developer" />
      <meta name="author" content="Nirwair Kumar Chaudhary" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nirwair Kumar Chaudhary Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={url} />
    </>
  );
};

export default SEO;

