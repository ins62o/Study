# 🧮 계산기 앱 (React Native)

![React Native](https://img.shields.io/badge/React%20Native-0.76.9-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-~52.0.46-9cf?logo=expo)

## 📌 소개

React Native와 Expo를 이용하여 구현한 심플 계산기 앱입니다.

## 🧩 주요 기능

- 사칙연산 (덧셈, 뺄셈, 곱셈, 나눗셈)
- 실시간 결과 계산
- UI로직과 비즈니스 로직의 분리

## 🛠️ 기술 스택

| 영역          | 기술               |
| ------------- | ------------------ |
| 프레임워크    | React Native, Expo |
| UI 라이브러리 | StyleSheet         |
| 개발 환경     | Babel, Expo CLI    |

## 🛠️ 개발 문서

| 제목  
| ----------------------------------------------------------------------------------------------------------------
| [UI로직과 비즈니스 로직 분리](https://www.notion.so/UI-1e913befc50780e6900aef467d3e8e69)

## 🗂️ 프로젝트 구조

```bash
calculator/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── Calculator.js       # 계산기 컴포넌트
│   └── use-calculator.js   # 계산 로직 커스텀 훅
├── .gitignore
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── yarn.lock
└── README.md
```
