import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";

class Auto extends Component {

  render() {
    return (
      <Grid direction={"column"} alignItems={"flex-start"} container>
        <Grid item><Typography>id: {this.props.auto?.id}</Typography></Grid>
        <Grid item><Typography>model: {this.props.auto?.model}</Typography></Grid>
        <Grid item><Typography>producer: {this.props.auto?.producer}</Typography></Grid>
        <Grid item><Typography>count: {this.props.auto?.count}</Typography></Grid>
        <Grid item><Typography>price: {this.props.auto?.price}</Typography></Grid>
        <br/>
      </Grid>
    );
  }
}

export default Auto;
