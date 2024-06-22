
import Template from "./Template/Template";

const Movements = () => {
  return (
    <div>
    <Template title={"Lesson 1: Chess pieces Movements"} fetchUrl={"/api/randommovement"}/>
    </div>
  )
}

export default Movements
