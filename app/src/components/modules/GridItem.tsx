import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import '../../App.css'

export default function GridItem(props: any) {
  return (
    <Grid container sx={{ color: 'text.primary' }} spacing={0}>
      <Grid item xs={1}>
        <Typography>{props.element.icon}</Typography>
      </Grid>
      <Grid item xs={2}>
        {props.element.itemVal}
      </Grid>
    </Grid>
  )
}
