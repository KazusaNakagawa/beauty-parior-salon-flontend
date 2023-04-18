import React, { useEffect, useState } from 'react'
import { Typography, List, ListItem, Link } from '@mui/material'
import Header from '../modules/TopHeader'

/** NOTE:
 * Import in TypeScript doesn't work, so I used require to disable the ESLint rule.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const marked = require('marked')

type Section = {
  id: string
  title: string
}

const SamplePage: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll('h1, h2, h3')
    ) as HTMLElement[]
    const sections = sectionElements.map((element) => ({
      id: element.id,
      title: element.textContent || '',
    }))
    setSections(sections)
  }, [])

  const renderMarkdown = (markdown: string) => {
    return { __html: marked(markdown) }
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', height: '100vh', overflowY: 'scroll' }}>
          <List>
            {sections.map((section) => (
              <ListItem key={section.id}>
                <Link href={`#${section.id}`} underline="hover" color="primary">
                  {section.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
        {/**TODO: DBから記事を取得できるようにする */}
        <div style={{ flex: 1, marginLeft: '20px' }}>
          {/* <Typography variant="h2" id="section1">
          Section 1
        </Typography> */}
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={renderMarkdown(`
## 本文をマークダウン風の形式で記述します。
1. まずはこれを書きます。
2. 次にこれを書きます。
3. 最後にこれを書きます。        
        `)}
          />
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={renderMarkdown(`
## さらに詳細な説明を書きます。
1. まずはこれを書きます。
2. 次にこれを書きます。
3. 最後にこれを書きます。        

`)}
          />
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={renderMarkdown(`
## 最後にまとめを書きます。
1. まずはこれを書きます。
2. 次にこれを書きます。
3. 最後にこれを書きます。        
`)}
          />
        </div>
      </div>
    </>
  )
}

export default SamplePage
