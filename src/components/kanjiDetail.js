import React from 'react';
import '../styles/kanjiDetail.css';
import KanjiExample from './kanjiExample';

const KanjiDetail = ({ kanji, hideDetal, history }) => {
  if (!kanji) {
    return <p className="errorLoading">Something went wrong with loading this kanji. Please try again.</p>;
  }
  else if (kanji) {
    let kanjiExamples = [];
    for (let i = 0; i < 5; i++) {
      kanjiExamples.push(
        <KanjiExample
          example={kanji.examples[i]}
        />
      );
    }
    return (
      <section className="kanjiDetailContainer">
        <article className="kanjiDetail">
          <section className="kanjiInfo">
            <div onClick={(e) => { e.preventDefault(); hideDetal(true); history.push('/'); document.body.classList.remove('noScroll'); }} className="close"></div>
            <video className="kanjiVideo" controls poster={kanji.kanji.video.poster}>
              <source src={kanji.kanji.video.mp4} type="video/mp4" />
              <source src={kanji.kanji.video.webm} type="video/webm" />
            </video>
            <section className="kanjiData">
              <h2 className="kanjiEng">{kanji.kanji.meaning.english}</h2>
              <p>Onyomi: <span className="kanjiReadingValue">{kanji.kanji.onyomi.romaji}</span> </p>
              <p>Kunyomi: <span className="kanjiReadingValue">{kanji.kanji.kunyomi.romaji}</span></p>
            </section>
          </section>
          <section className="examples">
            <p className="examplesTitle">Examples</p>
            {kanjiExamples}
          </section>
        </article>
      </section>
    );
  }
};

export default KanjiDetail;
