import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/main.css';

const menuItems = [
  {
    name: `Каталог`,
    link: `/catalog`
  },
  {
    name: `Авторы`,
    link: `/catalog/authors`
  },
  {
    name: `Жанры`,
    link: `/catalog/genres`
  },
  {
    name: `Коллекции`,
    link: `/catalog/collections`
  },
  {
    name: `Доставка`,
    link: `/delivery`
  },
  {
    name: `Контакты`,
    link: `/contacts`
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: props.history.location.pathname
    };
  }

  componentDidMount() {
    window.h.listen((e) => {
      this.setState({
        pathname: e.pathname
      });
    });
  }

  render() {
    const { pathname } = this.state;

    return <React.Fragment>
      <Header
          menuItems={menuItems}
          pathname={pathname}
      />
      <main>
        {this.props.children}
      </main>
      <Footer menuItems={menuItems} />
    </React.Fragment>;
  }
}

export default App;
