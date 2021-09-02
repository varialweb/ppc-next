const contentful = require('contentful')
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/blog.module.scss'

export async function getServerSideProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENV,
    accessToken: process.env.CONTENTFUL_ACCESS,
  })
  let formattedPosts = []

  await client.getEntries({
    content_type: 'ppcBlogPost'
  })
  .then((entries) => {
    const posts = entries.items

    posts.map(post => {
      console.log(post)
      const fields = post.fields
      const title = fields.title
      const slug = fields.slug
      const date = post.sys.createdAt
      const mainImage = {
        url: 'https:' + fields.mainImage.fields.file.url,
        alt: fields.mainImage.fields.description,
        width: fields.mainImage.fields.file.details.image.width,
        height: fields.mainImage.fields.file.details.image.height,
      }
      const author = {
        name: fields.author.fields.name,
        img: {
          url: 'https:' + fields.author.fields.picture.fields.file.url,
          alt: fields.author.fields.picture.fields.description,
          width: fields.author.fields.picture.fields.file.details.image.width,
          height: fields.author.fields.picture.fields.file.details.image.height,
        }
      }

      // console.log(post.sys.updatedAt)

      // console.log(fields.mainImage.fields.description)
      // console.log(fields.author.fields.picture.fields.file.url)

      let body = []

      fields.postBody.content.map(entry => {
        // console.log(entry)
        switch (entry.nodeType) {
          case 'heading-1':
            body.push({ h1: entry.content[0].value})
            break
          case 'heading-2':
            body.push({ h2: entry.content[0].value})
            break
          case 'paragraph':
            let para = []
            entry.content.map(node => {
              // console.log('paraNode', node)
              switch (node.nodeType) {
                case 'text':
                  if (node.value !== '')
                    para.push({ text: node.value})
                  break
                case 'hyperlink':
                  console.log('anchor text', node.content[0].value)
                  para.push({ 
                    a: {
                      href: node.data.uri,
                      text: node.content[0].value,
                    }
                  })
                  break
              }
            })
            if (para.length !== 0)
            {body.push({p: para})}
            break
        }
      })

      formattedPosts.push({
        title: title,
        slug: slug,
        date: date,
        author: author,
        mainImage: mainImage,
        body: body,
      })

      // console.log(body)

      // console.log(fields.postBody.content[0])
    })
  })
  .catch(console.error)

  return {
    props: {
      posts: formattedPosts
    }
  }
}

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <main className={styles.blog}>
        {
          posts.map(post => {
            let snip = ''
            const date = new Date(post.date)
            return (
              <article key={post.title} className={styles.postCard}>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <div className={styles.imgWrapper}>
                    <div className={styles.imgFilter}/>
                    <picture>
                      <img
                        className={styles.mainImage} 
                        src={post.mainImage.url} 
                        alt={post.mainImage.alt} 
                        width={post.mainImage.width} 
                        height={post.mainImage.height}
                      />
                    </picture>
                  </div>
                  </a>
                </Link>
                <div className={styles.content}>
                  <h2>{post.title}</h2>
                  {
                    post.body.map(entry => {  
                      if (entry.p && snip.length === 0) {
                        entry.p.map(para => {
                          if (para.text) {
                            // console.log(para.text)
                            snip = para.text
                          }
                        })
                      }
                    })
                  }
                  <p>{snip}</p>
                  <section className={styles.authorSection}>
                    <div className={styles.authorImgWrapper}>
                      <div className={styles.authorFilter}/>
                      <img 
                        src={post.author.img.url} 
                        alt={post.author.img.alt} 
                        width={post.author.img.width}
                        height={post.author.img.height}
                      />
                    </div>
                    <p className={styles.author}>{post.author.name}</p>
                    <p className={styles.date}>{date.toDateString()}</p>
                  </section>
                </div>
              </article>
            )
          })
        }
      </main>
    </Layout>
  )
}