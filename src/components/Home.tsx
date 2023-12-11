import axios from "axios";
import "../i18n";
import { useTranslation } from 'react-i18next';
import { useState } from "react"

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

  const [mapState, setmapState] = useState(map.Map);

  const handleDelete = async (id) => {

      await axios.delete(`/api/changes/${id}`);
      setmapState(mapState.filter((r,_i) => r._id !== id))

  }

  const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

  return (
    <div className="mt-10 mb-10">
      {session &&  session.user.role === "admin" || process.env.NEXT_PUBLIC_TESTING &&  (
        <div className="bg-black">
          <h1 className="font-semibold text-xl text-md text-white mt-8 underline underline-offset-8 flex justify-center" key={0}>
            {t("index.adminWelcome")}
          </h1>
          <h1 data-test='title' className="font-semibold ml-5 sm:text-xl text-sm text-white mt-8 underline underline-offset-8 flex justify-center" key={1}>
            {t("index.adminMsg")}
          </h1>
          {mapState.map((r, i) => (
            <div className="sm:p-10 bg-gray-300 rounded-lg w-[90%] md:max-w-sm mx-auto mt-7 sm:max-h-[20%]" key={i + 1}>
              <table className="w-full ml-5"key={i + 2}>
                <thead key={i + 3}>
                  <tr key={i + 4}>
                    <th key={i + 5} className="pr-4 sm:pr-8"></th>
                    <th key={i + 6} className="pr-4 sm:pr-8"></th>
                  </tr>
                </thead>
                <tbody key={i + 7}>
                  <tr className="font-semibold flex flex-col" key={i + 8}>
                    <td key={i + 9} className="mb-2 sm:mb-1 flex justify-center">
                    <span data-test='lat-values' className="block sm:inline">{t("index.lat")}: {r.Lat}</span>
                    </td>
                    <td key={i + 10} className="mb-2 sm:mb-1 flex justify-center">
                    <span data-test='lon-values' className="block sm:inline">{t("index.lon")}: {r.Lon}</span>
                    </td>
                    <td key={i + 11} className=" mb-2 sm:mb-1 flex justify-center">
                    <span data-test='city-values' className="block sm:inline">{t("AddLocationForm.city")}: {r.City}</span>
                    </td>
                    <td key={i + 12} className="mb-2 sm:mb-1 flex justify-center">
                    <span data-test='desc-values' className="block sm:inline">{t("AddLocationForm.description")}: {r.Description}</span>
                    </td>
                    <td key={i+15} data-test='delete-button' className="flex justify-center"><button onClick={() => handleDelete(r._id)} className="bg-sky-400 bg rounded-full py-1 px-1 xs:px-3 sm:px-3 font-semibold">{t("index.delete")}</button></td>
                    <td key={i+20} data-test='edit-button' className="flex justify-center"><button onClick={() => redirect(`/route/${r._id}/edit/`)} className="bg-sky-400 bg rounded-full py-1 px-1 xs:px-3 sm:px-3 font-semibold">{t("index.update")}</button></td>
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
            Now that you have logged in, here is what you can expect from each page of this website!
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 flex justify-center" key={3}>
           The Home Page is simply a way for you to read up and get accustumed to the website! It will offer documentation and the general usage.
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 flex justify-center" key={4}>
            The Map page is your way of looking up all the locations that were posted around the world, and should you accept you share your location, the map will center on you and show you the Lat and Lon so you can copy them and upload your own location!
          </h1>
          <h1 className="font-semibold text-xl text-white mt-8 flex justify-center" key={4}>
            The Upload page is where you can upload a location yourself! With the Lat and Lon you got from the map or searched online, you can write the city name, a description, and give us a nice picture from your phone or browser, and all you have to do is click sumbit! This will send the location to our database, and allow the map to read it so other users can have a look at what you posted!
          </h1>
        </div>
      )}
      {!session && (
        <div  className="flex justify-center mt-10">
          <h1 className="text-white">{t("index.please")}</h1>
        </div>
      )}
    </div>
  );
}
