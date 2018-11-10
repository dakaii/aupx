import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default ({ imgUrl, error }) => {
    if (imgUrl && imgUrl !== 'N/A') {
        return (
        <Paper  elevation={1}>
            <Grid container wrap="nowrap" spacing={8}>
                <img
                    src={imgUrl}
                    style={styles.image}
                    alt=""
                />
            </Grid>
        </Paper>
        )
    } else {
        return <a>{error}</a>
    }
}


const styles = {
	image: {
		padding: 2,
		marginLeft  : 'auto',
		marginRight : 'auto',
	},
};