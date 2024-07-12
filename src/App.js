import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    
    const url = `${process.env.REACT_APP_API_URL}/transaction`;
    const price = name.split(' ')[0];
    const transactionName = name.substring(price.length + 1);

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: transactionName.trim(), 
            price,
            description,
            datetime
        })
    })
    .then(response => response.json())
    .then(json => {
        console.log('result', json);
        setName('');
        setDatetime('');
        setDescription('');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

  return (
   <main>
    <h1>Rs 4000<span>.00</span></h1>
    <form onSubmit={addNewTransaction}>
      <div className='basic'>
         <input 
          type="text"
          value={name} 
          onChange={ev => setName(ev.target.value)}
          placeholder={'Write your Income/Expense'}
        />
         <input 
          type="datetime-local"
          value={datetime}
          onChange={ev => setDatetime(ev.target.value)}
         />
      </div>
      <div className='description'>
        <input 
          type="text" 
          value={description} 
          onChange={ev => setDescription(ev.target.value)}
          placeholder={'Description of transaction'}
        />
      </div>
      <button type='submit'>Add New Transaction</button>
    </form>
    <div className='transactions'>
      <div className='transaction'>
        <div className='left'>
          <div className='name'>New Mouse Pad</div>
          <div className='description'> Need to replace old mat</div>
        </div>
        <div className='right'>
          <div className='price red'>- Rs 500</div>
          <div className='datetime'>2024-04-12 15:45</div>
        </div>
      </div>

      <div className='transaction'>
        <div className='left'>
          <div className='name'>Gig Income</div>
          <div className='description'> Personal gig income</div>
        </div>
        <div className='right'>
          <div className='price green'>+ Rs 1000</div>
          <div className='datetime'>2024-04-12 15:45</div>
        </div>
      </div>

      <div className='transaction'>
        <div className='left'>
          <div className='name'>Keyboard</div>
          <div className='description'> Old keyboard was not working</div>
        </div>
        <div className='right'>
          <div className='price red'>- Rs 1000</div>
          <div className='datetime'>2024-04-12 15:45</div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
