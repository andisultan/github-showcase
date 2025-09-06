import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import githubStore from '../../../stores/github-store'
import Modal from '../../ui/modal'
import Spinner from '../../ui/spinner'
import { useGitHubRepositoryReadme } from '../../../hooks/use-github'

export default function GithubDetailReadmeModal() {
  const readmeParams = githubStore(state => state.readmeParams)
  const setReadmeParams = githubStore(state => state.setReadmeParams)
  const owner = readmeParams?.full_name.split('/')[0] || ''
  const repo = readmeParams?.name || ''
  const { data, isLoading, error } = useGitHubRepositoryReadme(owner, repo)

  return (
    <Modal title={readmeParams?.name} show={!!readmeParams} onClose={() => setReadmeParams(null)}>
      {isLoading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      {error && <p>{error.message}</p>}

      {data && (
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="markdown-heading">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="markdown-heading">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="markdown-heading">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h3 className="markdown-heading">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p>
                  {children}
                </p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code>
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre>
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote>
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul>
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol>
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li>{children}</li>
              ),
              table: ({ children }) => (
                <table>
                  {children}
                </table>
              ),
              th: ({ children }) => (
                <th>
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td>
                  {children}
                </td>
              ),
            }}
          >
          {data}
        </ReactMarkdown>
      )}
    </Modal>
  )
}