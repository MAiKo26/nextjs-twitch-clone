import {User} from "@prisma/client";

interface RecommendedProps {
  data: (User & {stream: {isLive: boolean} | null})[];
}

export default RecommendedProps;
