import Head from "next/head";
import "../i18n";
import { useTranslation } from 'react-i18next';

export default function Heading(){
    const {t,i18n} = useTranslation();
    return(
        
        <div data-testid= "title">
        <Head>
            <title >{'Mongeese Map'}</title>
            <meta data-testid = "description" name="description" content="Home" />
            <link rel="icon" href="/img/mongoose.ico" />
        </Head>
      </div>

    )
}