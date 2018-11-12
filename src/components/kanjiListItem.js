import React from 'react';
import '../styles/kanjiListItem.css';
import {
    Link
} from 'react-router-dom';


const KanjiListItem = ({ singleKanji, onKanjiSelect}) => {
    return (
        <section onClick={() => onKanjiSelect(singleKanji)} className="listKanjiContainer" key={singleKanji.kanji.character}>
            <Link to={`/detail/${singleKanji.kanji.character.charCodeAt(0)}`}>
                <p className="listKanjiName">{singleKanji.kanji.character}</p>
                <p className="listKanjiStrokes"> Strokes: {singleKanji.kanji.stroke}</p>
            </Link>
        </section>
    );


};
export default KanjiListItem;