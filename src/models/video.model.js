import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
       type:Boolean,
       default:true 
    },
    owner:{
        type:Schema.Type.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);


videoSchema.Plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
