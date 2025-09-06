import useGithubStore from '../../../stores/github-store'
import GithubRepository from './repository'
import './style.scss'

export default function GithubRepositories() {
  const repositories = useGithubStore((state) => state.repositories)

  if (!repositories || repositories.length < 1) return null

  return (
    <div className="github-repository-wrapper">
      {repositories.map((repository) => (
        <GithubRepository repository={repository} key={repository.id} />
      ))}
    </div>
  )
}
