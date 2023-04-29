import React, { useState } from "react";

const useInput = () => {
  // 2. value는 useState로 관리하고,
  const [value, setValue] = useState("");

  // 3. 핸들러 로직도 구현합니다.
  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};

export default useInput;
