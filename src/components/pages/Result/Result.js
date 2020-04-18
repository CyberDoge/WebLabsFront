import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {GET_CURRENT_USER, HOST} from "../../../consts/paths";

class Result extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {user: undefined}
  }

  componentDidMount() {
    fetch(`${HOST}/${GET_CURRENT_USER}`, {
        method: 'get',
        mode: 'cors', // credentials: 'same-origin',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json()).then(result => {
      this.setState({user: result})
    })
  }

  render() {
    return (
      <Grid container>
        <Grid item>
          <Typography>{this.state.user?.name}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Result;