import React, { Component } from 'react';
import './styles/app.css';
import MainKanjiList from './components/mainKanjiList';
import KanjiDetail from './components/kanjiDetail';
import getData from './helpers/getData';
import {
  Route
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKanji: null,
      isDetailHidden: true
    }
    this.hideDetal = this.hideDetal.bind(this)
  }
  hideDetal(){
    this.setState({
      isDetailHidden : true
    })
  }
  getSingleKanji(kanji){
    getData({ type: 'single', value: kanji.kanji.character})
        .then((data) => {
            this.setState({selectedKanji: data,
              isDetailHidden: false});
        }
        ).catch(
            (errorData) => {
                console.log(errorData)
                return null;
            }
        );
}
  render() {
    return (
        <div className="app">
          <Route path='/detail/:id'>
          {!this.state.isDetailHidden && <KanjiDetail
            kanji={this.state.selectedKanji}
            hideDetal={this.hideDetal}
            history={this.props.history}
            />}
          </Route>
          <header className="appHeader">
            <h1> Kanji App </h1>
          </header>
          <section className="mainAppContainer">
            <MainKanjiList
              onKanjiSelect={(selectedKanji) => {
                this.getSingleKanji(selectedKanji);
                document.body.classList.add("noScroll");
              }}
            />
          </section>
        </div>
    );
  }
}

export default App;
