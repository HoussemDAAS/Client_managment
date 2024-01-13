
import  Express  from "express";
import router from "./src/routes";
import StatusCodes from "http-status-codes";
const app= Express();
const port= 3000;
const status={
    SUCCESS:"OK",
    FAILLURE:"FAIL"
}
app.use(Express.json());
app.listen(port,()=>  console.log(`server is running on port http://localhost:${port}`));
app.use("/api",router);
