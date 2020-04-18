import React, {Component} from 'react';
import {Button, Grid, Link, TextField} from "@material-ui/core";
import styles from "./Login.module.css"
import {Redirect} from "react-router-dom";
import {HOST, LOGIN_PATH} from "../../../consts/paths";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: "", password: "", success: false, error: false}
  }

  submit = async (event) => {

    event.preventDefault();
    const {login, password} = this.state;
    const response = await fetch(`${HOST}/${LOGIN_PATH}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({login, password})
    });
    if (response.status === 403) {
      this.setState({error: true})
    } else if (response.status === 200) {
      console.log("success")
      this.setState({error: false, success: true})
    }
  };


  render() {
    return (
      <>
        {this.state.success && <Redirect
          to={{
            pathname: "/result"
          }}
        />}
        <Grid className={styles.container} container>
          <Grid item>
            <form onSubmit={this.submit}>
              <TextField
                onChange={(e) => {
                  this.setState({login: e.target.value})
                }}
                value={this.state.login}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="Login"
                autoComplete="login"
                autoFocus
                error={this.state.error}
              />
              <TextField
                onChange={(e) => {
                  this.setState({password: e.target.value})
                }}
                value={this.state.password}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={this.state.error}
              />
              <Grid justify={"flex-end"} alignItems={"center"} spacing={5} container>
                <Grid item xs={5}>
                  <Link href={"https://lmgtfy.com/?q=how+to+brute+force+password%3F&s=l"}>Forgot password?</Link>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Login;