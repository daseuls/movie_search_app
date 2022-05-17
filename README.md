# 프로젝트 설명

영화API를 이용해 영화를 검색하고, 즐겨찾기 할 수 있는 웹 어플리케이션입니다.

> [🚀 배포링크](https://main--inquisitive-shortbread-d8c91a.netlify.app/)

# 사용기술, 라이브러리

- Javascript, TypeScript, React, Styled-Component
- [Recoil](https://recoiljs.org/) (global store)
- [Axios](https://github.com/axios/axios) (Rest API)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)(drag and drop)
- [react-Loading](https://github.com/fakiolinho/react-loading) (loading spinner)
- [uuid](https://github.com/uuidjs/uuid) (unique id value)
- [react-icon](https://github.com/react-icons/react-icons) (icons)

# 구현 기능

### 1. 오픈 API를 이용한 영화 검색

- [오픈 영화 API](https://www.omdbapi.com/)를 이용해 영화를 검색했을 때 영화 정보를 불러올 수 있도록 구현했습니다.

  ![search](https://user-images.githubusercontent.com/71131248/168468596-c5aff9a2-ffd9-4acc-a577-1f1db4104f23.gif)

### 2. Web API Intersection Observer를 이용한 무한 스크롤

- 웹 API인 Intersection Observer를 이용해 무한 스크롤을 구현했습니다. observer를 만든 후, 영화 리스트들 뒤에 감지할 수 있는 태그를 만들어서 해당 타겟이 root로 등록한 태그와 겹쳐졌을 때를 감지해 새로운 데이터를 받아온 후, 기존 데이터에 합쳐 무한 스크롤을 구현했습니다.

  ![inifite](https://user-images.githubusercontent.com/71131248/168468595-c0516aa0-8e8c-4bef-988b-a2147dbb7d1b.gif)

### 3. Recoil과 localStorage를 이용한 전역 상태 관리, 로컬 데이터 저장(북마크)

- 전역 상태 관리를 위해 recoil을 사용했습니다. 받아온 데이터들을 저장해 전역적으로 관리를 했고, 북마크한 데이터들은 localStorage와도 값이 항상 같을 수 있도록 연동했습니다. 또한 새로고침 시 recoil의 데이터는 사라지기 때문에 처음 렌더링 시 localStorage에 저장되어 있는 데이터를 recoil의 store에 저장하여 즐겨찾기한 내용들이 유지될 수 있도록 구현했습니다.

  ![store](https://user-images.githubusercontent.com/71131248/168468599-f357c19c-5b53-4981-9f0a-023f56be1291.gif)

### 4. react-beautiful-dnd를 이용한 북마크 리스트 드래그 앤 드롭

- 북마크한 영화리스트들의 순서를 드래그하여 변경할 수 있도록 [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) 라이브러리를 사용했습니다. droppable한 영역과 draggable한 영역을 지정해주고, 드래그가 완료되었을 때 콜백하는 onDragEnd 함수에 내장되어 있는 값을 통해, 드래그한 아이템과 드롭한 아이템의 인덱스 값을 구해 배열의 순서를 바꾼 후 그 값으로 기존 데이터 값을 setState해주었습니다.

  ![drag](https://user-images.githubusercontent.com/71131248/168468601-5880ebb7-1236-4221-b35f-1ef39c84e6a2.gif)
