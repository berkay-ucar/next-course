import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async (props: Props) => {
  const searchParams = await props.searchParams;

  const { sortOrder } = searchParams;

  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
