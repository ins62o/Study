# 🚌 카카오버스 앱 (React Native)

![React Native](https://img.shields.io/badge/React%20Native-0.79.6-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-~54.0.6-9cf?logo=expo)

## 📌 소개

React Native와 Expo를 이용하여 구현한 **버스 도착 정보 조회 앱**입니다.  
실시간 버스 도착 시간을 확인하고, 즐겨찾기 및 알람 기능을 제공합니다.

---

## 🧩 주요 기능

- 🚌 **버스 도착 정보 표시** (남은 시간, 잔여 좌석 등)
- ⭐ **즐겨찾기 기능** — 자주 이용하는 정류장 저장
- ⏰ **도착 알람 기능** — 버스 도착 시 알림 설정
- 🎨 **UI / 비즈니스 로직 분리 구조**
- 🌙 **테마 지원 (다크/라이트)**

---

## 🛠️ 기술 스택

| 영역          | 기술               |
| ------------- | ------------------ |
| 프레임워크    | React Native, Expo |
| 상태관리 / 훅 | React Hooks        |
| 날짜처리      | Day.js             |
| UI            | StyleSheet         |
| 개발 환경     | Babel, Expo CLI    |

---

## 🗂️ 프로젝트 구조

```bash
KAKAO-BUS/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── Components/
│   │   ├── AlarmButton.js        # 도착 알람 버튼 컴포넌트
│   │   ├── BookmarkButton.js     # 즐겨찾기 버튼 컴포넌트
│   │   ├── Margin.js             # UI 간격 컴포넌트
│   │   └── NextBusInfo.js        # 다음 버스 도착 정보
│   ├── App.js                    # 메인 앱 진입점
│   ├── BusInfo.js                # 버스 도착 정보 메인 화면
│   └── use-theme.js              # 테마 관련 커스텀 훅
├── .gitignore
├── app.json
├── color.js
├── data.js
├── index.js
├── package.json
├── package-lock.json
└── yarn.lock
```
