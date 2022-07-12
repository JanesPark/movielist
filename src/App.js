import Detail from "./routes/Detail";
import { BrowserRouter as Router,
Routes,Route
} from "react-router-dom";
import Home from "./routes/Home";

//1. useStae, useEffect 배우기

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] =  useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("I run all the time");
 
//   useEffect(() =>  {
//     console.log("I run only once");
//   },[]);
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log("SEARCH FOR", keyword);
//     }
//   }, [keyword]);
//   return (
//     <div>
//       <input 
//         value={keyword} 
//         onChange={onChange} 
//         type="text" 
//         placeholder="Search here..."></input>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

// //2. cleanUp 함수 배우기(많이 사용하지 X)

// function Hello() {
//   useEffect(() => {console.log("Hi:D");
//   return () => console.log("Bye:(");
//   },[])
//   return <h1>Hello</h1>;
// }

// function App2 () {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   )
// }

// //3. 배운것 토대로 To-do list 만들기

// function App3() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;}
//       setToDos((currentArray) => [toDo, ...currentArray]);
//       setToDo("");
//   };
  
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//       <input onChange={onChange} value={toDo} type="text" placeholder="Write down your to do..."></input>
//       <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => ( 
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// //4. 배운것 토대로 Coin tracker 만들기

// function App4() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [usd, setUsd] = useState(0);
//   const [changeCoin, setChangeCoin] = useState(0);
//   const onChange = (e) => setUsd(e.target.value);
//   const onChangeCoin = (e) => setChangeCoin(e.target.value);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
//       <input 
//       onChange={onChange} 
//       value={usd} 
//       type="number" 
//       placeholder="Write your amount...."></input>$
//       {loading ? <strong>Loading...</strong> :  
//       <select onChange={onChangeCoin}>
//         <option>Select coin</option>
//         {coins.map((coins, index) => 
//         <option key={index} value={coins.quotes.USD.price}>
//           {coins.name} ({coins.symbol}) : ${(coins.quotes.USD.price)} USD 
//         </option>)}
//       </select>
//       }
//       <hr />
//       <h3>${usd} 로 살 수 있는 총 코인의 갯수 : {Math.floor(usd/changeCoin)}</h3>

//     </div>
//   );
// }


// 5. moive app 만들기!!
//fetch ~ .then 대신 async 함수 사용 await
//Louter 이용하여 페이지 이동하기

function App5() {
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;
}

export default App5;