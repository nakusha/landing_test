import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    :root{
        --defaultBgColor:${(props) => (props.styles ? "#13141a" : "#f7f7f7")};
        --color1:${(props) => (props.styles ? "#111626" : "#111626")};    
        --darkBlue:${(props) => (props.styles ? "#102040" : "#102040")};
        --borderColor:${(props) => (props.styles ? "#677593" : "#3a4458")};
        --color4:${(props) => (props.styles ? "#d9d9d9" : "#d9d9d9")};
        --yellow:${(props) => (props.styles ? "#ff971c" : "#ff971c")};
        --componentBg:${(props) => (props.styles ? "#24262f" : "#ffffff")};
        --color6:${(props) => (props.styles ? "black" : "white")};
        --footerColor:${(props) => (props.styles ? "#0d0f15" : "#444444")};
        --buttonHover:${(props) => (props.styles ? "#677593" : "#677593")};
        --buttonColor:${(props) => (props.styles ? "#3a4458" : "#677593")};
        --topBorder:${(props) => (props.styles ? "#272931" : "#ffffff")};
        --menuTextColor:#444444;
        --inputBorder:#677593;
        --inputBg:#1d1e25;
        --errorColor:#f41717;
        --whiteColor:#ffffff;
        --grayTextColor:#979797;
        --containerWidth:1220px;
        
        --minHeight:645px;
        --headerFontSize:24px;
        --subTitleFontSize:16px;
        --mainFontSize:14px;
        --infoFontSize:12px;
        
        @media only screen and (max-width: 1220px) {
          --containerWidth:95%;
        }
        @media only screen and (max-width: 800px) {
          --containerWidth:95%;
        }
    }
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    };
    *{
        scroll-snap-type: none;
        box-sizing:border-box;
    };
    body{
      font-family:noto_regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size:16px;
      background-color:var(--defaultBgColor);
      color:var(--grayTextColor);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    };
    button{
      background-color: var(--buttonColor);
      cursor:pointer;
    }
    @media print {    
    .no-print, .no-print *
      {
        display: none !important;
      }
    }
    @font-face {
      font-family:noto_regular;
      src:url('../assets/fonts/NotoSansKR-Regular.otf') fromat('otf');
    }
    @font-face {
      font-family:noto_bold;
      src:url('../assets/fonts/NotoSansKR-Bold.otf') fromat('otf');
    }
`;

export default GlobalStyle;
