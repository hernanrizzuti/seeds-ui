import axios from "axios";

const create = (data) => {
    console.log(data)
    return axios.post("http://localhost:8080/ingredients-group", data);
};

const IngredientsGroupService = {
    create
};

export default IngredientsGroupService;