# 📝 투두리스트 앱

![React Native](https://img.shields.io/badge/React%20Native-0.79.2-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-~53.0.7-9cf?logo=expo)

## 📌 소개

React Native + Expo 환경에서 만든 심플한 투두리스트 앱입니다.  
비동기 저장소와 날짜 선택 기능을 포함하여 할 일 관리에 필요한 주요 기능을 구현했습니다.

## 🧩 주요 기능

- 할 일 추가 및 삭제
- 완료 상태 토글 기능
- 날짜 선택을 위한 모달 데이트 피커 제공
- AsyncStorage를 활용한 데이터 영구 저장
- Expo CLI로 실행 가능한 크로스플랫폼 앱

## 🛠️ 기술 스택 및 라이브러리

| 패키지명                              | 역할                                  |
| ------------------------------------ | ----------------------------------- |
| react-native                         | 모바일 앱 프레임워크                 |
| expo                                | 크로스 플랫폼 개발 도구             |
| @react-native-async-storage/async-storage | 로컬 데이터 저장 (비동기 스토리지)   |
| @react-native-community/datetimepicker | 날짜 선택 UI 컴포넌트                 |
| react-native-modal-datetime-picker  | 모달 형태의 데이트 타임 피커         |
| react-native-vector-icons            | 아이콘 사용                         |
| react-native-iphone-x-helper         | 아이폰 노치 및 안전영역 처리         |
| dayjs                               | 날짜, 시간 처리 라이브러리          |

## 🛠️ 개발 문서

| 제목                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------- |
| [AsyncStorage 활용법](https://www.notion.so/AsyncStorage-사용법)                                                 |
| [React Native 모달 데이트 피커 사용법](https://www.notion.so/Modal-datetime-picker-1ec13befc507803a9f4bfdce8314ca99) |
| [React Native Dayjs](https://www.notion.so/Dayjs-1ea13befc50780f3b909c72ff8e80b4d) |
| [달력 함수 만들기](https://www.notion.so/1f413befc50780d79dfed9c7d2db2591) |



## 🗂️ 프로젝트 구조

```bash
TODO-CALENDAR/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── hook/
│   │   ├── use-calendar.js      # 캘린더 관련 커스텀 훅
│   │   ├── use-todo-list.js     # 투두 리스트 관련 커스텀 훅
│   ├── AddTodoInput.js          # 할 일 입력 컴포넌트
│   ├── Calendar.js              # 캘린더 컴포넌트
│   ├── Margin.js                # 마진 조절 컴포넌트
│   ├── util.js                  # 유틸 함수 모음
├── .gitignore
├── App.js                      # 앱 진입점
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── practice-dayjs.js           # dayjs 관련 연습 파일
├── README.md
└── yarn.lock
