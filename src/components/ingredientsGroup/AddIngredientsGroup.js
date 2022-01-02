import IngredientsGroupForm from "./IngredientsGroupForm";

const AddIngredientsGroup = ()=> {

const initIngredientsGroupState = {

    id: null,
    name: ""
}

return (
    <div>
        <h1>Create a new Ingredients Group</h1>
        <IngredientsGroupForm initIngredientsGroupState={initIngredientsGroupState}/>
    </div>
    )
}

export default AddIngredientsGroup;