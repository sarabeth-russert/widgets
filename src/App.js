import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'Who is the best dog ever?',
    content: 'Indiana is the best. She is so cute and funny. Every time I see her little rabbit face I laugh.'
  },
  {
    title: 'What is MJ\'s favorite toy?',
    content: 'Her favorite toy is the creepy laughing koala... even though she hates when it laughs. She mostly just likes to chew the fur off of it.'
  },
  {
    title: 'What is Maggie\'s favorite way to say hello?',
    content: 'If maggie likes you her favorite way to say hello is to snap her teeth in your face. Sometimes she misses and bites you... so that\'s fun.'
  },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);




  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          selected={selected} 
          options={options} 
          onSelectedChange={setSelected}
          label='Select a Color'
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}

export default App
