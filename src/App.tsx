import './App.css';
import moment from 'moment';
import Event from './components/Event';

const events = [
  // {
  //   date: 'Sat 19 Mar 2022, 12:00 - 14:00',
  //   location: 'UniSport Otaniemi *',
  //   form: 'https://forms.gle/bsPuAboVBoiJAtW89',
  //   view: 'https://docs.google.com/forms/d/e/1FAIpQLSfDSN2M6W6BUjL72rGgl2WnbvKXFBoYYaCgezCH3-m8FYgqLQ/viewanalytics',
  // },
  {
    date: 'Thu 07 April 2022, 20:15 - 22:15',
    location: 'UniSport Otaniemi *',
    form: 'https://forms.gle/YMCaPVseYmhS1caGA',
    view: 'https://docs.google.com/forms/d/e/1FAIpQLSfn4xSq_6cZXcnT-ZtczJpmaUaKe4FStNBeGaxjoIH8SubvVA/viewanalytics',
  },
  {
    date: 'Sat 09 April 2022, 12:00 - 14:00',
    location: 'UniSport Otaniemi *',
    form: 'https://forms.gle/1p5uYgZFCUE3gnqr8',
    view: 'https://docs.google.com/forms/d/e/1FAIpQLScpU77xANv69l_niQo7cfW77Pqavrgt8dcGdLMRONWAbH66bQ/viewanalytics',
  },
];

function App() {
  const week = moment().format('WW');
  return (
    <div className="App container mx-auto space-y-4">
      <h1 className="text-3xl font-bold underline">Badminton events for week {week}</h1>
      {events.map((event, i) => {
        return <Event event={event} key={i} />;
      })}
      <p>
        <i>* Hosted by Lien</i>
      </p>
    </div>
  );
}

export default App;
