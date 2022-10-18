import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import '../../App.css'

export default function GridItem(props: any) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
        <Typography
          sx={{ fontSize: props.element.fontSize }}
          color={'text.secondary'}
          gutterBottom
        >
          {props.element.icon}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ fontSize: props.element.fontSize }}
        color={'text.secondary'}
      >
        {props.element.itemVal}
      </Grid>
    </Grid>
  )
}
