import { useMutation } from "@apollo/client";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";
import { IMarketWriteProps } from "./MarketWrite.types";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  console.log(router);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeRemarks = (event) => {
    setRemarks(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeTag = (event) => {
    setTags(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: name,
            remarks: remarks,
            contents: contents,
            price: parseInt(price),
            tags: tags,
            images: ["123"],
            useditemAddress: {
              zipcode: "123123",
              address: "123123",
              addressDetail: "123123",
              lat: 123,
              lng: 123,
            },
          },
        },
      });
      alert("상품 등록 성공");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketWriteUI
      onChangeName={onChangeName}
      onChangeRemarks={onChangeRemarks}
      onChangeContents={onChangeContents}
      onChangePrice={onChangePrice}
      onChangeTag={onChangeTag}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
    ></MarketWriteUI>
  );
}
