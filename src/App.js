import logo from './logo.svg';
import './App.css';

const number = 555;
const singers = [
  { name: 'Dr. Mahfuuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathir' }];

const singerStyle = {
  color: 'green',
  backgroundColor: 'yellow'
}

function App() {
  const nayoks = ['Ruble', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anuar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Preson name={nayok}></Preson>)
      } */}

      {
        singers.map(singer => <Preson name={singer.name}></Preson>)
      }

      {/* <Preson name="Rubel" nayika="moushomi"></Preson>
      <Preson name="BappaRaz" nayika="seka"></Preson>
      <Preson name="Kuber" nayika="kopila"></Preson> */}
      <h5>New component. YAY</h5>
      <p>rock mama React mama.</p>
      <Friend movie="Shingam" phone="01754675993"></Friend>
      <Friend phone="01969158499"></Friend>
    </div>
  );
}

function Preson(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Movie: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
