import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import {
  Grid,
  Paper,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@material-ui/core'
import { Language as LanguageIcon } from '@material-ui/icons'
import Header from '../modules/TopHeader'

type TranslationResponse = {
  result: string
}

type TranslationFormProps = {
  apiKey: string
}

const TranslationForm: React.FC<TranslationFormProps> = ({ apiKey }) => {
  const [sourceText, setSourceText] = useState('')
  const [targetText, setTargetText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('ja')

  const translateText = async () => {
    const apiUrl = 'https://api.modernmt.com/translate'

    try {
      const response: AxiosResponse<TranslationResponse> = await axios.post(
        apiUrl,
        {
          source_lang: sourceLang,
          target_lang: targetLang,
          text: sourceText,
          apiKey: apiKey,
        }
      )

      setTargetText(response.data.result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <LanguageIcon />
              </Grid>
              <Grid item xs>
                <TextField
                  id="source-text"
                  label="Source Text"
                  value={sourceText}
                  onChange={(event) => setSourceText(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel>Source Language</InputLabel>
                  <Select
                    value={sourceLang}
                    onChange={(event) =>
                      setSourceLang(event.target.value as string)
                    }
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    {/* add more options for other languages */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <LanguageIcon />
              </Grid>
              <Grid item xs>
                <TextField
                  id="target-text"
                  label="Target Text"
                  value={targetText}
                  disabled
                  fullWidth
                />
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel>Target Language</InputLabel>
                  <Select
                    value={targetLang}
                    onChange={(event) =>
                      setTargetLang(event.target.value as string)
                    }
                  >
                    <MenuItem value="ja">Japanese</MenuItem>
                    <MenuItem value="zh">Chinese</MenuItem>
                    <MenuItem value="ko">Korean</MenuItem>
                    {/* add more options for other languages */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={translateText}>
            Translate
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default TranslationForm
