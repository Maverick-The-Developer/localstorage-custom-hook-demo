import { useEffect, useState } from "react";

/*
기존의 useState 훅에 로컬 스토리지를 연동하는 커스텀 훅을 만들어보자.
로컬 스토리지에 저장할 때는 JSON.stringify를 사용하여 문자열로 변환하고,
가져올 때는 JSON.parse를 사용하여 객체로 변환한다.
value의 타입은 제네릭으로 받아서 사용할 수 있다.
useState를 사용할 때 디폴트 값의 타입에 따라 value의 타잎이 결정되므로,
이곳에서도 같은 방식으로 타잎이 결정되도록 하되,
배열 같은 경우, 초기치(디폴트값)가 [] 형태로 지정되기에 <sting[]>처럼 지정할 수 있도록 한다.
local storage에 저장할 때는 결과적으로 스트링 타잎이 되어야 하기에, 
JSON.stringify를 사용하여 문자열로 변환한다.
처음 기동시, 로컬 스토리지에 저장된 값이 있으면 그 값을 사용하고,
없으면 디폴트 값으로 세팅되며, 키 또는 값이 변경될 때 마다 로컬 스토리지에 저장한다.
*/
export function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [ value, setValue ]
}