import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean, $search: String) {
    fetchUseditems(page: $page, isSoldout: $isSoldout, search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount

      buyer {
        _id
      }
      seller {
        _id
        name
        email
      }
      soldAt
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
