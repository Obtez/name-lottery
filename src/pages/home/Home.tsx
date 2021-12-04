import {Link} from 'react-router-dom'
import ClassList from '../../components/class-list/ClassList'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/group-lottery">Group Lottery</Link>
      <Link to="/name-lottery">Name Lottery</Link>

      <ClassList />
    </div>
  )
}

export default Home