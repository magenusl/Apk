import { useState } from 'react';
import './App.css';

function App() {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmr, setBmr] = useState<string | null>(null);

  const calculateBMR = () => {
    if (weight && height && age) {
      let bmrValue;
      if (gender === 'male') {
        bmrValue = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5;
      } else {
        bmrValue = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;
      }
      setBmr(bmrValue.toFixed(2));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BMR Calculator</h1>
      </header>
      <main>
        <div>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Height (cm):
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
        </div>
        <button onClick={calculateBMR}>Calculate BMR</button>
        {bmr && (
          <div>
            <h2>Your BMR is: {bmr}</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;