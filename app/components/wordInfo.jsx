import React, { useState, useEffect } from 'react';

const Wordinfo = ({ query }) => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      setWordData(null); // Clear previous data here before fetching new data
  
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Word not found');
          }
          return response.json();
        })
        .then((data) => {
          setWordData(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [query]);
  


  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
     
      {wordData && (
        <div>
          <h2 className='text-3xl'>Word Information for "{query}"</h2>



          <div>
      {wordData.map((wordObj, index) => (
        <div key={index}>


        { wordObj.phonetics && <h3  className='text-3xl mt-14'>Phonetics:</h3>}
          <ul>
            {wordObj.phonetics.map((phonetic, phoneticIndex) => (
              <li key={phoneticIndex}>
                {phonetic.audio && <>Text: {phonetic.text}, Audio:<audio controls>
                  <source src={phonetic.audio}/></audio></> }
              </li>
            ))}
          </ul>




          <h3 className='text-3xl mt-24'>Meanings:</h3>
{wordObj.meanings.map((meaning, meaningIndex) => (


  <div key={meaningIndex}>
    <p className='font-bold'>Part of Speech: {meaning.partOfSpeech}</p>

    {meaning.definitions.map((definition, definitionIndex) => (
      <div key={definitionIndex} className='m-12'>
        <p><h1 className='font-bold'>Definition:</h1> {definition.definition}</p>
        {definition.example && (
           <p><h1 className='font-bold'>Example:</h1>{definition.example}</p>
        )}
      </div>
    ))}

{meaning.synonyms && meaning.synonyms.length > 0 && (
  <div>
    <h1 className='text-3xl mt-12'>Synonyms: </h1>
    {meaning.synonyms.map((synonym, synonymIdx) => (
      <ul key={synonymIdx} className='m-3'>
        <li>{synonym}</li>
      </ul>
    ))}
  </div>
)}

{meaning.antonyms && meaning.antonyms.length > 0 && (
  <div>
    <h1  className='text-3xl mt-12'>Antonyms: </h1>
    {meaning.antonyms.map((antonym, antonymIdx) => (
      <ul key={antonymIdx} className='m-3'>
        <li>{antonym}</li>
      </ul>
    ))}
  </div>
)}


  </div>



))}








          <h3 className='font-bold'>Source URLs:</h3>
          <ul>
            {wordObj.sourceUrls.map((sourceUrl, sourceIndex) => (
              <li key={sourceIndex}>
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  {sourceUrl}
                </a>
              </li>
            ))}
          </ul>


        </div>
      ))}
    </div>

        </div>
      )}

      
    </div>

  );
};

export default Wordinfo;
