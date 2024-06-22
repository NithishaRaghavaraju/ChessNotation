import Template from "./Template/Template";

const CheckMate = () => {
  return (
    <div>
    <Template title={"Lesson 6: CheckMate Movements"} fetchUrl={"/api/checkmate"} useranswer={1}/>
    </div>
  )
}

export default CheckMate