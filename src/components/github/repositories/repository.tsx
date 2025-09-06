import { Star, GitFork, Calendar, FileText } from 'lucide-react'
import { GitHubRepository } from '../../../types/github'
import { formatDistanceToNow } from '../../../utils/date'
import githubStore from '../../../stores/github-store'

export default function GithubRepository({ repository }: { repository: GitHubRepository }) {
  const setReadmeParam = githubStore(state => state.setReadmeParams)

  return (
    <div className="github-repository">
      <h3 className="github-repository__name">{repository.name}</h3>
      {repository.description && (
        <p className="github-repository__desc">{repository.description}</p>
      )}

      <ul className="github-repository__statistic">
        <li>
          <button
            type="button"
            onClick={() => setReadmeParam(repository)}
          >
            <FileText size={12} /> <span>View README</span>
          </button>
        </li>

        {repository.language && <li>{repository.language}</li>}

        <li>
          <Star size={12} /> <span>{repository.stargazers_count}</span>
        </li>

        <li>
          <GitFork size={12} /> <span>{repository.forks_count}</span>
        </li>

        {repository.open_issues_count > 0 && (
          <li>
            <span>{repository.open_issues_count} issues</span>
          </li>
        )}

        <li>
          <Calendar size={12} />
          <span>
            Updated {formatDistanceToNow(new Date(repository.updated_at))}
          </span>
        </li>
      </ul>
    </div>
  )
}
