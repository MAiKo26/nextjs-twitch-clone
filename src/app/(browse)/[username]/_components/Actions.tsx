"use client";

import {onFollow, onUnfollow} from "@/actions/follow";
import {Button} from "@/components/ui/button";
import {useTransition} from "react";
import {toast} from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

function Actions({isFollowing, userId}: ActionsProps) {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`Followed the user ! ${data.following.username}`)
        )
        .catch(() => toast.error("Failed to follow the user !"));
    });
  };

  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You just unfollowed  ${data.following.username}`)
        )
        .catch(() => toast.error("Failed to follow the user !"));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={isFollowing ? handleUnFollow : handleFollow}
      variant="primary"
    >
      {isFollowing ? "unfollow" : "Follow"}
    </Button>
  );
}

export default Actions;
