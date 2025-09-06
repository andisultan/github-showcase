import { useState, ChangeEvent, FormEvent } from 'react'
import { useGitHubRepositories, useGitHubUser } from '../../../hooks/use-github'
import githubStore from '../../../stores/github-store'
import Spinner from '../../ui/spinner'
import './style.scss'

export default function GithubSearchBar() {
  const[username, setUsername] = useState<string>('')
  const setGithubUser = githubStore((state) => state.setUser)
  const setGithubRepositories = githubStore((state) => state.setRepositories)

  const { isLoading: isUserLoading, error: userError, refetch: refetchUser } = useGitHubUser(username, { 
    enabled: false, 
    queryKey: ['github-user', username] 
  })

  const { isLoading: isRepoLoading, error: repoError, refetch: refetchRepo } = useGitHubRepositories(username, { 
    enabled: false, 
    queryKey: ['github-repos', username]
  })

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const [userResult, repoResult] = await Promise.all([refetchUser(), refetchRepo()])
    setGithubUser(userResult.data || null)
    setGithubRepositories(repoResult.data || null)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className="github-search-bar">
        <input className="textfield" type="search" value={username} disabled={isUserLoading || isRepoLoading} onChange={handleInputChange} placeholder="Search Github username..." />
        <button className="button" type="submit" disabled={isUserLoading || isRepoLoading}>
          {(isUserLoading || isRepoLoading) ? 'Loading...' : 'Search'}
        </button>
      </form>

      {(isUserLoading && isRepoLoading) && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}

      {userError && (
        <p style={{ color: 'red' }}>
          {userError.message} 
          {repoError && ` and ${repoError.message}`}
        </p>
      )}
    </>
  )
}