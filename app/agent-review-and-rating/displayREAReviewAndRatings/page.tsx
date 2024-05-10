import React from "react";
import './reviewAndRatings.css';

// veiw review and ratings for agent #66 sprint 4 and #67 sprint 4
//data from Mongo DB, not sure if it's correct
const userData = [
  { username: "User1", rating: 4, review: "Great experience!" },
  { username: "User2", rating: 5, review: "Excellent service!" },
  { username: "User3", rating: 3, review: "Average experience." },
];

//displays reviews and ratings, the users are all anonymous
export default function DisplayReviews() {
    return (
      <div>
        <h2>User Reviews</h2>
        {userData.length > 0 ? (
          userData.map((user, i) => (
            <div key={i} className="review">
                <div className="reviewContent" key={i}>
                    <div className="username">anonymous</div>
                    <div className="ratings"> {user.rating}/5 </div>
                    <div className="comment-box"> {user.review} </div>
                </div>
            </div>
          ))
        ) : (
          <h1>No reviews</h1>
        )}
      </div>
    );
  }
