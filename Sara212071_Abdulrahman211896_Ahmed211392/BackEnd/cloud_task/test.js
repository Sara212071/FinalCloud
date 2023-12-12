const express = require('express');
const dotenv = require ('dotenv');

const intiateDBConnections = require('./config/db');
const PlaylistRouter = require('./Routes/Playlist');
const TrackRouter = require('./Routes/Track');
const authRouter = require('./Routes/auth');
const userRouter = require('./Routes/userlogin');
const albumRouter = require('./Routes/useralbum');
const artistRouter = require('./Routes/Artist');
const followRouter = require('./Routes/Follow');
const profileRouter = require('./Routes/Profile');
const adminRoutes = require('./Routes/Admin');
const lyricsRouter = require('./Routes/Lyrics');
dotenv.config({
    path: './config/.env'
});


const PORT =process.env.PORT;

const app= express();
app.use(express.json());
app.use('/Playlist',PlaylistRouter);
app.use('/Track',TrackRouter);
app.use('/auth', authRouter);
app.use('/userlogin',userRouter);
app.use('/useralbum',albumRouter);
app.use('/Artist', artistRouter);
app.use('/Follow', followRouter);
app.use("/Admin", adminRoutes);
app.use('/Profile', profileRouter);
app.use('/Lyrics', lyricsRouter);
app.listen(PORT,async ()=> {
    console.log('Server listening to port %i',PORT);
await intiateDBConnections();
});









