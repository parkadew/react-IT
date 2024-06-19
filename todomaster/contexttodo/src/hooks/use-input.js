import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        setValue(event.target.value)
    };
    return [value, onChange];
    // 구조 분해할때 쉽게 이름을 변경하기 위해서 배열로 반환
};
export default useInput;