import React from "react";
import { Movies } from "../componets/Movies";
import { Preloader } from "../componets/preloader";
import { Search } from "../componets/search";

class Main extends React.Component{
    state = {movies: [], loading: true,};

    componentDidMount(){
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2b626fc7')
            .then((response)=> response.json())
            .then((data)=> this.setState({movies: data.Search, loading: false}));
    }

    searchMovies = (str, type = "all") => {
        fetch(`https://www.omdbapi.com/?apikey=108ac68c&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
        .then((response)=> response.json())
        .then((data)=> this.setState({movies: data.Search, loading: false}));
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
            </main>
        );
    }
}
    
export{Main};
