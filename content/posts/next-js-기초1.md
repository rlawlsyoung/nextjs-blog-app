---
title: "NextJS 기초 1"
date: "2023-05-04"
image: "next-js-기초1.png"
excerpt: "Next.js는 React 프레임워크입니다. SSR과 풀스택 개발 등 다양한 기능을 지원합니다."
isFeatured: true
---

# 📋 \_app과 \_document

Next.js 프로젝트를 생성하면 볼 수 있는 두 가지 중요한 페이지가 있다.
바로 `_app`과 `_document`이다.

이 두 기본 페이지의 역할은 무엇이고 왜 사용하는지에 대해서도 알아보자.

---

## 📌 1. \_app

`_app`은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트이며, 페이지에 적용할 공통 레이아웃의 역할을 한다.

React의 `Router.tsx (App.tsx)` 컴포넌트와 유사하다고 볼 수 있다.

> Next.js uses the App component to initialize pages. You can override it and control the page initialization and:

- Persist layouts between page changes
- Keeping state when navigating pages
- Inject additional data into pages
- Add global CSS
  _-Next.js 공식 문서_

공식 문서에 따르면 주로 사용하는 상황은 이러하다.

- 페이지 전환 시에도 전체 레이아웃을 유지하고 싶을 경우
- 페이지 전환 후에도 state를 유지하고 싶을 경우
- 페이지에 추가적인 데이터를 삽입하고 싶은 경우
- 글로벌한 CSS를 적용하고 싶은 경우

---

## 📌 2. \_document

> A custom Document can update the `<html>` and `<body>` tags used to render a Page. This file is only rendered on the server, so event handlers like onClick cannot be used in `_document`. _-Next.js 공식 문서_

`_document`는 `_app` 다음에 실행 되며, 공통적으로 활용 할 메타 태그 혹은 body 태그 안에 들어갈 내용들을 커스텀 할 때 쓰인다.
또 이 파일은 서버에서만 실행되기 때문에 `onClick`같은 이벤트는 사용할 수 없다.

React의 `index.html`과 유사하다고 볼 수 있다.

`_document`를 살펴보면 이러한 형태로 되어있다.

```tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

또 이 코드를 보면 알 수 있겠지만, 여기서 사용하는 `Head`는 `next/head`가 아닌 `next/document`모듈에서 불러와야 한다는 규칙이 있다.

---

## 📌 3. 요약

- `_app`은 페이지에 적용할 공통 레이아웃의 역할을 하며 React의 `Router.tsx (App.tsx)` 컴포넌트와 유사하다고 볼 수 있다.

- `_document`는 공통적으로 활용 할 메타 태그 혹은 body 태그 안에 들어갈 내용들을 커스텀 할 때 사용하며 React의 `index.html`과 유사하다고 볼 수 있다.
