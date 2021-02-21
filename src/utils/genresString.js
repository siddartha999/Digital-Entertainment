/**
 * Function to return all the selected Genres as a comma-separated Stirng.
 * @param {*} selectedGenres - A Set containing the id's of the selected Genres.
 */
const genresAsString = (selectedGenres) => {
    if (selectedGenres.size < 1) return "";
    return [...selectedGenres].reduce((acc, curr) => acc + "," + curr);
  };
  
  export default genresAsString;