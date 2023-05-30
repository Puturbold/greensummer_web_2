import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl  font-bold tracking-tighter leading-tight bg-black max-w-xl">
      I have extensive knowledge in remote sensing on edge devices, construction management, cost estimation, and machine learning. I am a fervent urbanist, driven by a deep interest in exploring the connection between data and cities.
      </h2>

      <div className='flex text-xl font-bold flex-row gap-6 mb-6 mt-6'>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-2 lg:gap-x-10 gap-y-10 md:gap-y-10 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
