import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <WarningSign text="THIS IS A WARNING SIGN!!" />
      <MyBadge color="secondary" text="THIS IS MY BADGE!" />
      <BookList />
    </div>
  );
}

export default App;
