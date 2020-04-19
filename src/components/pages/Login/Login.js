import React, {Component} from 'react';
import {Button, Grid, Link, TextField, Typography} from "@material-ui/core";
import styles from "./Login.module.css"
import {Redirect} from "react-router-dom";
import {signIn} from "../../../requests/users";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: "", password: "", success: false, error: false}
  }

  submit = async (event) => {

    event.preventDefault();
    const {login, password} = this.state;
    try {
      await signIn(login, password);
      this.setState({success: true})
    } catch (e) {
      this.setState({error: true, errorMessage: e.message})
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
              <Grid className={styles.messageContainer}>
                {this.state.error &&
                <Typography color={"error"}>
                  {this.state.errorMessage ? this.state.errorMessage : "Something gone wrong"}
                </Typography>}
              </Grid>
            </form>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Login;