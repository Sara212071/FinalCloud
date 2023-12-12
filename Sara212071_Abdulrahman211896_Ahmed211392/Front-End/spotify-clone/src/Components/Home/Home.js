import React, { Fragment, useState } from "react";
import classes from "./Home.module.css";
import InnerList from "../InnerLIst/InnerLIst";

const Home = (props) => {
  const [innerPlayListIsActive, updateInnerPlayListIsActive] = useState(false);
  const [songsList, updateSongsList] = useState([]);

  const exploreClickHandler = () => {
    updateInnerPlayListIsActive(true);
  };

  return (
    <div>
      <div className={classes.innerApp}>
        <div className={classes.playLists}>
          {props.dummyPlayListsLefter.map((list) => {
            return (
              <Fragment>
                {!innerPlayListIsActive ? (
                  <div
                    key={Math.floor(Math.random() * (1000 - 1 + 1)) + 1}
                    className={classes.playList}
                  >
                    <div className={classes.content}>
                      <h1>{list.listName}</h1>
                      <p>{list.description}</p>
                      <p>{list.owner}</p>
                    </div>

                    <button songs={list.songs} onClick={exploreClickHandler}>
                      Explore Album
                    </button>
                  </div>
                ) : (
                  <InnerList songsList={songsList}></InnerList>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
