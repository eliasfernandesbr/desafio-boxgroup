import React from 'react'

export default function RepoCard({repo}) {
    return (
        <li>
          <h2>{repo.full_name}</h2>
          <p>Criado em: {repo.created_at}</p>
          <a href={repo.html_url} target='_blank'>Ver no Github</a>
        </li>
    )
}
