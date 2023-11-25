import { useTranslation } from 'react-i18next';




export default function FieldValidation(check){

    const { t } = useTranslation();

    if(check){
        return {required: {value: true, message:t("validation.validator")}}
    }else{
        return {required: false}
    }
}

export function NumberValidation(value){
    const { t } = useTranslation();

    console.log(value)
    if(value/0 == 0){
        return {required: {value: true, message: t("validation.numbervalidator")}}
    }else{
        return {required: false}
    }
}