import { SocialType, getSocialLogin } from "@/api/social";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

function SocialPage() {
  const router = useRouter();
  const { socialType, code } = router.query;
  const myType: SocialType = socialType === "kakao" ? "KAKAO" : socialType === "google" ? "GOOGLE" : "NAVER";
  const { data } = useQuery({
    queryKey: [""],
    queryFn: () => getSocialLogin(myType, code as string),
    enabled: !!socialType
  })
  console.log(data);
  return (
    <div>로그인 중이에요~!! 잠시만용...<></></div>
  )
}

export default SocialPage;