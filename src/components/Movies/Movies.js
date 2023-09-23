import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesButton from '../MoviesButton/MoviesButton';
import Navigation from '../Navigation/Navigation';

function Movies({ setIsMobileMenuOpen }) {
  return (
    <>
      <div className="movies">
        <Header>
          <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </Header>
        <main>
          <SearchForm />
          <MoviesCardList>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </MoviesCardList>
          <MoviesButton />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Movies;
