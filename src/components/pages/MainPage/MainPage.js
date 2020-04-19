import React, {Component} from 'react';
import styles from "./MainPage.module.css"

import {Grid, Link, Typography} from "@material-ui/core";

class MainPage extends Component {

  render() {
    return (
      <Grid className={styles.container} justify={"space-around"} alignItems={"center"} container>
        <Grid item>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. In fermentum posuere urna nec tincidunt. Varius quam quisque id diam vel quam elementum
            pulvinar. Venenatis tellus in metus vulputate eu scelerisque felis. Scelerisque varius morbi enim nunc
            faucibus a pellentesque sit. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis.
            Elementum integer enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam.
            Turpis egestas integer eget aliquet. Arcu ac tortor dignissim convallis aenean et. Tempus quam pellentesque
            nec nam aliquam sem et tortor consequat. Interdum varius sit amet mattis vulputate enim nulla aliquet. Vel
            risus commodo viverra maecenas accumsan lacus vel facilisis. Malesuada pellentesque elit eget gravida cum
            sociis natoque. Sed viverra ipsum nunc aliquet bibendum.

            In nulla posuere sollicitudin aliquam ultrices sagittis orci. Massa tincidunt dui ut ornare lectus sit amet
            est. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Egestas congue quisque egestas diam.
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Id diam vel quam elementum pulvinar.
            Adipiscing commodo elit at imperdiet dui accumsan sit amet. Ipsum consequat nisl vel pretium lectus quam.
            Faucibus a pellentesque sit amet porttitor eget. Sed lectus vestibulum mattis ullamcorper velit. Eu nisl
            nunc mi ipsum faucibus vitae. Feugiat vivamus at augue eget arcu. Aliquet nibh praesent tristique magna sit
            amet purus gravida quis. Molestie a iaculis at erat pellentesque adipiscing. Sed risus pretium quam
            vulputate dignissim suspendisse in est ante. Morbi enim nunc faucibus a pellentesque sit amet porttitor.
          </Typography>
        </Grid>
        <Grid item>
          <Link className={styles.link} href={"/result"}>Home</Link>
        </Grid>
        <Grid item>
          <Link className={styles.link} href={"/login"}>🙏🏻Admin!🙏 </Link>
        </Grid>
      </Grid>
    );
  }
}

export default MainPage;