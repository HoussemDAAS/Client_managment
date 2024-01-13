
import  Express  from "express";
import StatusCodes from "http-status-codes";
import userService from "./services/user.service";
const router= Express.Router();
const port= 3000;
const status={
    SUCCESS:"OK",
    FAILLURE:"FAIL"
}

router.post("/add",(req,res)=>{
    const data=[];
    const {body: user}=req;
userService.addUser(user);
    if(!user.name)
    {
       return  res.status(StatusCodes.BAD_REQUEST).send({
            status:status.FAILLURE,
            message:'Name Required'
        });
    }
    return res.status(StatusCodes.OK).send({
        status:status.SUCCESS,
      message:  data,
    });
});
export default router;