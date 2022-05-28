/* eslint-disable */ 
// 위 문장은 warning메시지가 안뜨게 해주는 역할

import './App.css';
import { useState } from 'react';

function App() {

  let [ title, setTitle ] = useState(["ReactBlog","리액트 블로그", "리액트 독학","프런트엔드"]);
  //ㄴ 여기서 a변수는 state값만 가져오는 것이고 b 변수는(함수) state값을 수정할 수 있다.
  // 또한 이는 js에서 destructuring 문법이다. 
  // ex) let [a,c] = [1, 2]; 처럼 자리에 대응되게 하는 것.

  //++ state와 변수의 차이점. 
  // 1. 변수는 변화에 대응이 귀찮아진다. 하지만, state쓰던 html은 자동으로 재랜더링된다.
  // 2. 다만 자주 변경되는 요소에 대해서 state를 쓰는것이 효율적이다. 잘 안바뀌는 요소는 그냥 변수 선언해서 사용해도 무방.

  let [따봉, like] = useState(0);

  return (
    <div className="App">
      <div className="main_title">
        <h1>{ title[0] }</h1> {/* <- 중괄호같은 형태를 데이터 바인딩 이라고 한다. */}
      </div>
      <div className="list">
        {/* <button onClick={ ()=>{ 
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}>가나다순 정렬</button> */}
        <h4>{ title[1] }  <span onClick={() =>{ like(따봉+1) }}>👍</span> {따봉} </h4>
        <p>5월28일</p>
        {/* 온클릭 이벤트 핸들러 알아둘것. */}
      </div>
      <div className="list">
        <h4>{ title[2] } 

        {/* <button className='textChange' onClick={() =>{
          let copy = [...title];
          // title안에 있던 괄호를 없애주시고 다시 씌워주세요. = ... 문법
          // 이를 안하여서 기존의 title 이랑 copy랑 같다고 컴퓨터가 인식해서 재랜더링을 안해주기 때문.
          // 이를 통해서 완전히 독립적인 arr 사본이 만들어져서 활용을 할 수 있음.
          // 결과적으로 copy와 title이 다르다고 인식해서 재랜더링을 해줌.
          // 이러한 경우는 독립적인 카피본을 만들어서 수정하는것이 관례.
          copy[2] = "리액트 학습";
          setTitle(copy); 
          }}> 텍스트 변경 버튼</button>  */}

          </h4>
        <p>5월28일</p>
      </div>
      <div className="list">
        <h4>{ title[3] }</h4>
        <p>5월28일</p>
      </div>

      <Modal></Modal>
      {/* 바로 닫아버리는것도 가능 */}

    </div>
  );
}


// 컴포넌트 생성
// 컴포넌트 사용할 때.
// 1. 반복적인 html을 축약하고자 할때.
// 2. 큰 페이지들
// 3. 자주 변경되는 것들

// 컴포넌트의 단점: state가져다 쓰는것에 문제가 생김.

// let Modal = () =>{} 이런식으로 함수선언도 가능.

function Modal(){
  return(
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜:</p>
    <p>상세내용</p>
  </div>
  )
};

export default App;
