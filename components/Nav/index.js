import Link from 'next/link';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const pids = ['ssg-ssr', 'pre-rendering']

const Nav = () => (
  <nav>
    <style dangerouslySetInnerHTML={{
      __html: `
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: flex-start;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: block;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}}></style>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/about" >
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link href="/about?id=3" >
          <a>About With ID</a>
        </Link>
      </li>

      <li>
        <Link href="/template" >
          <a>Template</a>
        </Link>
      </li>
      <li>
        {
          pids.map((id,i) => (
            <Link href="/posts/[pid]" as={`/posts/${id}`} >
              <a>Post {id} </a>
            </Link>
          ))
        }
        <Link href="/blog/[...id]" as="/blog/demo-blog/121">
          <a>Blog</a>
        </Link>
      </li>

    </ul>

  </nav>
)

export default Nav
