import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <main>
    <h1>Rs 4000<span>.00</span></h1>
    <form>
      <div className='basic'>
         <input type="text" placeholder={'+500 new mousepad'}/>
         <input type="datetime-local"/>
      </div>
      <div className='description'>
        <input type="text" placeholder={'description of transction'}/>
      </div>
      <button type='submit'>Add New Transaction</button>
    </form>
    <div className='transactions'>
     
     
     
      <div className='transaction'>
        <div className='left'>
          <div className='name'>New Mosue Pad</div>
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
