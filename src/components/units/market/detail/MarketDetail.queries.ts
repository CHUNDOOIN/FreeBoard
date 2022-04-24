import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      price
      contents
      tags
      createdAt
      seller {
        _id
        email
        name
        picture
      }
      images
      useditemAddress {
        address
        addressDetail
      }
      remarks
    }
  }
`;
