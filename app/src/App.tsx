/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FC } from 'react'
import Dashboard from './components/modules/Dashboard'
import SignIn from './components/pages/Signin'
import UserRegst from './components/pages/UserRegst'
import { useFetch } from 'react-async'
import UserIndexTable from './components/pages/UserIndexTable'
import ClippedDrawer from './components/pages/ClippedDrawer'
import TranslationForm from './components/pages/TranslationForm'
import DocsArticle from './components/pages/DocsArticle'

const App: React.FC = () => {
  // To be replaced by the endpoint of the API deployed through the CloudFormation Template
  const APIEndPoint = 'http://xxxxx.execute-api.ap-northeast-1.amazonaws.com/v1'
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/about" element={<Dashboard barName="Dash Board" />} />
          <Route
            path="/users"
            element={<Dashboard name={<UserIndexTable />} barName="Users" />}
          />
          <Route path="/setting" element={<Dashboard barName="Setting" />} />
          <Route path="/clipped" element={<ClippedDrawer />} />
          <Route path="/user-regst/" element={<UserRegst />} />
          <Route path="/form/" element={<TranslationForm apiKey={''} />} />
          <Route path="/docs-article/" element={<DocsArticle />} />
        </Routes>
      </>
      <APIResult APIEndPoint={APIEndPoint} />
    </BrowserRouter>
  )
}

interface APIResultProps {
  APIEndPoint: string
}

const APIResult: FC<APIResultProps> = ({ APIEndPoint }) => {
  /**
   *  useFetch is a custom hook that returns an object with the following properties:
   *  - data: the data returned by the API
   *  - error: the error returned by the API
   *  - isPending: a boolean that indicates if the request is pending or not
   * - run: a function that can be used to trigger the request manually
   * - reload: a function that can be used to trigger the request again
   */
  const { data, error, isPending } = useFetch(APIEndPoint, { headers: {} })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>
  }

  if (data) {
    return null // <div>{data}</div>
  }

  return null
}

export default App
