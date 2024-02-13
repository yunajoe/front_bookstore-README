import { QUERY_KEY } from '@/constants/queryKey';
import {
  CommunityCard,
  GetCommunityOption,
  PostCommunityData,
  PutCommunityOption,
} from '@/types/api/community';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from 'src/libs/instance';

//커뮤니티 글 전체조회, 내가쓴글 조회,
const getCommunity = async (option: GetCommunityOption) => {
  const { memberId, params } = option;
  const result = await instance.get(
    `community${memberId ? `/${memberId}` : ''})`,
    {
      params,
    },
  );
  return result.data;
};

export const useGetCommunity = (option: GetCommunityOption) => {
  const { data, ...props } = useQuery({
    queryKey: [QUERY_KEY.community],
    queryFn: () => getCommunity(option),
    enabled: true,
  });
  return { data, ...props };
};

//글 등록
const postCommunity = async (data: PostCommunityData) => {
  const result = await instance.post('community', {
    data,
  });
  return result.data;
};

export const usePostCommunity = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: PostCommunityData) => postCommunity(data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//글 삭제
const deleteCommunity = async (communityId: number) => {
  const result = await instance.delete(`community/${communityId}`);
  return result.data;
};

export const useDeleteCommunity = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (communityId: number) => deleteCommunity(communityId),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};

//글 수정
const putCommunity = async (option: PutCommunityOption) => {
  const { communityId, data } = option;
  const result = await instance.put(`community/${communityId}`, {
    data,
  });
  return result.data;
};

export const usePutCommunity = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (option: PutCommunityOption) => putCommunity(option),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutation;
};
