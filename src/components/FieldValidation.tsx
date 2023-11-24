export default function FieldValidation(check){
    if(check){
        return {required: {value: true, message:"Field is required"}}
    }else{
        return {required: false}
    }
}

export function NumberValidation(value){
    console.log(value)
    if(value/0 == 0){
        return {required: {value: true, message:"Field only accepts numbers!"}}
    }else{
        return {required: false}
    }
}