import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList/CharacterList';

const HeyArnold = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  });
  return (
    <CharacterList data={data}/>
  );

};

export default HeyArnold;
