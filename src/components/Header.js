import millennium from 'millenniumjs';

const Header = () => {

  return (
    <header className = "header">

      <img src = "assets/img/redux-logo.svg" className = "header__logo" />

      <h1 className = "header__heading">
        <a href = "http://millenniumjs.github.io/" target = "_blank" className = "header__heading__link">
          millenniumJS
        </a> + redux
      </h1>

    </header>
  )

}

export default Header;
