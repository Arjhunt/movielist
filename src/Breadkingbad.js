import { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Breadkingbad({ name, poster, summary, rating }) {
  const [state, setstate] = useState(0);
  const [dislike, setdislike] = useState(0);
  const styles = {
    color: rating > 8.5 ? "green" : "red"
  };
  const [show, setshow] = useState(false);
  const summstyle = {
    display: show ? "block" : "none",
  };
  return (
    <div className="display">
      <img className="imagedisplay" src={poster}></img>
      <div className="head">
        <h2 className="name">{name}</h2>
        <p style={styles}>⭐{rating}</p>
      </div>
      {show ? <Button color="secondary" onClick={() => setshow(!show)}>Hide</Button> : <Button color="secondary" onClick={() => setshow(!show)}>Know more</Button>}
      <p className=" summ" style={summstyle}>{summary}</p>
      <div className="symbol">
        <IconButton color="success"
          className="thumbs" onClick={() => setstate(state + 1)} aria-label="like button">
          <Badge badgeContent={state} color="success">
            👍
          </Badge>
        </IconButton>
        <IconButton color="error"
          className="down" onClick={() => setdislike(dislike + 1)} aria-label="dislike button">
          <Badge badgeContent={dislike} color="error">👎</Badge>
        </IconButton>
      </div>
    </div>
  );
}
