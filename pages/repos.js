import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/getpublicrepos', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <center>
        {data.map((repo, index) => (
          <h3 key={index}>
            <a href={repo.url}>{repo.name}</a>
          </h3>
        ))}
      </center>
    </div>
  )
}
