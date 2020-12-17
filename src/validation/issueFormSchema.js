import * as yup from "yup";

export default yup.object().shape({
    title: yup
        .string()
        .required("issue title is required"),
    description: yup
        .string()
        .required("description is required"),
    image: yup
        .string(),
    category: yup
        .string()
        .oneOf(["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], "category is required")
})