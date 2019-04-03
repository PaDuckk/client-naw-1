import React from "react";
import BillStatus from "./BillStatus";
import "bootstrap/dist/css/bootstrap.css";

const BillDetail = function({ match }) {
  // match.params.billId
  return (
    <div>
      <div className="display-3 text-center">
        법안 이름 {match.params.billId}
      </div>
      <div className="display-4 text-center">상임위 이름</div>
      <div className="text-center">시간 | 출처</div>
      <BillStatus />
      <div>
        <div className="display-4">발의자</div>
        <ul className="list-inline">
          {members.map(member => (
            <li className="list-inline-item">{member}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="display-4">법안 주요내용</div>
        <div>
          제안이유 수목원의 정의에 조사？교육 기능을 추가하여 개념을 명확히 하고
          동일한 기능과 역할을 수행하는 식물원 등을 수목원과 동일한 시설로
          간주하는 한편, 자생식물의 정의 신설, 사립수목원의 수익사업 근거 마련,
          수목원의 품질 및 운영？관리 평가 도입, 희귀？특산식물 관리대책 수립,
          한국수목원협회의 설립, 희귀？특산식물 또는 특별산림보호대상종을
          보전하는 등록수목원 지원 등 현행 제도의 운영상 나타난 일부 미비점을
          개선？보완하려는 것임. 이러한 개선·보완을 통해 경영이 어려운
          사립수목원의 경영활성화에 기여하고, 국민에게 질 높은 수목원 서비스를
          제공하는 한편, 생물다양성협약(CBD), 세계식물보전연맹(BGCI) 등
          국제사회의 요구에 부응하고 자연생태계의 건강성 확보와 미래 산업적
          활용에 기여하도록 하도록 하고 국가 역할을 대신하는 등록수목원에
          사업비의 일부를 지원함으로써 자긍심을 고취하는 등 원활한 수목원 운영을
          도모하려는 것임. 주요내용 가. 수목원의 정의에 수목원이 실제로 수행하는
          조사 및 교육 기능을 추가하고 동일한 기능과 역할을 수행하는 식물원 등을
          수목원 시설로 간주함(안 제2조제1호). 나. 사립수목원의 수익사업 근거를
          신설함(안 제3조제1항제9호의2 신설). 다. 공립수목원 조성예정지 지정
          승인을 협의로 변경함(안 제6조의2제2항). 라. 등록수목원의 품질 및
          운영？관리에 관한 평가 제도를 도입함(안 제13조의2 신설). 마.
          희귀？특산식물 관리대책을 수립？시행하도록 함(안 제3조제1항제8호 및
          제16조의2 신설). 바. 한국수목원협회의 설립 근거를 신설함(안 제18조의21
          신설). 사. 기후 및 식생대별 국립수목원의 물품에 대한 관리원 양여
          근거를 신설함(안 제18조의22). 아. 희귀？특산식물 및 특별산림보호대상종
          보전사업 지원근거를 신설함(안 제22조제2항 신설).
        </div>
      </div>
    </div>
  );
};

export default BillDetail;
