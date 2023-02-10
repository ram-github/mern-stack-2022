import {useState} from 'react';

function App() {
  const[form,setForm]=useState({
    amount:0,
    description:'',
    date:'',
  });
  
  async function handleSubmit(e){
    e.preventDefault();
    const res=await fetch('http://localhost:4000/transaction',
    {
      method: "POST", 
      body:form
    });
    console.log(res);
  }
  
  function handleInput(e){
    console.log(e.target.value);
    setForm({...form,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="amount" value={form.amount} onChange={handleInput} placeholder="Transaction Amount"/>
      <input type="text" name="description" value={form.description}  onChange={handleInput} placeholder="Transaction Details"/>
      <input type="date" name="date" onChange={handleInput}/>
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
