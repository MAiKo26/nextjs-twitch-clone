import React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import {Skeleton} from "./ui/skeleton";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import UserAvatarProps from "@/app/interfaces/UserAvatarProps";
import LiveBadge from "./LiveBadge";

export const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton = ({size}: UserAvatarSkeletonProps) => {
  return <Skeleton className={cn("rounded-full", avatarSizes({size}))} />;
};

function UserAvatar({
  imageUrl,
  username,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) {
  const canShowBadge = showBadge && isLive;
  console.log(imageUrl);
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-background",
          avatarSizes({size})
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
}

export default UserAvatar;
