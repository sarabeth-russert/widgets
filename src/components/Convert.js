import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GOOGLE_KEY

const Convert = ({ language, text }) => {

  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text)
    }, 500);

    return () => {
      clearTimeout(timer)
    }

  }, [text])

  useEffect(() => {
    
    const getTranslation = async () => {
      const url = 'https://translation.googleapis.com/language/translate/v2';
      let { data } = await axios.post(url, {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: API_KEY
        }
      })
      setTranslation(data.data.translations[0].translatedText);
    }

    getTranslation()
    
  }, [language, debouncedText])

  return (
    <div>
      <div>
        <h1 className="ui header">{translation}</h1>
      </div>
    </div>
  )
}

export default Convert
