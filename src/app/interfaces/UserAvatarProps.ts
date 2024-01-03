import {avatarSizes} from "@/components/UserAvatar";
import {type VariantProps} from "class-variance-authority";

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export default UserAvatarProps;
