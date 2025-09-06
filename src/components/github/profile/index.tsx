import { MapPin, Link, FolderGit, Calendar } from 'lucide-react'
import { formatDistanceToNow } from '../../../utils/date'
import useGithubStore from '../../../stores/github-store'
import './style.scss'

export default function GithubProfile() {
  const user = useGithubStore(state => state.user)

  if (!user) return null
  
  return (
    <div className="github-profile">
      <img
        loading="lazy"
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="github-profile__avatar"
      />
      <div className="github-profile__detail">
        <h1 className="github-profile__name">
          {user.name || user.login}
        </h1>
        <p className="github-profile__login">@{user.login}</p>
        {user.bio && (
          <p className="github-profile__bio">{user.bio}</p>
        )}

        <ul className="github-profile__list">
          {user.public_repos && (
            <li>
              <FolderGit size={16} />
              <span>{user.public_repos} repositories</span>
            </li>
          )}
          {user.location && (
            <li>
              <MapPin size={16}/>
              <span>{user.location}</span>
            </li>
          )}
          {user.blog && (
            <li>
              <Link size={16}/>
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {user.blog}
              </a>
            </li>
          )}
          <li>
            <Calendar size={16}/>
            <span>
              Joined {formatDistanceToNow(new Date(user.created_at))}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}