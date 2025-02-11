import Select from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const changeHandler = () => {};
  const val = { label: "First", value: 1 };
  return <Select options={options} value={val} onChange={changeHandler} />;
}

export default App;
