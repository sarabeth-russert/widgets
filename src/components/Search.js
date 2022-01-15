import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const [term, setTerm] = useState('bouvier des flandres');
  const [debouncedTerm, setDebouncedTerm] = useState('bouvier des flandres');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedTerm(term)
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };

  }, [term])

  useEffect(() => {
    const search = async () =>  {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${debouncedTerm}`)
      setResults(data.query.search)
    };

    search();
    
  }, [debouncedTerm]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="right floated content">
            <a 
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go</a>
          </div>
          <div className="header">
            {result.title}
          </div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            className="input" 
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search
