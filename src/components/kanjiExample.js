import React from 'react';
import '../styles/example.css';

const KanjiExample = ({example}) => {
      return (
            <section class="singleExample">
                {example.japanese} {example.meaning.english} 
                    <audio className="exampleAudio" controls>
                        <source src={example.audio.acc}  type="audio/acc"/>
                        <source src={example.audio.mp3}  type="audio/mpeg"/>
                        <source src={example.audio.ogg}  type="audio/ogg"/>
                        <source src={example.audio.opus}  type="audio/opus"/>
                    </audio>
            </section>
      );

};

export default KanjiExample;