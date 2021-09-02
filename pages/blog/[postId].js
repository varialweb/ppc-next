const contentful = require('contentful')
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../../components/layout"
import styles from '../../styles/post.module.scss'

export async function getStaticPaths() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENV,
    accessToken: process.env.CONTENTFUL_ACCESS,
  })
  let paths = []

  await client.getEntries({
    content_type: 'ppcBlogPost'
  }).then((entries) => {
    entries.items.map(post => {
      let slug = post.fields.slug
      paths.push({
        params: {
          postId: slug,
          contentfulId: post.sys.id,
        }
      })
    })
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENV,
    accessToken: process.env.CONTENTFUL_ACCESS,
  })

  let post = {}

  await client.getEntries({
    content_type: 'ppcBlogPost',
    'fields.slug': params.postId,
  }).then(entries => {
    const fields = entries.items[0].fields

    post.title = fields.title
    post.date = entries.items[0].sys.createdAt
    post.mainImage = {
      url: 'https:' + fields.mainImage.fields.file.url,
      alt: fields.mainImage.fields.description,
      width: fields.mainImage.fields.file.details.image.width,
      height: fields.mainImage.fields.file.details.image.height,
    }
    post.author = {
      name: fields.author.fields.name,
      img: {
        url: 'https:' + fields.author.fields.picture.fields.file.url,
        alt: fields.author.fields.picture.fields.description,
        width: fields.author.fields.picture.fields.file.details.image.width,
        height: fields.author.fields.picture.fields.file.details.image.height,
      }
    }

    post.body = []
    post.body = JSON.stringify(fields.postBody)
    // post.body = documentToReactComponents(fields.postBody)

      // fields.postBody.content.map(entry => {
      //   // console.log(entry)
      //   switch (entry.nodeType) {
      //     case 'heading-1':
      //       post.body.push({ h1: entry.content[0].value})
      //       break
      //     case 'heading-2':
      //       post.body.push({ h2: entry.content[0].value})
      //       break
      //     case 'ordered-list':
      //       let orderList = []
      //       entry.content.map(listItem => {
      //         // console.log(listItem)
      //         listItem.content.map(listItemContent => {
      //           console.log(listItemContent)
      //           // switch ()
      //         })
      //       })
      //       break
      //     case 'paragraph':
      //       let para = []
      //       entry.content.map(node => {
      //         // console.log('paraNode', node)
      //         switch (node.nodeType) {
      //           case 'text':
      //             if (node.value !== '')
      //               para.push({ text: node.value})
      //             break
      //           case 'hyperlink':
      //             // console.log('anchor text', node.content[0].value)
      //             para.push({ 
      //               a: {
      //                 href: node.data.uri,
      //                 text: node.content[0].value,
      //               }
      //             })
      //             break
      //         }
      //       })
      //       if (para.length !== 0)
      //       {post.body.push({p: para})}
      //       break
      //   }
      // })
  })
  return {
    props: {
      post
    }
  }
}

export default function BlogPost({post}) {
  console.log(post.body)
  return (
    <Layout>
      <article className={styles.article}>
        <header>
          <h1>{post.title}</h1>
          <img src={post.mainImage.url} alt={post.mainImage.alt}/>
          <p>{new Date(post.date).toDateString()}</p>
          <p>{post.author.name}</p>
          <img src={post.author.img.url} alt={post.author.name} />
        </header>
        <main>
          {
            documentToReactComponents(JSON.parse(post.body))
          }
        </main>
      </article>
    </Layout>
  )
}