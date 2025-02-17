import express from "express";
import membershipRoutes from "./routes/membership-routes";
import classBookingRoutes from "./routes/classBooking-routes";
import progressRoutes from "./routes/progress-routes";
import workoutRoutes from "./routes/workout-routes";

const app = express();
app.use(express.json());
app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

// routes
app.use('/membership',membershipRoutes);
app.use('/booking',classBookingRoutes);
app.use('/progress',progressRoutes);
app.use('/workout',workoutRoutes)


app.listen(3000,(err=>{
    console.log('Server started on port 3000');
}))

app.use('/',(req,res,next)=>{
    res.status(200).send("Not Found");
})