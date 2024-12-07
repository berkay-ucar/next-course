import React from "react";

interface Props {
  params: Promise<{ id: number }>;
}

const UserDetailPage = async (props: Props) => {
  const params = await props.params;

  const {
    id
  } = params;

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
