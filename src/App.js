import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState('');
  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = `${process.env.REACT_APP_API_URL}/transactions`;
    const response = await fetch(url);
    return await response.json();
  }

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
    {transactions.length>0 && transactions.map(transaction=>(
      <div className='transaction'>
      <div className='left'>
        <div className='name'>{transaction.name}</div>
        <div className='description'>{transaction.description}</div>
      </div>
      <div className='right'>
        <div className={'price ' + (transaction.price<0 ? 'red':'green') }>
            {transaction.price}</div>
        <div className='datetime'>2024-04-12 15:45</div>
      </div>
    </div>
    )) }

      
    </div>
  </main>
  );
}

export default App;
