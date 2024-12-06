import { log } from "console";
import UserTable from "./UserTable";
import { sort } from "fast-sort";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
