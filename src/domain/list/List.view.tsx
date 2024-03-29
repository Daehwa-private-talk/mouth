import { FriendsType } from '@/@types/user';
import { Friend } from '@/components/list/Friend';
import styled from 'styled-components';

interface Props {
  favoriteList: FriendsType;
  friendList: FriendsType;
  totalFriendsCount: number;
  favoriteFriendsCount?: number;
}

export const ListView = ({
  favoriteList,
  friendList,
  totalFriendsCount,
  favoriteFriendsCount,
}: Props) => {
  return (
    <FriendListContainer>
      <FriendListHeader>
        <FriendListHeaderTitle>친구 목록</FriendListHeaderTitle>
      </FriendListHeader>
      <FriendList>
        <ListTitle>
          즐겨찾는 친구 ({favoriteFriendsCount || favoriteList.length})
        </ListTitle>
        {favoriteList.map((item) => (
          <Friend key={item.id} {...item} background="yellow" />
        ))}
        <ListTitle>친구 ({totalFriendsCount || friendList.length})</ListTitle>
        {friendList.map((item) => (
          <Friend key={item.id} {...item} background="gray" />
        ))}
      </FriendList>
    </FriendListContainer>
  );
};

const FriendListHeader = styled('div')`
  width: 100%;
  height: 40px;
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(20)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const FriendListHeaderTitle = styled('h2')`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 24px;
`;

const FriendListContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled('h4')`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(20)}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const FriendList = styled('li')`
  height: calc(100vh - 160px);
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
