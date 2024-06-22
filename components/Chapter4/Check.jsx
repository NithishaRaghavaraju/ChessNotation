import Template from "./Template/Template";

const Check = () => {
  return (
    <div>
    <Template title={"Lesson 5: Check Movements"} fetchUrl={"/api/check"}/>
    </div>
  )
}

export default Check