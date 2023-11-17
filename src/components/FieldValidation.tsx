export default function FieldValidation(check){
    if(check){
        return {required: {value: true, message:"Field is required"}}
    }else{
        return {required: false}
    }
}