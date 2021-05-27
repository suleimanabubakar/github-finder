import {Link} from 'react-router-dom'
const Repo = ({repo}) => {
    return ( 
  <div className="card bg-light">
      <a href={repo.html_url}>{repo.name}</a>
  </div>
     );
}
 
export default Repo;