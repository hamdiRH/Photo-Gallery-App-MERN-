/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { startLoadPhotos } from "../actions/photos";
import Photo from "./Photo";

const Gallary = ({ errors, photos, dispatch,loading }) => {
  const [isLoading, setIsLoading] = useState(false);
console.log(photos,loading)
  useEffect(() => {
    setIsLoading(true);
    dispatch(startLoadPhotos());
  }, []);

  useEffect(() => {
    if (photos.length > 0) {
      setIsLoading(false);
    }
  }, [photos]);

  return (
    <div className="photos-list">
      {errors && errors.get_error && (
        <p className="errorMsg centered-message">{errors.get_error}</p>
      )}
      {loading ? (
        <div className="loading-msg centered-message">Loading...</div>
      ) : (
        photos.map((photo) => <Photo key={photo._id} id={photo._id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos.photos || [],
  loading: state.photos.loading ,
  errors: state.errors || {},
});

export default connect(mapStateToProps)(Gallary);
