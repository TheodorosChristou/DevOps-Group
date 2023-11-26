import "../i18n";
import { useTranslation } from 'react-i18next';

export default function Index({ Map, sess }) {
  const { t } = useTranslation();
  const map = Map;
  const search = map.Map;

  const session = sess;
  let user, role;

  if (session?.user?.name?.toString()) {
    user = session.user.name;
    role = session.user.role;
    console.log(role);
  }

  return (
    <div className="mt-10 mb-10">
      {session && session.user.role === "admin" && (
        <div className="bg-black">
          <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center" key={0}>
            {t("index.adminWelcome")}
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center" key={1}>
            {t("index.adminMsg")}
          </h1>
          {search.map((r, i) => (
            <div className="p-10 bg-gray-300 rounded-full flex max-w-[80%] mx-auto mt-5" key={i + 1}>
              <table key={i + 2}>
                <thead key={i + 3}>
                  <tr key={i + 4}>
                    <th key={i + 5} className="pr-10"></th>
                    <th key={i + 6} className="pr-10"></th>
                  </tr>
                </thead>
                <tbody key={i + 7}>
                  <tr className="font-semibold" key={i + 8}>
                    <td key={i + 9} className="pr-10">
                      {t("index.lat")}: {r.Lat}
                    </td>
                    <td key={i + 10} className="pr-10">
                      {t("index.lon")}: {r.Lon}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
      {session && session.user.role === "user" && (
        <div className="mt-5 mx-auto max-w-[80%]">
          <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center" key={1}>
            {t("index.welcomeMsg")}
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 flex justify-center" key={2}>
            {t("index.msg1")}
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 flex justify-center" key={3}>
            {t("index.msg2")}
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 flex justify-center" key={4}>
            {t("index.msg3")}
          </h1>
        </div>
      )}
      {!session && (
        <div className="flex justify-center mt-10">
          <h1 className="text-white">{t("index.please")}</h1>
        </div>
      )}
    </div>
  );
}
