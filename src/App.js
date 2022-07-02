import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";
import CardList from "./components/cards-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    console.log("Constructer");
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    <h1>Hello</h1>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <>
        <div className="App">
          <h1 className="app-title">Monsters World</h1>
          <SearchBox onSearchChange={onSearchChange} className="search-box" placeholder = "Search Monsters" />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
