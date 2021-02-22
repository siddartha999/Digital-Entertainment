import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./ContentModal.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Rating from '@material-ui/lab/Rating';

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const unavailable =
  "https://www.movienewz.com/img/films/poster-holder.jpg";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "80%",
    height: "80%",
    backgroundColor: "rgb(20, 20, 20)",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

const ContentModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const video = useRef();
  const credits = useRef([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Function to fetch the video data of a show. 
   */
  const fetchVideoData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${props.mediaType}/${props.id}/videos?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
    );
    video.current = (data.results[0]?.key);
  };

  /**
   * Function to fetch the data of a show.
   */
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${props.mediaType}/${props.id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  /**
   * Function to fetch the credits(actors) of a show.
   */
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${props.mediaType}/${props.id}/credits?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
    );
    credits.current = (data.cast);
  };

  useEffect(() => {
    fetchCredits();
    fetchData();
    fetchVideoData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ContentModal">
      <button type="button" onClick={handleOpen} className="ContentModal-wrapper-button">
        {props.children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

        {content && (
              <div className={`${classes.paper} ContentModal-Dialog`}>
                <div className="ContentModal">
                  <div className="ContentModal-header">
                    <div className="ContentModal-poster-wrapper">
                        <img
                          src={content.poster_path ? `${img_300}/${content.poster_path}` : unavailable}
                          alt={content.name || content.title}
                          className="ContentModal-poster"
                        />
                    </div>
                    <div className="ContentModal-credits-wrapper">
                      {
                        credits.current && credits.current.map(item => (
                          <div className="ContentModal-credit-image-wrapper" key={item.id}> 
                               <img src={item.profile_path ? `${img_300}/${item.profile_path}` : unavailable}
                                  alt={item?.name} title={item?.original_name}                             
                                />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className="ContentModal-details">
                      <span className="ContentModal-details-title">
                        {content.name || content.title} (
                        {(
                          content.first_air_date ||
                          content.release_date ||
                          "-----"
                        ).substring(0, 4)}
                        )<br />
                      </span>
                    {content.tagline && (
                      <i className="tagline">{" " + content.tagline + " "}<br /></i>
                    )}

                    <span className="ContentModal-details-description">
                      {content.overview}
                    </span>
                  </div>
                  <div className="ContentModal-trailer-button-wrapper">
                    <Rating name="size-small" defaultValue={Math.round(props.voteAverage) / 2} precision={0.5} size="small" />
                    <Button
                        variant="contained"
                        startIcon={<YouTubeIcon />}
                        color="secondary"
                        target="__blank"
                        href={`https://www.youtube.com/watch?v=${video.current}`}
                      >
                        Watch the Trailer
                      </Button>
                  </div>
                </div>
              </div>
            )}

        </Fade>
      </Modal>
    </div>
  );
}

export default ContentModal;