import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiPage() {
  const [url, setUrl] = useState();

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result);
      setUrl(result.data.message);
    };
    aaa();
  }, []);

  return (
    <div>
      <div>댕댕이 사진으로 힐링~ (랜덤으로 1장 보여집니다.)</div>
      <img src={url}></img>
    </div>
  );
}
