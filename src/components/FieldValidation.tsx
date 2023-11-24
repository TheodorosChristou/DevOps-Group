import "../i18n";
import { useTranslation } from 'react-i18next';

export default function FieldValidation(check) {
  const { t } = useTranslation();

  if (check) {
    return { required: { value: true, message: t("validation.validator") } };
  } else {
    return { required: false };
  }
}
