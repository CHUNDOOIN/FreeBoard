import { useMutation, useQuery } from "@apollo/client";
import { async } from "@firebase/util";
import { values } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM, FETCH_USED_ITEM } from "./MarketWrite.queries";
import { IMarketWriteProps } from "./MarketWrite.types";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  console.log(router.query);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const onChangeRemarks = (event) => {
    console.log(remarks);
    setRemarks(event.target.value);
  };

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능!!!
    trigger("contents");
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
            // images: ["123"],
            // useditemAddress: {
            //   zipcode: "123123",
            //   address: "123123",
            //   addressDetail: "123123",
            //   lat: 123,
            //   lng: 123,
            // },
          },
        },
      });
      alert("상품 등록 성공");
      router.push(`/markets/${result.data.createUseditem._id}`);
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
