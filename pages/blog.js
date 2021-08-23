import Layout from "../components/layout";
const contentful = require('contentful')

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
      const fields = post.fields
      const title = fields.title
      const slug = fields.slug
      const author = {
        name: fields.author.fields.name,
        img: {
          url: fields.author.fields.picture.fields.file.url,
          alt: fields.author.fields.picture.fields.description,
          width: fields.author.fields.picture.fields.file.details.image.width,
          height: fields.author.fields.picture.fields.file.details.image.height,
        }
      }

      let body = []

      fields.postBody.content.map(entry => {
        console.log(entry)
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
              console.log('paraNode', node)
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
        author: author,
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
      {
        posts.map(post => {
          let snip = ''
          return (
            <article key={post.title}>
              <h2>{post.title}</h2>
              {
                post.body.map(entry => {  
                  if (entry.p && snip.length === 0) {
                    entry.p.map(para => {
                      if (para.text) {
                        console.log(para.text)
                        snip = para.text
                      }
                    })
                  }
                })
              }
              <p>{snip}</p>
              <section>
                <img 
                  src={post.author.img.url} 
                  alt={post.author.img.alt} 
                  width={post.author.img.width}
                  height={post.author.img.height}
                />
                <p>{post.author.name}</p>
              </section>
            </article>
          )
        })
      }
    </Layout>
  )
}