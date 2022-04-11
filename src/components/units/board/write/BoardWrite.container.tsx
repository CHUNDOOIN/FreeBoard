import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import {
  IBoardAddress,
  IBoardWriteProps,
  IUpdateBoardInput,
} from "./BoardWrite.types";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkFileValidation } from "../../../../commons/libraries/validation";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setimageUrl] = useState<string | undefined>("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [zipcode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [data, setData] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickEdit = async () => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          updateBoardInput: updateBoardInput,

          boardId: router.query.boardId,
          password: password,
        },
      });
      Modal.success({
        title: "게시글 수정 성공",
        content: "게시글을 수정 성공하였습니다.",
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      Modal.error({
        title: "게시글 수정 실패",
        content: `실패내용 : ${error.message}`,
      });
      // alert(error.message);
      console.log(error);
    }
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: String(youtubeUrl),
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
                images: [imageUrl],
              },
            },
          },
        });
        // console.log("result?", result.data.createBoard);

        Modal.success({
          title: "게시글 등록 성공",
          content: "게시글을 등록 하였습니다!",
        });
        // alert("게시글을 등록 하였습니다!");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
        Modal.error({
          title: "게시글 등록 실패",
          content: `내용 : ${error.message}`,
        });

        // alert(error.message);
        // alert("게시글을 등록 실패 하였습니다!");
      }
    }
    // console.log(result.data);
    // setData(result.data.createBoard.message);
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onClickZipCode = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data2: any) => {
    console.log("주소 창 닫아졌니?", data2);
    onClickZipCode();
    setZipCode(data2.zonecode);
    setAddress(data2.address);
  };

  const onChangeZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 이미지 업로드 부분
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isVaild = checkFileValidation(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setimageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.massage });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutube={onChangeYoutube}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit} // 수정하기 버튼
      onClickZipCode={onClickZipCode} // 주소 검색 버튼
      onChangeZipCode={onChangeZipCode}
      onChangeAddress={onChangeAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onComplete={handleComplete}
      // 이미지 업로드?
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      //
      isActive={isActive}
      isEdit={props.isEdit}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      data={props.data}
      
    ></BoardWriteUI>
  );
}
