import styled from "@emotion/styled";
import { ITextTokenProps } from "./MarketList.types";

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TodayListWrapper = styled.div`
  width: 200px;
  margin-right: 25px;
  padding-top: 75px;
  text-align: center;

  font-size: 30px;
  font-weight: 900;

  display: flex;
  flex-direction: column;
`;

export const TodayList = styled.div`
  width: 100%;
  height: 300px;

  /* background-color: red; */

  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TableWrapper = styled.div`
  width: 1200px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 200px; */
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: red;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const Scroll = styled.div`
  overflow: auto;
`;
