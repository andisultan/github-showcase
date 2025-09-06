import { Octokit } from '@octokit/rest' 
import { GitHubUser, GitHubRepository } from '../types/github' 

class GitHubAPI { 
  private octokit: Octokit 
  constructor() { 
    this.octokit = new Octokit({ 
      auth: import.meta.env.VITE_GITHUB_TOKEN
    })
  } 
    
  async getUser(username: string): Promise<GitHubUser> { 
    try { 
      const { data } = await this.octokit.rest.users.getByUsername({ username, }) 
      return data as GitHubUser 
    } catch (error: any) { 
      if (error.status === 404) { 
        throw new Error(`User '${username}' not found`) 
      } 
      
      throw new Error('Failed to fetch user data') 
    } 
  } 
  
  async getUserRepositories(username: string, page = 1, perPage = 30): Promise<GitHubRepository[]> { 
    try { 
      const { data } = await this.octokit.rest.repos.listForUser({ username, per_page: perPage, page, sort: 'updated', direction: 'desc', }) 
      return data as GitHubRepository[] 
    } catch (error: any) { 
      throw new Error('Failed to fetch repositories') 
    } 
  } 
  
  async getRepositoryReadme(owner: string, repo: string): Promise<string> {
    const { data } = await this.octokit.rest.repos.getReadme({ owner, repo });
    const content = (data as any).content ?? '';
    const encoding = (data as any).encoding ?? 'base64';
    return encoding === 'base64'
      ? atob(content.replace(/\n/g, ''))
      : content;
  }

    
  async searchUsers(query: string): Promise<GitHubUser[]> { 
    try { 
      const { data } = await this.octokit.rest.search.users({ q: query, per_page: 10, }) 
      return data.items as GitHubUser[] 
    } catch (error: any) { 
      throw new Error('Failed to search users') } 
  } 
}
    
export const githubApi = new GitHubAPI()