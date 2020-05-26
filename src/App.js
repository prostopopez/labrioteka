import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/main.css';

const menuItems = [
  {
    name: `menuCatalog`,
    link: `/catalog`
  },
  {
    name: `menuAuthors`,
    link: `/catalog/authors`
  },
  {
    name: `menuGenres`,
    link: `/catalog/genres`
  },
  {
    name: `menuCollections`,
    link: `/catalog/collections`
  },
  {
    name: `menuDelivery`,
    link: `/delivery`
  },
  {
    name: `menuContacts`,
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
