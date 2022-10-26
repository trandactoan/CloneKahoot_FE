import { Link } from "react-router-dom";

function HomePage(){
  return (<div>
    <Link to='/register'>
      <button>Register new account</button>
    </Link>
  </div>)
}
export default HomePage;