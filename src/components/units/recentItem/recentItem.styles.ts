import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10px;
  justify-content: center;
  align-items: center;
`;
export const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MyColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ListBox = styled.div`
  width: 200px;
  border: 1px solid black;
  /* border-radius: 5px; */
  padding: 20px;
  margin-bottom: 10px;
  background-color: #f9f9f9;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: black;
`;
