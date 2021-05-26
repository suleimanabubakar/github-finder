import Repo from "./repo";

const Repos = ([repos]) => {

    return repos.map(repo=> <Repo repo={repo} key={repo.id} /> )

}
 
export default Repos;