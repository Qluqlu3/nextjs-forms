import './App.css';

const list1 = [[], []];
const list2 = [{}, { a: 10, b: 20 }];
const list3 = [{ aaa: 0 }, {}];
const result = [...list1[0], ...list2];

console.log(result);
console.log(list1);
console.log(list3);

function App() {
  return (
    <div className='App'>
      <div>{list1}</div>
      <p>
        {list3.map((r) => (
          <li>{r.aaa}</li>
        ))}
      </p>
      <div className='App'>
        <p>
          {result.map((r) => (
            <div>AAA{r.a}</div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default App;
