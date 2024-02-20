import BlogItem from '../BlogItem'
import './index.css'

const BlogList = prop => {
  const {blogsList} = prop
  return (
    <ul className="blogs-list">
      {blogsList.map(blogItem => (
        <BlogItem key={blogItem.id} blogDetails={blogItem} />
      ))}
    </ul>
  )
}

export default BlogList
