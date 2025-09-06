import GithubSearchBar from '../../components/github/search-bar'
import GithubProfile from '../../components/github/profile'
import GithubRepositories from '../../components/github/repositories'
import GithubDetailReadmeModal from '../../components/github/detail-readme-modal'
import githubStore from '../../stores/github-store'
import './style.scss'

export default function Home() {
  const hasProfile = githubStore(state => state.user)

  return (
    <section className="container">
      <h1>Explore GitHub Projects</h1>
      <p>Search for any GitHub user and discover their repositories, complete with detailed README content and project insights.</p>
      <GithubSearchBar />

      {hasProfile && (
        <div className="github-detail">
          <GithubProfile />
          <GithubRepositories />
          <GithubDetailReadmeModal />
        </div>
      )}
    </section>
  )
}
