import './index.css'

const BlogItem = prop => {
  const {blogDetails} = prop
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item">
      <div className="blog-details">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
