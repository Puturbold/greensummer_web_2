import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl  font-bold tracking-tighter leading-tight bg-black max-w-xl">
      NogoonZun is a digital platform, providing integrative evidence-based decision-making geospatial visualization tools for herders, local governments, and conservationists.  
      </h2>

      <div>
        <iframe 
          src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/z829s6saxw9ndu4/keplergl_6vlnbt9.json"
          style={{
            border: "none",
            width: "100%",
            height: "500px"
          }}
        ></iframe>
      </div>

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
