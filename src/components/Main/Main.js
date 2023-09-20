import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Unauthorized from '../Unauthorized/Authorized';
import Navigation from '../Navigation/Navigation';

function Main({ isLoggedIn, setIsMobileMenuOpen }) {
  isLoggedIn = true;
  return (
    <>
      <section className="Main">
        <Header>
          {isLoggedIn ? (
            <Navigation setIsMobileMenuOpen={setIsMobileMenuOpen} />
          ) : (
            <Unauthorized />
          )}
        </Header>
        <main>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Main;
