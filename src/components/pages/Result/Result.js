import React, {Component} from 'react';
import {
  Box,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid, Link,
  Typography
} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {getCurrentUser} from "../../../requests/users";
import styles from "./Result.module.css"
import Auto from "./Auto/Auto";
import {GET_CURRENT_USER, HOST} from "../../../consts/paths";

class Result extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {user: undefined}
  }

  componentDidMount() {
    try {
      const jsonAnswer = getCurrentUser();
      jsonAnswer.then(user => this.setState({user})).catch(() => {
        this.setState({error: true})
      })
    } catch (e) {
    }
  }

  render() {
    return (
      <>
        {this.state.error && <Redirect to={{
          pathname: "/login"
        }}/>}
        {this.state.user &&
        <Box className={styles.container}>
          <Box className={styles.item}>
            <Typography>Welcome to the club, {this.state.user?.name}.</Typography>
          </Box>
          <Box className={styles.item}>
            <ExpansionPanel className={styles.panel}>
              <ExpansionPanelSummary>
                <Typography>Просмотреть данные</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container alignItems={"flex-start"} direction={"column"}>
                  <Grid item>
                    <Typography>
                      id: {this.state.user?.id}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      name: {this.state.user?.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      login: {this.state.user?.login}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      auto rentals:
                    </Typography>
                  </Grid>
                  <Grid direction={"column"} container>
                    {this.state.user?.autoRentals.map(ar => (
                      <>
                        <Grid className={styles.arrayContainer}>
                          <Typography className={styles.arField}>auto rental id: {ar.id}</Typography>
                          <Typography className={styles.arField}>autos:</Typography>
                          <Grid className={styles.arrayContainer}>
                            {
                              ar.autos?.map((a) => <Auto key={a.id} auto={a}/>)
                            }
                          </Grid>
                        </Grid>
                        <div className={styles.divider}/>
                      </>
                    ))}
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Box>
          <Box className={styles.item}>
            <Link href={`${HOST}/${GET_CURRENT_USER}?download=true`}>Download iiiiiiiiii</Link>
          </Box>
        </Box>
        }
      </>
    );
  }
}

export default Result;
