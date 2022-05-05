import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";
import { IMarketWriteProps } from "./MarketWrite.types";
import { useEffect, useState } from "react";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상세내용은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

const nonSchema = yup.object({});

export default function MarketWrite(props: IMarketWriteProps) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(props.isEdit ? nonSchema : schema),
    mode: "onChange",
  });

  const router = useRouter();
  console.log(router.query);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  // const [name, setName] = useState("");
  // const [remarks, setRemarks] = useState("");
  // const [contents, setContents] = useState("");
  // const [price, setPrice] = useState("");
  // const [tags, setTags] = useState("");

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능!!!
    trigger("contents");
  };
  // const onChangeName = (event) => {
  //   setName(event.target.value);
  //   console.log(name);
  // };
  // const onChangeRemarks = (event) => {
  //   console.log(remarks);
  //   setRemarks(event.target.value);
  // };

  // const onChangePrice = (event) => {
  //   setPrice(event.target.value);
  // };

  // const onChangeTag = (event) => {
  //   setTags(event.target.value);
  // };

  // 수정 진입시 초기값 설정
  useEffect(() => {
    // 상품설명
    if (props.data?.fetchUseditem) {
      reset({ contents: props.data?.fetchUseditem.contents });
    }
  }, [props.data]);

  const onClickSubmit = async (data: any) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: parseInt(data.price),
            // tags: tags,
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
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickEdit = async (data: any) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: parseInt(data.price),
            // tags: tags,
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
      alert("상품 수정 성공");
      router.push(`/markets/${result.data.createUseditem._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MarketWriteUI
      data={props.data}
      // onChangeName={onChangeName}
      // onChangeRemarks={onChangeRemarks}
      // onChangePrice={onChangePrice}
      // onChangeTag={onChangeTag}
      register={register}
      handleSubmit={handleSubmit}
      getValues={getValues}
      onChangeContents={onChangeContents}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeFileUrls={onChangeFileUrls}
      isEdit={props.isEdit}
      fileUrls={fileUrls}
    ></MarketWriteUI>
  );
}
