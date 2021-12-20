import { useLoaderData, json } from "remix";

export function loader() {
  const results = [
    {
      slug: "test-1",
      description: "This is a test",
    },
    {
      slug: "test-2",
      description: "This is a second post",
    },
  ];

  return json({ posts: results });
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      {data && (
        <ul>
          {data.posts.map((post) => (
            <li key={post.slug}>{post.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
