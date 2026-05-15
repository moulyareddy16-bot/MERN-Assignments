/**
 * ASSIGNMENT 4: Movie Streaming Platform
 * Objective: Filter and analyze movie ratings.
 */

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Filter "Sci-Fi" movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// 2. Map to return formatted strings like "Inception (8.8)"
const formattedRatings = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Formatted Movie Ratings:", formattedRatings);

// 3. Reduce to find average movie rating
const totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
console.log("Average Movie Rating:", totalRating / movies.length);

// 4. Find movie "Joker"
const joker = movies.find(movie => movie.title === "Joker");
console.log("Movie 'Joker':", joker);

// 5. Find index of "Avengers"
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of 'Avengers' is:", avengersIndex);