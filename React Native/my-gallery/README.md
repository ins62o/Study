# 🖼️ 이미지 갤러리 앱 (React Native)
React Native & Expo 기반 이미지 갤러리 앱입니다. 갤러리에서 이미지를 가져오고, 큰 이미지 보기 및 텍스트 입력 기능을 제공합니다.

## 📌 소개
React Native와 Expo를 사용하여 구현된 이미지 갤러리 앱입니다. 사용자가 기기 내 사진을 확인하고, 큰 이미지로 확대하거나 이미지에 메모를 추가할 수 있습니다.

## 🧩 주요 기능
- 갤러리에서 이미지 불러오기
- 이미지 확대 보기 (모달)
- 텍스트 입력을 통한 이미지 설명 추가
- 드롭다운을 이용한 분류 기능
- UI 로직과 비즈니스 로직 분리

## 🛠️ 기술 스택

| 영역         | 기술                         |
|--------------|------------------------------|
| 프레임워크    | React Native, Expo           |
| 상태 관리     | React Hooks                  |
| UI 구성       | StyleSheet                   |
| 파일/이미지   | expo-image-picker             |
| 기타         | Modal, FlatList 등 React Native 내장 컴포넌트 사용 |

## 🛠️ 개발 문서
- UI 로직과 비즈니스 로직을 `src/` 폴더 내 커스텀 훅(`use-gallery.js`)으로 분리하여 가독성과 유지보수를 향상시킴

## 🗂️ 프로젝트 구조
MY-GALLERY/
├── .expo/
├── assets/
├── node_modules/
├── src/
│ ├── BigImgModal.js # 이미지 확대 모달 컴포넌트
│ ├── ImageList.js # 이미지 리스트 컴포넌트
│ ├── MyDropDownPicker.js # 드롭다운 컴포넌트
│ ├── TextInputModal.js # 텍스트 입력 모달
│ └── use-gallery.js # 갤러리 관련 커스텀 훅
├── .gitignore
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json