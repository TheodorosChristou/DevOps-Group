import { GetServerSideProps } from "next";
import dbConnect from "../../lib/dbConnect";
import Map from "../../models/Map";
import { useSession } from "next-auth/react";

export default function Home({ Map }) {
  const { data: session } = useSession();

  if (session?.user?.name?.toString()) {
    var user: string;
    user = session.user.name;
  }

  return (
    <div className="mt-16 mb-0">
      <h1 className="font-semibold md:text-xl text-white md:mt-50 sm:mt-150 sm:text-sm underline underline-offset-8 flex justify-center" key={1}>
        Here is the Latitude and Longitude from the database
      </h1>
      {Map.map((r, i) => (
        <div className="bg-black" key={i + 1}>
          <div className="" key={i + 2}>
            <h1 className="font-semibold text-xl text-white pt-5 pb-5 flex justify-center" key={i + 3}></h1>
            <div className="flex justify-center" key={i + 4}>
              <div className="p-4 bg-gray-300 rounded-full w-full md:max-w-md sm:max-h-[20%]" key={i + 5}>
                <table className="w-full" key={i + 6}>
                  <tbody key={i + 11}>
                    <tr className="font-semibold">
                      <td className="pr-4">Latitude:</td>
                      <td>{r.Lat}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="pr-4">Longitude:</td>
                      <td>{r.Lon}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="pr-4">City:</td>
                      <td>{r.City}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="pr-4">Description:</td>
                      <td>{r.Description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();
  const results = await Map.find({}).lean();
  const map = results.map((doc) => ({ ...doc, ...{ _id: doc._id.toString() } }));
  return { props: { Map: map } };
};
