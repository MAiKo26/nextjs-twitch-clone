import {isFollowingUser} from "@/lib/follow-service";
import {getUserByUsername} from "@/lib/user-service";
import {notFound} from "next/navigation";
import React from "react";
import {Actions} from "./_components/Actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

async function UserPage({params}: UserPageProps) {
  const user = await getUserByUsername(params.username);

  if (!user) return notFound();

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div>
      <p>{user.username}</p>
      <p>{user.id}</p>
      <p>is following : {isFollowing ? "true" : "false"}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
}

export default UserPage;
