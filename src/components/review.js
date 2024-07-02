// import React, { useState } from 'react';

// // Export the ReviewsPage component
// export default function ReviewsPage() {
//   const [showAll, setShowAll] = useState(false);

//   const data = {
//     reviews: [
//       {
//         id: 1,
//         name: 'Emily Johnson',
//         rating: 5,
//         review:
//           "I couldn't be happier with the website created by Webcraft Studios! Pedro and his team took the time to understand my vision and brought it to life perfectly. The design is modern and user-friendly, and the SEO services have significantly improved my site's traffic. Their branding services helped me establish a strong identity in my market. Highly recommend!",
//       },
//       {
//         id: 2,
//         name: 'Michael Thompson',
//         rating: 5,
//         review:
//           'Webcraft Studios exceeded my expectations in every way. The website they designed for my business is sleek and professional. The SEO improvements have been outstanding, and my site now ranks on the first page of search results. The branding team helped me create a cohesive and appealing brand image. Excellent service!',
//       },
//       {
//         id: 3,
//         name: 'Sarah Webb',
//         rating: 4,
//         review:
//           'Working with Webcraft Studios was a great experience. They delivered a beautiful and functional website that perfectly fits my needs. The SEO services are already showing positive results, and the branding advice was invaluable. The only reason I’m not giving five stars is that the project took a bit longer than expected. Otherwise, fantastic job!',
//       },
//       {
//         id: 4,
//         name: 'David Wilson',
//         rating: 5,
//         review:
//           'I highly recommend Webcraft Studios for all your website creation and design needs. They transformed my outdated site into a stunning and responsive website. The SEO team worked their magic, and my site’s visibility has improved dramatically. The branding experts also helped me redefine my business image, making it more attractive to my target audience. Great job!',
//       },
//       {
//         id: 5,
//         name: 'Jessica Brown',
//         rating: 5,
//         review:
//           "Webcraft Studios is the best in the business! Their team is professional, creative, and highly skilled. They designed a website for me that is not only visually appealing but also easy to navigate. The SEO services have already brought in more visitors, and the branding team helped me develop a unique brand identity. I'm extremely satisfied with their services.",
//       },
//       {
//         id: 6,
//         name: 'Daniel Harris',
//         rating: 5,
//         review:
//           "I had a very positive experience with Webcraft Studios. They created a fantastic website for my business that looks great and functions flawlessly. The SEO services have noticeably increased my site's traffic, and the branding suggestions were spot on. My only minor issue was a slight delay in communication at times, but overall, I’m very pleased with the outcome.",
//       },
//       {
//         id: 7,
//         name: 'Amanda Lee',
//         rating: 5,
//         review:
//           'Choosing Webcraft Studios was the best decision for my business. Their design team crafted a beautiful, professional website that stands out. The SEO improvements have been significant, and my site now attracts more visitors than ever. The branding services helped me create a strong and consistent brand presence. Exceptional service from start to finish!',
//       },
//       {
//         id: 8,
//         name: 'Chris Evans',
//         rating: 4,
//         review:
//           'Webcraft Studios did a great job on my website. The design is clean and modern, and the site is easy to navigate. The SEO services have improved my search engine rankings, and the branding advice was extremely helpful. The project took a bit longer than I hoped, but the quality of the work made it worth the wait. Very satisfied!',
//       },
//       {
//         id: 9,
//         name: 'Laura Robinson',
//         rating: 5,
//         review:
//           'I’m thrilled with the website Webcraft Studios created for my business. The design is exactly what I wanted, and the site performs beautifully. The SEO services have already led to more traffic and better rankings. The branding team also did an amazing job helping me establish a strong brand identity. I couldn’t ask for more!',
//       },
//       {
//         id: 10,
//         name: 'James Anderson',
//         rating: 5,
//         review:
//           'Webcraft Studios is fantastic! They delivered a top-notch website that looks great and works perfectly. The SEO team helped my site gain much more visibility, and the branding experts gave me invaluable insights that enhanced my brand’s appeal. The whole process was smooth and efficient. I highly recommend their services!',
//       },
//     ],
//   };

//   const reviewsToShow = showAll ? data.reviews : data.reviews.slice(0, 3);

//   return (
//     <div className="max-w-3xl mx-auto mt-8 px-4">
//       <div className="text-center text-3xl mb-3">
//         <h1 className="font-semibold mb-6 text-lg">Client Reviews</h1>
//         <h2>What Our Clients Say</h2>
//       </div>

//       {reviewsToShow.map((review) => {
//         const renderRatingStars = (rating) => {
//           const stars = [];
//           for (let i = 1; i <= 5; i++) {
//             if (i <= rating) {
//               stars.push(
//                 <span key={i} className="text-yellow-500">
//                   &#9733;
//                 </span>
//               ); // Full star
//             } else {
//               stars.push(
//                 <span key={i} className="text-gray-300">
//                   &#9733;
//                 </span>
//               ); // Empty star
//             }
//           }
//           return stars;
//         };

//         return (
//           <div
//             key={review.id}
//             className="bg-white p-6 rounded-lg shadow-md mb-4"
//           >
//             <div className="flex items-center mb-2">
//               <div className="flex-shrink-0 mr-3">
//                 <img
//                   src="/avatar.png"
//                   alt={`${review.name}'s avatar`}
//                   className="w-10 h-10 rounded-full"
//                 />
//               </div>
//               <div>
//                 <div className="text-lg font-semibold">{review.name}</div>
//                 <div className="flex items-center">
//                   <div className="text-yellow-500 mr-1">
//                     {renderRatingStars(review.rating)}
//                   </div>
//                   <div className="text-gray-600 text-sm">{review.rating}/5</div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-gray-700 text-sm leading-relaxed">
//               {review.review}
//             </div>
//           </div>
//         );
//       })}
//       <div className="flex justify-center mt-4">
//         {showAll ? (
//           <button onClick={() => setShowAll(false)} className="btn-1">
//             Show Less
//           </button>
//         ) : (
//           <button onClick={() => setShowAll(true)} className="btn-1">
//             Show More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// pages/ReviewsPage.js

