import { Header } from './components/header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './globalStyles.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JLProdutor.png',
      profileName: 'JL',
      title: 'Web Developeer'
    },
    content: [
      { type: 'paragraph', content: 'Opa!' },
      { type: 'paragraph', content: 'Programar é difícil...' },
      { type: 'paragraph', content: ':(' },
      { type: 'link', content: '#' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JLProdutor.png',
      profileName: 'JL',
      title: 'Web Developeer'
    },
    content: [
      { type: 'paragraph', content: 'Opa!' },
      { type: 'paragraph', content: 'Programar é difícil...' },
      { type: 'paragraph', content: ':(' },
      { type: 'link', content: '#' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/JLProdutor.png',
      profileName: 'JL',
      title: 'Web Developeer'
    },
    content: [
      { type: 'paragraph', content: 'Opa!' },
      { type: 'paragraph', content: 'Programar é difícil...' },
      { type: 'paragraph', content: ':(' },
      { type: 'link', content: '#' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>

      </div>
    </div>
  )
}
