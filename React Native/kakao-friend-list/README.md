# 📱 까까오톡 클론코딩

![React Native](https://img.shields.io/badge/React%20Native-0.76.9-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-~52.0.46-9cf?logo=expo)
![styled-components](https://img.shields.io/badge/styled--components-%5E6.1.17-DB7093?logo=styled-components)

## 📌 소개

카카오톡 친구 리스트 스타일을 React Native + Expo 환경에서 구현한 프로젝트입니다.  
`styled-components`를 사용해 UI를 구성하고, 안전 영역 처리 및 아이폰 X 대응을 위한 설정을 포함하고 있습니다.

## 🧩 주요 기능

- 카카오 친구목록 스타일의 리스트 구현
- `SafeAreaView`, `iphone-x-helper`를 이용한 노치 대응
- `styled-components` 기반의 UI 구성
- Expo CLI로 실행 가능한 크로스플랫폼 앱

## 🛠️ 기술 스택

| 영역          | 기술                                                         |
| ------------- | ------------------------------------------------------------ |
| 프레임워크    | React Native, Expo                                           |
| UI 라이브러리 | styled-components                                            |
| 플랫폼 대응   | react-native-safe-area-context, react-native-iphone-x-helper |
| 개발 환경     | Babel, Expo CLI                                              |

## 🛠️ 개발 문서

| 제목                                                                                                             
| ----------------------------------------------------------------------------------------------------------------
| [ScrollView & FlatList 차이점](https://www.notion.so/ScrollView-vs-FlatList-1e113befc507800bbc4bd3edb278410b)          
| [리엑트 네이티브 스타일 컴포넌트](https://www.notion.so/Styled-Components-1e613befc507802aae8afa296bdb05a8) 
| [아이콘 범위 늘리기](https://www.notion.so/1e613befc507803ba032f8fb0a870e86)                         

## 🗂️ 프로젝트 구조

```bash
kakao-friend-list/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── Division.js   # 구분선 컴포넌트
│   ├── FriendList.js # 친구리스트
│   ├── FriendSection.js # 친구 토글
│   ├── Header.js # 헤더
│   ├── Margin.js # 마진 컴포넌트
│   ├── Profile.js # 프로필
│   └── Tabar.js  # 하단 탭바
├── .gitignore
├── App.js
├── app.json
├── data.js
├── index.js
├── package.json
├── package-lock.json
├── yarn.lock
└── README.md
```
