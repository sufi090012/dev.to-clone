import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: String,

  description: String,
  name: String,
  tag1: String,
  tag2: String,
  tag3: String,
  tag4: String,
  date: String,

  imageFile2: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
