//Movie class with its constructor and the getPG method:

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing getPG method
const movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "PG-13"),
    new Movie("Movie 3", "Studio C", "R"),
    new Movie("Movie 4", "Studio D", "PG"),
    new Movie("Movie 5", "Studio E", "PG-13"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Output will be an array containing Movie instances with a rating of "PG"

//output:
// [
//     Movie { title: 'Movie 1', studio: 'Studio A', rating: 'PG' }, 
//     Movie { title: 'Movie 4', studio: 'Studio D', rating: 'PG' }
// ]