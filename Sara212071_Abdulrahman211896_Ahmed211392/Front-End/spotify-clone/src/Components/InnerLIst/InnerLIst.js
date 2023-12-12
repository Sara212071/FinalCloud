import React from "react";
import classes from "./InnerLIst.module.css";


const InnerLIst = (props) => {

  // console.log(props.songsList);
  // return (
  //   <div className={classes.innerList}>
  //     <ul>
  //       {props.dummyPlayListsLefter.map((data) => {
  //         return (
  //           <li>
  //             <div className={classes.poster}>
  //               <img src={data.img} alt="test" />
  //             </div>

  //             <div className={classes.info}>
  //               {data.tracks.map((name) => (
  //                 <h2>{name}</h2>
  //               ))}
  //               <h4>{`From Album: ${data.name}`}</h4>
  //             </div>

  //             <div className={classes.options}>
  //               <button>Like / Unlike</button>
  //               <button>Add To List</button>
  //             </div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );


  // ----------------------------------------------------

  return (
    <div className={classes.innerList}>
      <ul>
      </ul>
    </div>
  );

};

export default InnerLIst;
