import ErrorHandler from "../middlewares/error.js";
import { upcomingEvents } from "../models/upcomingEvent.js";

//creating user suggestion
export const Events = async (req, res, next) => {
  try {
    const {title,img_url,description } = req.body;

    await upcomingEvents.create({
      title,
      img_url,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};
//to get what user want to send suggestion
// export const getMyTask = async (req, res, next) => {
//   try {
//     const userid = req.user._id;

//     const tasks = await Task.find({ user: userid });

//     res.status(200).json({
//       success: true,
//       tasks,
//     });
//   } catch (error) {
//     next(error);
//   }
// };



