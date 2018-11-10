import React, { Component } from "react";
import { connect } from 'react-redux';
import Poster from '../components/Poster';

class MovieInfo extends Component {

	render() {
		const { imgUrl, error } = this.props;
		return (
			<Poster imgUrl={imgUrl} error={error}/>
		);
	}
}

const mapStateToProps = state => {
  	return {
		imgUrl: state.Poster,
		error: state.Error,
  	};
};

export default connect(mapStateToProps, [])(MovieInfo);



