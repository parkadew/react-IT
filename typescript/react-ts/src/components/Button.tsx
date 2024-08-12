import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';


const theme = {
    white: "#fff"
} as const

type Props = {
    variant: 'primary ' | 'secondary',
    color: keyof typeof theme
} & ComponentPropsWithRef<'button'>

// PropsWhithChildren<Props> -> children
const Button: React.FC<Props> = ({ variant, color, children, ...rest }) => {
    return <button {...rest}>{children}</button>
}
export default Button


/**
 * 어떻게 공부해야할까
 *
 * 자바 스크립트 먼저하기
 자바스크립트 (1~2개월) :
 1.자바스크립트 알고리즘 강의 -- 컴퓨팅 사고 능력
( 인프런 자바스크립트 알고리즘 문제풀이 입문)
2. - 딥다이브 책 읽고 정리하기
 3.비동기, fetch, axios -> 백엔드와 데이터를 교류하는 방법을 알아야한다

  리액트 (3개월)
  1.기본 개념 이해, 유투브 무료 강의 -- 개념 정리 (컴포넌트 , 재조정, 동작원리) 개념정리를 해야 리액트를 왜써야하는지 알수있다. -> 제로초
  2.훅함수 (state,ref,effect), 메모라이즈(react.memo, useMemo, useCallback)
  3. 생태 최적화 공부하기 (불필요한 상태, 렌더링 최적화) -> 컴포넌트 나누는 기준(4가지 이상)

  // react-router-dom, SPA, bundle, styleSheet
  4. 컴포넌트를 나누고 상태로 구분되는 간단한 토이 프로젝트 (게시글, 투두리스트)

  5. 전역상태관리(context-api -> redux,rtk -> recoil,zustand,jotai) - 전역상태관리는 언제 일어나야하는가? 단점은 무엇인가 생각하기
  6. react-query, 서버 데이터 관리
  --
  7. 영화 오픈 API를 활용한 프로젝트  (TMDB)
  // https://developer.themoviedb.org/docs/getting-started
  //페이지네이션, 무한 스크롤링, URL 필터링(useSearchParams)


  // githob flow (commit - push - pr - review - merge)
  // 디바운싱 , 쓰로틀링

  // 딥다이브 리액트 + 무료강의 -- 개념정리

  // --- 프로젝트 준비 완료 ---
  // react를 사용하는 프로젝트 진행 구인 --> 프로젝트 진행(3개월) -- 8개월
  // 프로젝트 마무리즈음에는 테스크가 많이 줄어듬

  // typescript, nextJS (learn NEXT.js) + 무료강의(1개월~2개월) -- 10개월
  // nextJS를 사용하는 프로젝트 진행 구인 -- > 프로젝트 진행 (3개월)
 */

// 프로젝트 하실 떄 대외활동 --> 웹동아리
