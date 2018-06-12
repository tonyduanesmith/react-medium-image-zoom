import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Grid } from '@material-ui/core'
import ImageZoom from '../../lib'

class App extends Component {
  render() {
    return (
      <Grid container spacer={40}>
        <Grid item xs={4}>
          <ImageZoom
            image={{
              src: 'http://lorempixel.com/400/200/sports/1',
              alt: 'Golden Gate Bridge',
              className: 'img'
            }}
            zoomImage={{
              src: 'http://lorempixel.com/400/200/sports/1',
              alt: 'Golden Gate Bridge',
              className: 'img--zoomed'
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <ImageZoom
            image={{
              src:
                'http://www.printerspec.co.uk/akzonobelimagedatabase/IDBImages/100947007_400942028.jpg',
              alt: 'Picture of Mt. Cook in New Zealand',
              className: 'img'
            }}
            zoomImage={{
              src:
                'http://www.printerspec.co.uk/akzonobelimagedatabase/IDBImages/100947007_400942028.jpg',
              alt: 'Golden Gate Bridge',
              className: 'img--zoomed'
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <ImageZoom
            image={{
              src: 'gazelle.jpg',
              alt: 'Gazelle Stomping',
              className: 'img'
            }}
          />
        </Grid>
      </Grid>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
