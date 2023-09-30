import React from "react";
import { Link } from 'react-router-dom';
import review from "../images/Fifth/group-5.png";
import "../style/style3.css";

export const Third = ({ restartGame, score, questions, wrongans }) => {
  return (
    <div className="quiz-app-UI-design3">
      <div className="div3">
        <div className="overlap3">
          <div className="ellipse3" />
          {/* <div className="rectangle" /> */}
          <svg className="rectangle3" width="337" height="228" viewBox="0 0 337 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30C0 13.4315 13.4315 0 30 0H307C323.569 0 337 13.4315 337 30V198C337 214.569 323.569 228 307 228H30C13.4315 228 0 214.569 0 198V30Z" fill="#FEC100" />
          </svg>
          <div className="ellipse3-2" />
          <div className="ellipse3-3" />
          <div className="ellipse3-4" />
          <div className="ellipse3-5" />
          <div className="ellipse3-6" />
          <div className="ellipse3-7" />
          <div className="text-wrapper3">your Score</div>
          <div className="text-wrapper3-2">pt</div>
          <div className="text-wrapper3-3">{score * 4}</div>
          <div className="group3">
            <div className="completion3">
              <div className="ellipse3-8" />
              <div className="overlap-group3">
                <div className="text-wrapper3-4">{((score + wrongans) / questions.length) * 100}%</div>
                <div className="text-wrapper3-5">Completion</div>
              </div>
            </div>
            <div className="correct3">
              <div className="ellipse3-9" />
              <div className="overlap3-2">
                <div className="text-wrapper3-6">{score}</div>
                <div className="text-wrapper3-7">Correct</div>
              </div>
            </div>
            <div className="wrong3">
              <div className="ellipse3-10" />
              <div className="overlap3-3">
                <div className="text-wrapper3-8">{score - questions.length}</div>
                <div className="text-wrapper3-9">Wrong</div>
              </div>
            </div>
            <div className="total-question3">
              <div className="ellipse3-8" />
              <div className="overlap3-4">
                <div className="text-wrapper3-10">{questions.length}</div>
                <div className="text-wrapper3-5">Total Question</div>
              </div>
            </div>
          </div>
          {/* <img className="frame" alt="Frame" src="../images/Third/frame-1261155442.svg" /> */}
          <Link to="/">
            <svg className="frame3" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6461 23.6604L16.5561 24.6771C16.0945 25.1076 15.3482 25.1076 14.8915 24.6771L5.34617 15.7786C4.88461 15.3481 4.88461 14.6519 5.34617 14.226L14.8915 5.32288C15.3531 4.89237 16.0994 4.89237 16.5561 5.32288L17.6461 6.33959C18.1126 6.77467 18.1028 7.48454 17.6265 7.91046L11.7097 13.1681H25.8216C26.4746 13.1681 27 13.6581 27 14.2672V15.7328C27 16.3419 26.4746 16.8319 25.8216 16.8319H11.7097L17.6265 22.0895C18.1077 22.5155 18.1175 23.2253 17.6461 23.6604Z" fill="white" fillOpacity="0.9" />
            </svg>
          </Link>
        </div>
        <div className="text-wrapper3-11">Home</div>
        <div className="text-wrapper3-12">Leaderboard</div>
        <div className="overlap3-5">
          <div className="text3">{""}</div>
          <div className="generate-PDF3">
            <div className="vector-wrapper3">
              {/* <img className="vector3" alt="Vector" src="../images/Third/image.svg" /> */}
              <svg className="vector3-4" width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.45801 13.2422C9.8877 13.2422 10.2148 13.374 10.4492 13.6377C10.918 14.1699 10.9277 15.2344 10.4395 15.791C10.2002 16.0645 9.8584 16.2061 9.40918 16.2061H8.0957V13.2422H9.45801ZM18.4082 5.12695L13.623 0.341797C13.4033 0.12207 13.1055 0 12.793 0H12.5V6.25H18.75V5.95215C18.75 5.64453 18.6279 5.34668 18.4082 5.12695ZM10.9375 6.64062V0H1.17188C0.522461 0 0 0.522461 0 1.17188V23.8281C0 24.4775 0.522461 25 1.17188 25H17.5781C18.2275 25 18.75 24.4775 18.75 23.8281V7.8125H12.1094C11.4648 7.8125 10.9375 7.28516 10.9375 6.64062ZM13.5254 14.707C13.5254 19.1162 9.18945 18.4961 8.10059 18.4961V21.2891C8.10059 21.6113 7.83691 21.875 7.51465 21.875H6.01074C5.68848 21.875 5.4248 21.6113 5.4248 21.2891V11.5332C5.4248 11.2109 5.68848 10.9473 6.01074 10.9473H9.96582C12.1387 10.9473 13.5254 12.5488 13.5254 14.707Z" fill="white" />
              </svg>

            </div>
            <div className="text-wrapper3-13">Generate PDF</div>
          </div>
        </div>
        <div className="text-wrapper3-14">Review Answer</div>
        <div className="text-wrapper3-15">Share Score</div>
        <div className="play-again3">
          <div className="img-wrapper3" onClick={() => restartGame()}>
            {/* <img className="img3" alt="Vector" src="../images/Third/vector.svg" /> */}
            <svg className="vector3-5" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4807 1.70713e-05C7.67499 0.00505537 5.12756 1.11069 3.24679 2.90805L1.73466 1.39592C1.0945 0.755805 0 1.20917 0 2.11445V7.79033C0 8.35153 0.454929 8.80646 1.01613 8.80646H6.69201C7.5973 8.80646 8.05066 7.71196 7.41054 7.0718L5.6429 5.30416C6.94965 4.08062 8.64053 3.40286 10.4369 3.38737C14.3489 3.35358 17.6465 6.51945 17.6126 10.5613C17.5806 14.3955 14.472 17.6129 10.5 17.6129C8.75874 17.6129 7.11303 16.9915 5.81611 15.8535C5.6153 15.6773 5.31203 15.688 5.12311 15.8769L3.44387 17.5561C3.2376 17.7624 3.2478 18.0987 3.46428 18.2942C5.32612 19.976 7.79346 21 10.5 21C16.299 21 21 16.299 21 10.5001C21 4.70778 16.2731 -0.0103559 10.4807 1.70713e-05Z" fill="white" />
            </svg>
          </div>
          <div className="text-wrapper3-16">Play Again</div>
        </div>
        <div className="group3-2">
          {/* <img className="vector-2" alt="Vector" src="../images/Third/vector-2.svg" /> */}
          <svg className="vector3-3" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1695 5.04384L4.16732 11.6345V18.7478C4.16732 18.932 4.24048 19.1086 4.37072 19.2389C4.50095 19.3691 4.67758 19.4423 4.86176 19.4423L9.72548 19.4297C9.90905 19.4288 10.0848 19.3552 10.2143 19.2251C10.3438 19.0949 10.4165 18.9188 10.4164 18.7352V14.5812C10.4164 14.397 10.4896 14.2204 10.6198 14.0901C10.7501 13.9599 10.9267 13.8867 11.1109 13.8867H13.8887C14.0728 13.8867 14.2495 13.9599 14.3797 14.0901C14.51 14.2204 14.5831 14.397 14.5831 14.5812V18.7322C14.5828 18.8236 14.6006 18.9141 14.6354 18.9986C14.6701 19.0831 14.7212 19.1599 14.7857 19.2247C14.8503 19.2894 14.9269 19.3407 15.0113 19.3758C15.0957 19.4108 15.1862 19.4288 15.2776 19.4288L20.1395 19.4423C20.3237 19.4423 20.5004 19.3691 20.6306 19.2389C20.7608 19.1086 20.834 18.932 20.834 18.7478V11.6298L12.8335 5.04384C12.7395 4.96802 12.6223 4.92668 12.5015 4.92668C12.3807 4.92668 12.2635 4.96802 12.1695 5.04384ZM24.8097 9.52344L21.1812 6.53255V0.520833C21.1812 0.3827 21.1263 0.250224 21.0287 0.152549C20.931 0.0548735 20.7985 0 20.6604 0H18.2298C18.0917 0 17.9592 0.0548735 17.8615 0.152549C17.7639 0.250224 17.709 0.3827 17.709 0.520833V3.67231L13.8231 0.47526C13.4502 0.168394 12.9823 0.000613431 12.4993 0.000613431C12.0164 0.000613431 11.5485 0.168394 11.1756 0.47526L0.189019 9.52344C0.136279 9.56703 0.0926449 9.62058 0.0606102 9.68104C0.0285755 9.7415 0.00876769 9.80768 0.00231864 9.8758C-0.0041304 9.94392 0.00290567 10.0126 0.0230248 10.078C0.043144 10.1434 0.0759519 10.2042 0.119574 10.2569L1.22634 11.6024C1.26985 11.6553 1.32336 11.6991 1.38381 11.7313C1.44426 11.7635 1.51047 11.7835 1.57864 11.79C1.64681 11.7966 1.71561 11.7897 1.7811 11.7696C1.84659 11.7496 1.90748 11.7168 1.96029 11.6732L12.1695 3.26432C12.2635 3.18851 12.3807 3.14717 12.5015 3.14717C12.6223 3.14717 12.7395 3.18851 12.8335 3.26432L23.0432 11.6732C23.0959 11.7168 23.1567 11.7496 23.2221 11.7697C23.2875 11.7898 23.3562 11.7969 23.4243 11.7904C23.4924 11.784 23.5586 11.7642 23.6191 11.7321C23.6795 11.7001 23.7331 11.6565 23.7767 11.6037L24.8835 10.2582C24.927 10.2052 24.9597 10.1441 24.9796 10.0784C24.9995 10.0128 25.0062 9.94379 24.9993 9.8755C24.9925 9.80722 24.9722 9.74096 24.9396 9.68054C24.9071 9.62012 24.8629 9.56673 24.8097 9.52344Z" fill="white" />
          </svg>

        </div>
        <div className="group3-3">
          {/* <img className="vector-3" alt="Vector" src="../images/Third/vector-3.svg" /> */}
          <Link to="/LeaderBoard">
            <svg className="vector3-2" width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.178 7.73758L19.8499 8.2916C19.7298 8.49696 19.4786 8.57937 19.2571 8.49421C18.7986 8.31586 18.3803 8.06385 18.0136 7.75006C17.836 7.5991 17.7928 7.33675 17.9128 7.1353L18.241 6.58127C17.9759 6.26501 17.7701 5.89879 17.635 5.50232L16.9906 5.49324C16.7562 5.48994 16.5555 5.31912 16.5197 5.08422C16.4482 4.61442 16.4512 4.12222 16.5401 3.63515C16.5825 3.40134 16.788 3.23235 17.0224 3.23565L17.6668 3.24473C17.813 2.85222 18.029 2.49194 18.3029 2.18327L17.9905 1.62022C17.8762 1.41546 17.9229 1.15438 18.1085 1.00854C18.4839 0.705204 18.9131 0.465132 19.3726 0.299711C19.5963 0.220824 19.8451 0.310274 19.9594 0.518936L20.2718 1.08199C20.6829 1.01355 21.1009 1.01944 21.5099 1.09943L21.8381 0.545401C21.9582 0.340041 22.2094 0.257633 22.4308 0.342792C22.8893 0.521143 23.3077 0.773154 23.6744 1.08694C23.852 1.2379 23.8952 1.50025 23.7751 1.70171L23.447 2.25573C23.7121 2.572 23.9179 2.93821 24.0529 3.33469L24.6974 3.34377C24.9317 3.34707 25.1325 3.51788 25.1682 3.75278C25.2398 4.22259 25.2367 4.71478 25.1478 5.20186C25.1055 5.43566 24.8999 5.60466 24.6656 5.60135L24.0211 5.59228C23.875 5.98479 23.6589 6.34506 23.385 6.65373L23.6974 7.21678C23.8117 7.42154 23.7651 7.68263 23.5794 7.82846C23.204 8.1318 22.7748 8.37187 22.3154 8.53729C22.0916 8.61618 21.8429 8.52673 21.7286 8.31807L21.4162 7.75502C21.0089 7.82351 20.5871 7.81756 20.178 7.73758ZM19.8003 5.43515C21.2877 6.61247 23.0266 4.92195 21.8916 3.40191C20.4042 2.22068 18.6653 3.91511 19.8003 5.43515ZM15.2121 11.3828L16.5192 12.0576C16.9105 12.2897 17.0755 12.7725 16.9133 13.1999C16.5523 14.1403 15.8566 14.9977 15.2132 15.7466C14.9192 16.0901 14.4181 16.169 14.0268 15.9369L12.8994 15.2647C12.2669 15.791 11.5344 16.2065 10.7376 16.4727L10.7192 17.785C10.7128 18.2381 10.3831 18.6241 9.93672 18.696C8.97356 18.8465 7.96574 18.8401 6.97217 18.6542C6.52409 18.5698 6.19754 18.1784 6.20398 17.7214L6.22247 16.4091C5.43354 16.1167 4.71299 15.6846 4.09559 15.1407L2.94979 15.777C2.55602 15.998 2.05337 15.905 1.76923 15.5533C1.14716 14.7866 0.49147 13.9101 0.157109 12.9639C0.00687137 12.536 0.185497 12.058 0.583235 11.8331L1.89313 11.1952C1.7523 10.3767 1.76413 9.53698 1.92801 8.7189L0.636661 8.04048C0.24536 7.80839 0.0763635 7.32549 0.242501 6.90201C0.603438 5.96168 1.28356 5.10399 1.92698 4.35517C2.22091 4.01162 2.72207 3.93273 3.11337 4.16483L4.24073 4.83702C4.87321 4.31072 5.6057 3.89522 6.40249 3.62907L6.42104 2.3128C6.42736 1.86362 6.75315 1.47755 7.19952 1.4057C8.16267 1.25519 9.1744 1.26163 10.168 1.44361C10.6161 1.52806 10.9427 1.91941 10.9362 2.3764L10.9177 3.68877C11.7067 3.98116 12.4272 4.41323 13.0446 4.95714L14.1905 4.31696C14.5842 4.09592 15.0869 4.18895 15.371 4.54064C15.9931 5.30729 16.6449 6.18375 16.9792 7.13387C17.1294 7.5618 16.9703 8.04008 16.5726 8.26497L15.2471 8.90261C15.3878 9.72499 15.376 10.5647 15.2121 11.3828ZM10.6072 12.1423C12.9619 9.16733 9.57697 5.68571 6.53688 7.95561C4.18224 10.9306 7.56713 14.4122 10.6072 12.1423ZM20.0136 19.4122L19.6854 19.9662C19.5653 20.1716 19.3141 20.254 19.0927 20.1688C18.6342 19.9905 18.2158 19.7385 17.8491 19.4247C17.6715 19.2737 17.6283 19.0114 17.7484 18.8099L18.0765 18.2559C17.8114 17.9396 17.6056 17.5734 17.4706 17.1769L16.8261 17.1679C16.5918 17.1646 16.391 16.9937 16.3553 16.7588C16.2837 16.289 16.2868 15.7968 16.3757 15.3098C16.418 15.076 16.6236 14.907 16.8579 14.9103L17.5024 14.9194C17.6485 14.5268 17.8646 14.1666 18.1385 13.8579L17.8261 13.2948C17.7118 13.0901 17.7584 12.829 17.9441 12.6832C18.3195 12.3798 18.7487 12.1398 19.2081 11.9743C19.4319 11.8954 19.6806 11.9849 19.7949 12.1936L20.1073 12.7566C20.5185 12.6882 20.9364 12.6941 21.3455 12.774L21.6736 12.22C21.7937 12.0147 22.0449 11.9323 22.2664 12.0174C22.7249 12.1958 23.1432 12.4478 23.5099 12.7616C23.6875 12.9125 23.7307 13.1749 23.6107 13.3763L23.2825 13.9304C23.5476 14.2466 23.7534 14.6128 23.8885 15.0093L24.5329 15.0184C24.7673 15.0217 24.968 15.1925 25.0038 15.4274C25.0753 15.8972 25.0723 16.3894 24.9834 16.8765C24.941 17.1103 24.7355 17.2793 24.5011 17.276L23.8567 17.2669C23.7105 17.6594 23.4945 18.0197 23.2206 18.3284L23.533 18.8914C23.6473 19.0962 23.6006 19.3572 23.415 19.5031C23.0396 19.8064 22.6104 20.0465 22.1509 20.2119C21.9272 20.2908 21.6784 20.2014 21.5641 19.9927L21.2517 19.4296C20.8445 19.4981 20.4226 19.4922 20.0136 19.4122ZM19.6359 17.1059C21.1233 18.2832 22.8622 16.5927 21.7272 15.0726C20.2397 13.8953 18.5009 15.5858 19.6359 17.1059Z" fill="white" />
            </svg>
          </Link>
        </div>
        <div className="group3-4">
          <img className="vector3-4" alt="Vector" src={review} />
            {/* <svg className="vector3" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2857 14.375C16.1755 14.375 15.1551 14.7262 14.3496 15.3136L9.3168 12.4362C9.46584 11.8195 9.46584 11.1805 9.3168 10.5637L14.3496 7.68631C15.1551 8.27376 16.1755 8.625 17.2857 8.625C19.8893 8.625 22 6.69421 22 4.3125C22 1.93079 19.8893 0 17.2857 0C14.6821 0 12.5714 1.93079 12.5714 4.3125C12.5714 4.63405 12.6102 4.94725 12.6832 5.24872L7.6504 8.12614C6.8449 7.53874 5.8245 7.1875 4.71429 7.1875C2.11067 7.1875 0 9.11829 0 11.5C0 13.8817 2.11067 15.8125 4.71429 15.8125C5.8245 15.8125 6.8449 15.4613 7.6504 14.8739L12.6832 17.7513C12.6088 18.0587 12.5713 18.3726 12.5714 18.6875C12.5714 21.0692 14.6821 23 17.2857 23C19.8893 23 22 21.0692 22 18.6875C22 16.3058 19.8893 14.375 17.2857 14.375Z" fill="white" />
              </svg> */}

        </div>
        <div className="group3-5">
          {/* <img className="vector-5" alt="Vector" src="../images/Third/vector-5.svg" /> */}

          <svg className="img3" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2857 14.375C16.1755 14.375 15.1551 14.7262 14.3496 15.3136L9.3168 12.4362C9.46584 11.8195 9.46584 11.1805 9.3168 10.5637L14.3496 7.68631C15.1551 8.27376 16.1755 8.625 17.2857 8.625C19.8893 8.625 22 6.69421 22 4.3125C22 1.93079 19.8893 0 17.2857 0C14.6821 0 12.5714 1.93079 12.5714 4.3125C12.5714 4.63405 12.6102 4.94725 12.6832 5.24872L7.6504 8.12614C6.8449 7.53874 5.8245 7.1875 4.71429 7.1875C2.11067 7.1875 0 9.11829 0 11.5C0 13.8817 2.11067 15.8125 4.71429 15.8125C5.8245 15.8125 6.8449 15.4613 7.6504 14.8739L12.6832 17.7513C12.6088 18.0587 12.5713 18.3726 12.5714 18.6875C12.5714 21.0692 14.6821 23 17.2857 23C19.8893 23 22 21.0692 22 18.6875C22 16.3058 19.8893 14.375 17.2857 14.375Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default Third;