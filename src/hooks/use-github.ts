import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import type { GitHubUser, GitHubRepository } from '../types/github'
import { githubApi } from '../services/github-api'

export function useGitHubUser(
  username: string,
  options?: UseQueryOptions<GitHubUser, Error>
) {
  return useQuery<GitHubUser, Error>({
    queryKey: ['githubUser', username],
    queryFn: () => githubApi.getUser(username),
    enabled: !!username,
    ...options,
  })
}

export function useGitHubRepositories(
  username: string,
  options?: UseQueryOptions<GitHubRepository[], Error>
) {
  const page = 1
  const perPage = 30

  return useQuery<GitHubRepository[], Error>({
    queryKey: ['githubRepositories', username, page, perPage],
    queryFn: () => githubApi.getUserRepositories(username, page, perPage),
    enabled: !!username,
    ...options,
  })
}

export function useGitHubSearchUsers(query: string) {
  return useQuery<GitHubUser[], Error>({
    queryKey: ['githubSearchUsers', query],
    queryFn: () => githubApi.searchUsers(query),
    enabled: !!query,
  })
}

export function useGitHubRepositoryReadme(
  owner: string,
  repo: string,
  options?: UseQueryOptions<string, Error, string, [string, string, string]>
) {
  return useQuery<string, Error, string, [string, string, string]>({
    queryKey: ['githubReadme', owner, repo],
    queryFn: () => githubApi.getRepositoryReadme(owner, repo),
    enabled: !!owner && !!repo,
    ...options,
  });
}

