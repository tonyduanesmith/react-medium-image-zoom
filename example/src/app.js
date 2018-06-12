import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core'
import ImageZoom from '../../lib'

class App extends Component {
  render() {
    return (
      <Grid container spacer={40}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            <CardHeader
              avatar={
                <Avatar>TS</Avatar>
              }
              title="title"
              subheader="subheader"
            >
            </CardHeader>
          <ImageZoom
            image={{
              src: 'http://lorempixel.com/400/200/sports/1',
              alt: 'Golden Gate Bridge',
              className: 'img',
                style: { height: '300px' }
            }}
            zoomImage={{
              src: 'http://lorempixel.com/400/200/sports/1',
              alt: 'Golden Gate Bridge',
              className: 'img--zoomed',
              style: { height: '300px' }
            }}
          />
            <CardContent>
              <Typography component="p">TD ID: </Typography>
              <Typography component="p">Printer: </Typography>
              <Typography component="p">Project: </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            <CardHeader
              avatar={
                <Avatar>TS</Avatar>
              }
              title="title"
              subheader="subheader"
            >
            </CardHeader>
          <ImageZoom
            image={{
              src:
                'http://www.printerspec.co.uk/akzonobelimagedatabase/IDBImages/100947007_4009420e28.jpg',
              alt: 'Picture of Mt. Cook in New Zealand',
              className: 'img',
              style: { height: '300px' }
            }}
            zoomImage={{
              src:
                'http://brokenlink.jpg',
              alt: 'Golden Gate Bridge',
              className: 'img--zoomed'
            }}
          />
            <CardContent>
              <Typography component="p">TD ID: </Typography>
              <Typography component="p">Printer: </Typography>
              <Typography component="p">Project: </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            <CardHeader
              avatar={
                <Avatar>TS</Avatar>
              }
              title="title"
              subheader="subheader"
            >
            </CardHeader>
          <ImageZoom
            image={{
              src: 'gazelle.jpg',
              alt: 'Gazelle Stomping',
              className: 'img',
                style: { height: '300px' }
            }}
          />
            <CardContent>
              <Typography component="p">TD ID: </Typography>
              <Typography component="p">Printer: </Typography>
              <Typography component="p">Project: </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
