import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl text-accent-2 font-bold tracking-tighter leading-tight bg-accent-1 max-w-xl">
      NogoonZun is a digital platform, providing integrative evidence-based decision-making geospatial visualization tools for herders, local governments, and conservationists.  
      </h2>

      <div>
        <iframe 
          src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/9mfeff500gzbamd39hecy/keplergl_5v7c9oi.json"
          style={{
            border: "none",
            width: "100%",
            height: "800px"
          }}
        ></iframe>
      </div>

      <div className='flex text-xl font-bold flex-row gap-6 mb-6 mt-6'>

      </div>
      
    </section>
  )
}

export default MoreStories
