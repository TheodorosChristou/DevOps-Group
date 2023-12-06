
# Home Component

The `Home` component is a Next.js page component that renders the home page. It utilizes server-side rendering (SSR) to fetch data from the database and dynamically import a child component.

## Usage

To use this component, import it into your Next.js application.

```tsx
import Home from '../path/to/Home';

```
## **Component Structure**
## Dependencies
- GetServerSideProps: A Next.js function used for server-side rendering.

- dbConnect: A custom function for connecting to the database.

- Map: A Mongoose model representing the Map schema.

- useSession: A hook from next-auth/react for handling user session information.

- dynamic: A Next.js utility for dynamic imports, allowing code splitting.

- DynamicHome: A dynamically imported version of the Home component to enable - - client-side rendering (ssr: false).


## Component Functionality
The Home component fetches data from the database using getServerSideProps and renders the DynamicHome component dynamically. It also uses the useSession hook to get information about the user's session.

```tsx
export default function Home(Map) {
  const { data: session } = useSession();

  if (session?.user?.name?.toString()) {
    var user: string;
    user = session.user.name;
  }

  const T = <DynamicHome Map={Map} sess={session} />;

  return T;
}
```
## Server-Side Data Fetching
The getServerSideProps function is used to fetch data from the database before rendering the page on the server.

```tsx

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();
  const results = await Map.find({}).lean();
  const map = results.map((doc) => ({ ...doc, ...{ _id: doc._id.toString() } }));
  return { props: { Map: map } };
};
```
## Explaination
The ssr: false option is used with dynamic to enable client-side rendering for the DynamicHome component.
This Home component is designed to fetch data from the server and render the home page dynamically based on the user's session information.

## More on this:

https://axios-http.com/docs/intro

https://next-auth.js.org/getting-started/example

https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading