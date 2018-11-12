import React, { Component } from 'react';
import '../styles/mainKanjiList.css';
import getData from '../helpers/getData';
import KanjiListItem from '../components/kanjiListItem';
class MainKanjiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kanjiList: null,
            queryNumber: 1,
            error: false,
            isMore: true,
            isLoading: false
        };
        window.onscroll = () => {
            if (this.state.error || this.state.isLoading || !this.state.isMore){
                console.log(this.state.error);    
                return;
            }
            if (window.innerHeight + window.pageYOffset + 1 >= document.body.offsetHeight) {
                this.getKanji({ type: 'basic', value: this.state.queryNumber });
            }
        }
    }
    componentDidMount() {
        this.getKanji({ type: 'basic', value: this.state.queryNumber });
    }
    getKanji(option) {
        this.setState({ isLoading: true }, () => getData(option)
            .then((data) => {
                if(data.length > 0) {
                let kanjiMap = data.map((kanji) => {
                    return (
                        <KanjiListItem
                            onKanjiSelect={this.props.onKanjiSelect}
                            singleKanji={kanji}
                            key={kanji.kanji.character.charCodeAt(0)}
                        />
                    );
                });
                let temp = this.state.queryNumber;
                if (this.state.queryNumber === 1)
                    this.setState({
                        kanjiList: kanjiMap,
                    });
                else {
                    for (let kanji in kanjiMap) {
                        this.setState({
                            kanjiList: [...this.state.kanjiList, kanjiMap[kanji]],
                        });
                    }
                }
                this.setState({
                    queryNumber: temp + 1,
                    isMore: true,
                    isLoading: false
                })
            }
            else
                this.setState({
                    isMore: false,
                    isLoading: false
                })
            }
            ).catch(
                (errorData) => {
                    this.setState({
                        isLoading: false,
                        error: errorData
                    });
                    return [];
                }
            ));

    }
    render() {
        return (
            <section className="mainKanjiList">
                {this.state.kanjiList}
                {this.state.isLoading &&
                    <div className="loader"></div>
                }
                {!this.state.isMore &&
                    <p className="noMore"> You've loaded all kanji characters from this list.</p>
                }
            </section>
        )
    }
}

export default MainKanjiList;