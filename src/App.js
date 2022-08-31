import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Like from "./routes/Like";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/movie/:id"}>
          <Detail />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/like"}>
          <Like />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Switch 컴포넌트를 사용한 이유는 한 번에 하나의 Route만 렌더링 하기 위함.
// Route path="URL"인데, <Route path="/movie/:id">에서 "/:변수명"을 적어주어야만 영화 각각 디테일 페이지 고유 아이디값의 URL로 연결될 수 있다.