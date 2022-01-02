import TextInput from "../common/TextInput"
import IngredientsGroupService from "../../service/IngredientsGroupService"
import {useState} from "react"

const IngredientsGroupForm = (props) => {

    const [isSubmitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [ingredientsGroup, setIngredientsGroup] = useState(props.initIngredientsGroupState)

    const saveIngredientsGroup = (event) => {
        event.preventDefault();
        setSubmitting(true)
        IngredientsGroupService.create(ingredientsGroup)
            .then(createResult => {
                setIngredientsGroup({...ingredientsGroup, id: createResult.data.id})
                setSubmitted(true)
                setSubmitting(false)
            })
            .catch((e) => {
                setSubmitting(true)
                console.log(e.response.data)
            })
    }

    const onChange = (event) => {
        const {name, value} = event.target;
        setIngredientsGroup({...ingredientsGroup, [name]: value})
    }

return (
        <div>
            <hr/>
                {submitted ? (
                    <div>
                        <h4>Ingredients Group created successfully with id {ingredientsGroup.id}.</h4>
                    </div>
                ) : (
                    <form onSubmit={saveIngredientsGroup}>
                        <TextInput displayName={"Name"}
                        placeholder={props.placeholder}
                        fieldName={"name"}
                        value={props.name}
                        onChange={onChange}/>
                        <input type="submit" disabled={isSubmitting} />
                        {isSubmitting &&
                            <div>
                                <h4>Submitting...</h4>
                            </div>
                        }
                    </form>
                )}
        </div>
    )
}

export default IngredientsGroupForm