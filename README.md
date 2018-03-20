# Blink
캡스톤디자인 Blink class생성 과제

# 라이브러리 생성하는 순서
1. 관련 코드의 setup 부분을 class화 시킨후 .h파일에 저장한다.
2. class의 생성자와 관련함수를 .cpp에 작성한다.
3. Arduino디렉토리의 library디렉토리에 라이브러리의 이름을 가진 디렉토리를 생성한다.
4. 해당 라이브러리에 .cpp와 .h에 작성한다.
5. Arduino 프로그램에서 라이브러리 추가하기 탭에서 잘 등록되었는지 확인한다.
6. 라이브러리를 include 하여 생성자를 호출하여 사용한다.



 # ds18b20과 thinkspeak연동
ds18b20은 dallastempertaure 라이브러리와 onewire 라이브러리를 사용한다.
thinkspeak와 연동하기 위하여 api.thinkspeak.com이라는 url과 writeapikey를 사용하고 http프로토콜을 사용하여 통신한다.
기본적으로  field라는 키워드로 데이터를 식별하며 이 코드에서는 GET을 이용하여 header의 정보를 사용한다.
온도 측정의 인터벌은 1분이며 와이파이를 AP로 하여 통신한다.



## ds19b20과 IFTTT연동
기존에 사용하였던 ThinkSpeak연동 코드와 동일하다.
하지만 이번에는 똑같이 GET을 이용하지만 api_key가 parameter로 사용되는것이 아니라 IFTTT는 개인 URL이 주어지기때문에
URL부분을 바꿔주고 value1과 value2를 parameter로 이용한다. 
value1은 현재의 온도값을 전달하며 valu2는 nodemcu작동 순간부터 전송이 된 시점의 시간을 의미한다.

> 
과제#5 Github commit history와 LINE전송 영상 주소:<https://youtu.be/2tGa5S_In_c>
