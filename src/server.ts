import { serverHttp } from "./http";
import "./websocket";

serverHttp.listen(3000, () => console.log("server is running on PORT 3000"));

