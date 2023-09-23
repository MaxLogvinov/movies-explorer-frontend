import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ setIsMobileMenuOpen }) {
  return (
    <>
      <div className="saved-movies">
        <Header>
          <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </Header>
        <main>
          <SearchForm />
          <MoviesCardList>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </MoviesCardList>
          <div className="saved-movies__empty"></div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;