import React, { useState, useEffect } from 'react';

// Export the ReviewsPage component
export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false);
  const [userPictures, setUserPictures] = useState([]);

  const data = {
    reviews: [
      {
        id: 1,
        name: 'Emily Johnson',
        rating: 5,
        review:
          "I couldn't be happier with the website created by Webcraft Studios! Pedro and his team took the time to understand my vision and brought it to life perfectly. The design is modern and user-friendly, and the SEO services have significantly improved my site's traffic. Their branding services helped me establish a strong identity in my market. Highly recommend!",
      },
      {
        id: 2,
        name: 'Michael Thompson',
        rating: 5,
        review:
          'Webcraft Studios exceeded my expectations in every way. The website they designed for my business is sleek and professional. The SEO improvements have been outstanding, and my site now ranks on the first page of search results. The branding team helped me create a cohesive and appealing brand image. Excellent service!',
      },
      {
        id: 3,
        name: 'Sarah Webb',
        rating: 4,
        review:
          'Working with Webcraft Studios was a great experience. They delivered a beautiful and functional website that perfectly fits my needs. The SEO services are already showing positive results, and the branding advice was invaluable. The only reason I’m not giving five stars is that the project took a bit longer than expected. Otherwise, fantastic job!',
      },
      {
        id: 4,
        name: 'David Wilson',
        rating: 5,
        review:
          'I highly recommend Webcraft Studios for all your website creation and design needs. They transformed my outdated site into a stunning and responsive website. The SEO team worked their magic, and my site’s visibility has improved dramatically. The branding experts also helped me redefine my business image, making it more attractive to my target audience. Great job!',
      },
      {
        id: 5,
        name: 'Jessica Brown',
        rating: 5,
        review:
          "Webcraft Studios is the best in the business! Their team is professional, creative, and highly skilled. They designed a website for me that is not only visually appealing but also easy to navigate. The SEO services have already brought in more visitors, and the branding team helped me develop a unique brand identity. I'm extremely satisfied with their services.",
      },
      {
        id: 6,
        name: 'Daniel Harris',
        rating: 5,
        review:
          "I had a very positive experience with Webcraft Studios. They created a fantastic website for my business that looks great and functions flawlessly. The SEO services have noticeably increased my site's traffic, and the branding suggestions were spot on. My only minor issue was a slight delay in communication at times, but overall, I’m very pleased with the outcome.",
      },
      {
        id: 7,
        name: 'Amanda Lee',
        rating: 5,
        review:
          'Choosing Webcraft Studios was the best decision for my business. Their design team crafted a beautiful, professional website that stands out. The SEO improvements have been significant, and my site now attracts more visitors than ever. The branding services helped me create a strong and consistent brand presence. Exceptional service from start to finish!',
      },
      {
        id: 8,
        name: 'Chris Evans',
        rating: 4,
        review:
          'Webcraft Studios did a great job on my website. The design is clean and modern, and the site is easy to navigate. The SEO services have improved my search engine rankings, and the branding advice was extremely helpful. The project took a bit longer than I hoped, but the quality of the work made it worth the wait. Very satisfied!',
      },
      {
        id: 9,
        name: 'Laura Robinson',
        rating: 5,
        review:
          'I’m thrilled with the website Webcraft Studios created for my business. The design is exactly what I wanted, and the site performs beautifully. The SEO services have already led to more traffic and better rankings. The branding team also did an amazing job helping me establish a strong brand identity. I couldn’t ask for more!',
      },
      {
        id: 10,
        name: 'James Anderson',
        rating: 5,
        review:
          'Webcraft Studios is fantastic! They delivered a top-notch website that looks great and works perfectly. The SEO team helped my site gain much more visibility, and the branding experts gave me invaluable insights that enhanced my brand’s appeal. The whole process was smooth and efficient. I highly recommend their services!',
      },
    ],
  };

  useEffect(() => {
    // Fetch random user data including pictures
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        const pictures = data.results.map((user) => user.picture.thumbnail);
        setUserPictures(pictures);
      });
  }, []);

  const reviewsToShow = showAll ? data.reviews : data.reviews.slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <div className="text-center text-3xl mb-3">
        <h1 className="font-semibold mb-6 text-lg">Client Reviews</h1>
        <h2>What Our Clients Say</h2>
      </div>

      {reviewsToShow.map((review, index) => {
        const renderRatingStars = (rating) => {
          const stars = [];
          for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
              stars.push(
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ); // Full star
            } else {
              stars.push(
                <span key={i} className="text-gray-300">
                  &#9733;
                </span>
              ); // Empty star
            }
          }
          return stars;
        };

        return (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-md mb-4"
          >
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 mr-3">
                <img
                  src={userPictures[index] || '/avatar.png'}
                  alt={`${review.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">{review.name}</div>
                <div className="flex items-center">
                  <div className="text-yellow-500 mr-1">
                    {renderRatingStars(review.rating)}
                  </div>
                  <div className="text-gray-600 text-sm">{review.rating}/5</div>
                </div>
              </div>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed">
              {review.review}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center mt-4">
        {showAll ? (
          <button onClick={() => setShowAll(false)} className="btn-1">
            Show Less
          </button>
        ) : (
          <button onClick={() => setShowAll(true)} className="btn-1">
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
