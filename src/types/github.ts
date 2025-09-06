export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description?: string;
  html_url: string;
  clone_url: string;
  ssh_url: string;
  language?: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  default_branch: string;
  topics: string[];
  visibility: string;
  private: boolean;
}

export interface GitHubReadme {
  content: string;
  encoding: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
}

export interface GitHubState {
  user: GitHubUser | null;
  repositories: GitHubRepository[];
  selectedRepo: GitHubRepository | null;
  readme: string | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
}
