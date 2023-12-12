import React, { useState } from "react";
import "./App.css";

import Home from "./Components/Home/Home";
import SideBar from "./Components/SideBar/SideBar";
import ControlPanal from "./Components/ControlPanal/ControlPanal";
// import InnerLIst from "./Components/InnerLIst/InnerLIst";
import ActiveUsers from "./Components/ActiveUsers/ActiveUsers";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import LoginForm from "./Components/Header/LoginForm/LoginForm";
import SignupForm from "./Components/Header/SignupForm/SignupForm";
import img from "./Assets/poster.jpg";

function App() {
  const [homeIsActive, updateHomeIsActive] = useState(true);
  const [profileIsActive, UpdateProfileIsActive] = useState(false);
  const [loginFormVis, updateloginFormVis] = useState(false);
  const [signupFormVis, updateSignupVis] = useState(false);
  const [isLoggedIn, updateIsLoggedIn] = useState(false);
  const [activeUsersVis, updateActiveUsersVis] = useState(false);

  const usersData = [
    {
      name: "Random Name 1",
      id: "userone123",
      followersList: [
        "usertwo345",
        "userthree574",
        "userfour578",
        "userfive405",
      ],
    },
    {
      name: "Random Name 2",
      id: "userone123",
      followersList: [
        "usertwo345",
        "userthree574",
        "userfour578",
        "userfive405",
        "userone123",
      ],
    },
    {
      name: "Random Name 2",
      id: "userfive405",
      followersList: [
        "usertwo345",
        "userthree574",
        "userfour578",
        "userone123",
        "userone123",
      ],
    },
  ];

  // const dummyPlayLists = [
  //   {
  //     name: "Album1",
  //     des: "This Album1 Description",
  //     creator: "Name One",
  //     tracks: ["T-1", "T-2", "T-3"],
  //     img: img,
  //   },
  //   {
  //     name: "Album2",
  //     des: "This Album2 Description",
  //     creator: "Name Two",
  //     tracks: ["T-4", "T-5", "T-6"],
  //     img: img,
  //   },
  //   {
  //     name: "Playlist1",
  //     des: "This Playlist1 Description",
  //     creator: "Name Three",
  //     tracks: ["T-7", "T-8", "T-9"],
  //     img: img,
  //   },
  //   {
  //     name: "Playlist2",
  //     des: "This Playlist2 Description",
  //     creator: "Name 4",
  //     tracks: ["T-10", "T-11", "T-12"],
  //     img: img,
  //   },
  //   {
  //     name: "Album3",
  //     des: "This Album3 Description",
  //     creator: "Name 5",
  //     tracks: ["T-13", "T-14", "T-15"],
  //     img: img,
  //   },
  // ];

  const dummyPlayLists = [
    {
      listName: "Album1",
      owner: "Name One",
      listPoster: img,
      description: "This Album1 Description",
      songs: [
        {
          title: "track 1",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 2",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 3",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
      ],
    },

    {
      listName: "Album2",
      owner: "Name One",
      listPoster: img,
      description: "This Album2 Description",
      songs: [
        {
          title: "track 1",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 2",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 3",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 4",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
      ],
    },

    {
      listName: "Playlist1",
      owner: "Name One",
      listPoster: img,
      description: "This Playlist1 Description",
      songs: [
        {
          title: "track 1",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 2",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
      ],
    },

    {
      listName: "Album3",
      owner: "Name One",
      listPoster: img,
      description: "This Album3 Description",
      songs: [
        {
          title: "track 1",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 2",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 3",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 4",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
        {
          title: "track 5",
          artist: "Random Name",
          album: "Album Name",
          trackPoster: img,
        },
      ],
    },
  ];

  const homeClick = () => {
    updateHomeIsActive(true);
    UpdateProfileIsActive(false);
    updateActiveUsersVis(false);
  };

  const innerListClick = () => {
    updateHomeIsActive(false);
    UpdateProfileIsActive(false);
    updateActiveUsersVis(false);
  };

  const profileClick = () => {
    updateHomeIsActive(false);
    UpdateProfileIsActive(true);
    updateActiveUsersVis(false);
  };

  const activeUsersClick = () => {
    updateHomeIsActive(false);
    UpdateProfileIsActive(false);
    updateActiveUsersVis(true);
  };

  return (
    <div className="App">
      {loginFormVis ? (
        <LoginForm
          updateSignupVisLefter={updateSignupVis}
          updateupdateloginFormVis
          updateloginFormVisLefter={updateloginFormVis}
        ></LoginForm>
      ) : (
        ""
      )}
      {signupFormVis ? <SignupForm></SignupForm> : ""}

      <Header
        formVisLefter={updateloginFormVis}
        loggState={updateIsLoggedIn}
        loginStateLefter={isLoggedIn}
        porfileLefter={profileClick}
      ></Header>

      <div className="container">
        <SideBar
          dummyPlayListsLefter={dummyPlayLists}
          viewHomeLefter={homeClick}
          usersVis={activeUsersClick}
        ></SideBar>

        {homeIsActive ? (
          <Home
            dummyPlayListsLefter={dummyPlayLists}
            innerListLefter={innerListClick}
          />
        ) : (
          ""
        )}
        {/* {innerPlayListIsActive ? (
          <InnerLIst dummyPlayListsLefter={dummyPlayLists} />
        ) : (
          ""
        )} */}

        {activeUsersVis ? (
          <ActiveUsers usersList={usersData}></ActiveUsers>
        ) : (
          ""
        )}

        {profileIsActive ? <Profile></Profile> : ""}
      </div>

      <ControlPanal></ControlPanal>
    </div>
  );
}

export default App;
