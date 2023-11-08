import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/About/name">Users Profile</Link>
      <Outlet/>
    </div>
  )
}

export default About