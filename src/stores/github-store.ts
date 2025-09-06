import { create } from 'zustand'
import type { GitHubUser, GitHubRepository, GitHubReadme } from '../types/github'

type GitHubStoreProps = {
  username: string
  setUsername: (newUsername: string) => void
  user: GitHubUser | null
  setUser: (newUser: GitHubUser | null) => void
  repositories: GitHubRepository[] | null
  setRepositories: (newRepositories: GitHubRepository[] | null) => void
  readmeParams: GitHubRepository | null,
  setReadmeParams: (newReadme: GitHubRepository | null) => void
}

const githubStore = create<GitHubStoreProps>((set) => ({
  username: '',
  setUsername: (newUsername) => set({ username: newUsername }),
  user: null,
  setUser: (newUser) => set({ user: newUser }),
  repositories: null,
  setRepositories: (newRepositories) => set({ repositories: newRepositories }),
  readmeParams: null,
  setReadmeParams: (newReadme) => set({ readmeParams: newReadme })
}))

export default githubStore