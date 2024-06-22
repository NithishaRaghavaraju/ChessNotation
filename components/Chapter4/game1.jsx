import Template from "./Template/Template";

const Random = () => {
  return (
    <div>
    <Template title={"Lesson 11: Random Movements"} fetchUrl={"/api/allcombinations"} useranswer={0} bothgames={true}/>
    </div>
  )
}

export default Random