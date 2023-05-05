import React, { useEffect, useState } from 'react'
import { Typography, List, ListItem, Link } from '@mui/material'
import Header from '../modules/TopHeader'
import { makeStyles } from '@material-ui/core/styles'

/** NOTE:
 * Import in TypeScript doesn't work, so I used require to disable the ESLint rule.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const marked = require('marked')

type Section = {
  id: string
  title: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 100,
    left: 0,
    width: '200px',
    height: 'calc(100vh - 100px)',
    overflowY: 'scroll',
  },
  content: {
    flex: 1,
    marginLeft: '200px',
  },
}))

const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  if (href) {
    const targetElement = document.querySelector(href)
    const targetOffsetTop = targetElement?.getBoundingClientRect().top ?? 0
    window.scrollTo({
      top: window.scrollY + targetOffsetTop - 100,
      behavior: 'smooth',
    })
  }
}

const SamplePage: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([])
  const classes = useStyles()

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
        <div className={classes.root}>
          <List>
            {sections.map((section) => (
              <ListItem key={section.id}>
                <Link
                  href={`#${section.id}`}
                  underline="hover"
                  color="primary"
                  onClick={handleSectionClick}
                >
                  {section.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
        {/**TODO: DBから記事を取得できるようにする */}
        <div className={classes.content}>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={renderMarkdown(`
## 本文をマークダウン風の形式で記述します。
1. まずはこれを書きます。
2. 次にこれを書きます。
3. 最後にこれを書きます。

Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.

Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
assumenda et! 

Quibusdam temporibus beatae doloremque voluptatum doloribus
soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
delectus quo eius exercitationem tempore. Delectus sapiente, provident
corporis dolorum quibusdam aut beatae repellendus est labore quisquam
praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
deleniti modi! 

Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
voluptate iure labore, repellendus beatae quia unde est aliquid dolor
molestias libero. Reiciendis similique exercitationem consequatur, nobis
placeat illo laudantium! Enim perferendis nulla soluta magni error,
provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
Illum, corrupti? Fugiat quidem accusantium nulla. 

Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.

Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
dolores sunt inventore perferendis, aut sapiente modi nesciunt.       
        `)}
          />
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={renderMarkdown(`
## さらに詳細な説明を書きます。
1. まずはこれを書きます。
2. 次にこれを書きます。
3. 最後にこれを書きます.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.

Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
assumenda et! 

Quibusdam temporibus beatae doloremque voluptatum doloribus
soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
delectus quo eius exercitationem tempore. Delectus sapiente, provident
corporis dolorum quibusdam aut beatae repellendus est labore quisquam
praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
deleniti modi! 

Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
voluptate iure labore, repellendus beatae quia unde est aliquid dolor
molestias libero. Reiciendis similique exercitationem consequatur, nobis
placeat illo laudantium! Enim perferendis nulla soluta magni error,
provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
Illum, corrupti? Fugiat quidem accusantium nulla. 

Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.

Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
dolores sunt inventore perferendis, aut sapiente modi nesciunt.  

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
