import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import "../i18n";
import { useTranslation } from 'react-i18next';


export default function Error(){
    const {t,i18n} = useTranslation();
    return (
      
      <div data-testid= "heading"className="flex items-center flex-col">
            <Heading></Heading>
        <div className="">
          <Image src="/img/404.png" width={727} height={500} alt="404 image" />
        </div>
        <h1 data-testid= "link"className="text-white text-3xl mb-5">{t("page404.pnf")}</h1>
        <Link href="/">
          <h1 className="blue-button w-48 mb-11">{t("page404.bthp")}</h1>
        </Link>
      </div>
    );
}
