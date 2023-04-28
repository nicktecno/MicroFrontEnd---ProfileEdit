import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";

//imagens

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  netbook: "830px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css?family=Poppins:400,700,900');
}
  :root {

    --input-border-color: ${(props) => props.colors[0]["input-border-color"]};
    --input-border-color-hover: ${(props) =>
      props.colors[0]["input-border-color-hover"]};
    --menu-sandwich-header: ${(props) =>
      props.colors[0]["menu-sandwich-header"]};
    --menu-sandwich-body: ${(props) => props.colors[0]["menu-sandwich-body"]};
    --title-modal-color: ${(props) => props.colors[0]["title-modal-color"]};
    --header-color: ${(props) => props.colors[0]["header-color"]};
    --header-font-color:${(props) => props.colors[0]["header-font-color"]};
    --card-background:${(props) => props.colors[0]["card-background"]};
    --card-color-price:${(props) => props.colors[0]["card-color-price"]};
    --card-color-price-hover:${(props) =>
      props.colors[0]["card-color-price-hover"]};
    --card-color-details:${(props) => props.colors[0]["card-color-details"]};
    --card-color-details-hover:${(props) =>
      props.colors[0]["card-color-details-hover"]};
    --profile-card-color:${(props) => props.colors[0]["profile-card-color"]};
    --profile-card-color-hover:${(props) =>
      props.colors[0]["profile-card-color-hover"]};
    --default-color: ${(props) => props.colors[0]["default-color"]};
    --default-color-hover: ${(props) => props.colors[0]["default-color-hover"]};
    --default-color-icons: ${(props) => props.colors[0]["default-color-icons"]}
    --title-color: ${(props) => props.colors[0]["title-color"]};
    --box-shadow:  ${(props) => props.colors[0]["box-shadow"]};
    --input-background: #f4f3f4;
    --bt-positive-color:  ${(props) => props.colors[0]["bt-positive-color"]};
    --bt-positive-color-hover:  ${(props) =>
      props.colors[0]["bt-positive-color-hover"]};

    --configurable-attributes-color:  ${(props) =>
      props.colors[0]["configurable-attributes-colorr"]};
    --configurable-attributes-color-hover:  ${(props) =>
      props.colors[0]["configurable-attributes-color-hover"]};

    --configurable-attributes-bgcolor:  ${(props) =>
      props.colors[0]["configurable-attributes-bgcolor"]};
    --configurable-attributes-bgcolor-hover:  ${(props) =>
      props.colors[0]["configurable-attributes-bgcolor-hover"]};



    --bt-positive-text-color: ${(props) =>
      props.colors[0]["bt-positive-text-color"]};
    --bt-positive-text-color-hover: ${(props) =>
      props.colors[0]["bt-positive-text-color-hover"]};

    --bt-negative-color:  ${(props) => props.colors[0]["bt-negative-color"]};
    --bt-negative-color-hover:${(props) =>
      props.colors[0]["bt-negative-color-hover"]};
    --bt-negative-text-color:  ${(props) =>
      props.colors[0]["bt-negative-text-color"]};
    --bt-negative-text-color-hover:${(props) =>
      props.colors[0]["bt-negative-text-color-hover"]};
    
    --negative-button-border: ${(props) =>
      props.colors[0]["negative-button-border"]};

    --footer-title-color: ${(props) => props.colors[0]["footer-title-color"]};
    --footer-text-color: ${(props) => props.colors[0]["footer-text-color"]};
    --footer-background-color:${(props) =>
      props.colors[0]["footer-background-color"]};
    --bt-purchase-color:${(props) => props.colors[0]["bt-purchase-color"]};
    --bt-purchase-color-hover:${(props) =>
      props.colors[0]["bt-purchase-color-hover"]};
    --bt-purchase-text-color:${(props) =>
      props.colors[0]["bt-purchase-text-color"]};
    --bt-purchase-text-color-hover:${(props) =>
      props.colors[0]["bt-purchase-text-color-hover"]};
    --explore-block-color: ${(props) => props.colors[0]["explore-block-color"]};
    --explore-block-color-hover: ${(props) =>
      props.colors[0]["explore-block-color-hover"]};
    --explore-block-text-color: ${(props) =>
      props.colors[0]["explore-block-text-color"]};
    --explore-block-text-color-hover: ${(props) =>
      props.colors[0]["explore-block-text-color-hover"]};
    --box-shadow: ${(props) => props.colors[0]["box-shadow"]};
    --card-background: ${(props) => props.colors[0]["card-background"]};
    --card-background-hover: ${(props) =>
      props.colors[0]["card-background-hover"]};
    --font-color: ${(props) => props.colors[0]["font-color"]};
    --font-color-hover:  ${(props) => props.colors[0]["font-color-hover"]};
    //fonts
    --main-font: 'Poppins', sans-serif;;
    --title-font: bold 'Poppins', sans-serif;
  }



  .positiveButton {
    background-color: var(--bt-positive-color);
    font-family: var(--main-font);
    font-weight: bold;
    box-shadow:   var(--box-shadow);
    color: var(--bt-positive-text-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
  }
  .positiveButton:hover {
    color: var(--bt-positive-text-color-hover);
    background-color: var(--bt-positive-color-hover);
  }

  .negativeButton {
    background-color: var(--bt-negative-color);
    font-family: var(--main-font);
    font-weight: bold;
    box-shadow:   var(--box-shadow);
    color: var(--bt-negative-text-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
    svg{
        color: var(--bt-negative-text-color) !important;
    }
  }
  .negativeButton:hover {
    background-color: var(--bt-negative-color-hover);
    color: var(--bt-negative-text-color-hover);
    border: 2px solid transparent !important;
    svg{
        color: var(--bt-negative-text-color-hover) !important;
    }
  }

  .cursor-pointer{
    cursor: pointer;
  }









  *{
        box-sizing: border-box;
        outline: none;
        font-family:  'Poppins' !important;
    }


    body {
        display:flex;
        flex-direction:column;
        line-height: 1;
        width:100%;
        overflow-x: hidden;
        padding-top: 60px;
        padding-bottom: 50px;
         margin:0px;
        height:100%;


        ${customMedia.lessThan("tablet")`
            // padding-top: 80px;
        `}
    }

    input,button,textarea,html,body{
       
        resize:none;
        color: #292929;
        font-size: 14px;
        line-height: 18px;
    }
    ol, ul {
        list-style: none;
    }
    a{
        color: #292929;
        text-decoration: none;
        &:hover{
            color: #333;
            text-decoration: none;
        }
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .slick-slide {
      margin: 30px 0px;
    }

    .cursor-pointer{
        cursor: pointer;
    }

    h1{
        color: blue;
        font-size: 72px;
    }

   
    .contentFull{
        margin-top:30px;
        display: flex;
        min-height:100vh;
        height:100%;
        flex-direction: column;
     
    }



    .produtos-txt{
        font-size: 25px;
        color: #333031;
        font-weight: 500;
        margin: 30px 0px 40px;
  ;

        &.first{
            margin: 0px 0px 40px;
        }

        ${customMedia.lessThan("tablet")`
            margin: 20px auto;
        `}
    }


    .imgresponsiva{
        max-width: 100%;
        height: auto;
    }

  

    .box-slide{
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
        min-height: 120px;
        border: 2px solid #fff;
        color: #7F7F7F;
        position: relative;

        img{
            max-height: 80px;
        }
    }
    
    .carousel{
        padding-bottom: 40px;
      
    }
    .carousel-inner{
        display:flex;
        height:100%;

    }

   

    .modal-adicionar{
        padding:0px;
        background:white !important;
        border-radius:0px !important;
       

      


    }

    .modal-header{
        border-radius:0px;
        border: none;
    }
    .modal-footer{
        border: none;
    }
    .mbody img{
        width: 100%;
    }


    .bt-red-rinnai{
        background-color: #ce171f;
        border: none;
        font-size: 14px;

        width: 100%;
        max-width: 250px;
        height: 50px;
        display: inline-block;
        color: #fff !important;

        &.m-10{
            margin: 10px;
        }

        &.center{
            margin: 10px auto;
            display: block;
        }

        &.w-7{
            max-width: 207px;
            height: 41px;
        }

        &.padd{
            padding: 5px 15px;
            font-size: 11px;
            width: 100%;
            display: block;
            max-width: 320px;
            height: initial;
            cursor: pointer;
        }

        &.normal{
            max-width: 180px;
            font-weight: 400;
            margin: 5px;
            display: inline-block;
        }

        &.radius{
            border-radius: 10px;
        }

        &.full-radius{
            border-radius: 100px;
        }

        &.full{
            max-width: 100%;
        }

        &.transp{
            background-color: transparent;
            height: initial;
        }
    }

    .bt-gray-rinnai{
        background-color: #28a745;
        border: none;
        font-size: 14px;
        font-weight:bold;
        width: 100%;
        max-width: 320px;
        height: auto;
        padding:10px;
        display: inline-block;
        color: #fff !important;
        font-size: 16px;
        &.m-10{
            margin: 10px;
        }

        &.center{
            margin: 10px auto;
            display: block;
        }

        &.w-7{
            max-width: 207px;
            height: 41px;
        }

        &.padd{
            padding: 5px 15px;
            font-size: 11px;
            width: 100%;
            display: block;
            max-width: 320px;
            height: initial;
            cursor: pointer;
        }

        &.normal{
            max-width: 180px;
            font-weight: 400;
            margin: 5px;
            display: inline-block;
        }

        &.radius{
            border-radius: 10px;
        }

        &.full-radius{
            border-radius: 100px;
        }

        &.full{
            max-width: 100%;
        }

        &.transp{
            background-color: transparent;
            height: initial;
        }
    }
    

    .flex-top{
        flex: 1 1;
        display: flex;
        white-space: nowrap;
        padding: 0px 5px;
        align-items: center;
        cursor: pointer;
    }

    .flex-cart{
        flex: 1 1;
        display: flex;
        white-space: nowrap;
        padding: 0px 5px;
        align-items: center;
        cursor: pointer;
    }

   

    .menu-modal{
        top:90px;
      padding-left:0px !important;

        ${customMedia.lessThan("tablet")`
          z-index:999;
      `}

   
    

    }
    .header-menu-modal{
        background-color: var(--menu-sandwich-header);
        ${customMedia.lessThan("tablet")`
            background-color: var(--menu-sandwich-header);
            
            
        `}
          ${customMedia.lessThan("pobre")`
      padding-right:0px !important;
      width:100%;
       
    `}
      
    }
    .header-menu-modal .close{
        text-shadow: initial;
        opacity: 1;
        color: var(--title-color);
        font-size:30px;
        
          ${customMedia.lessThan("pobre")`
       margin-right:18px;
       
    `}

    }
    .body-menu-modal{
        padding: initial;
        
     
    }
    .menu-modal .modal-content{
        width: 320px;
        border: none;
${customMedia.lessThan("mobile")` 
width: 95%;
min-width: 320px;

`}
      
      
    }
    .modal-dialog{
        max-width:98%;
        margin-top:-5px;
        ${customMedia.lessThan("mobile")`
        margin:auto;
     
    `}
  
    }


    .addedCartModal {
    margin-top: 40px;
${customMedia.lessThan("notebook")` 

margin-top:0px;
`}
  }

    .modal-backdrop{
      display:none;
      
    }
  

    .modal-dialog.modal-sm.modal-aviso{
        max-width: 400px;
        border: 0px;
        font-size: 12px;
      
        .modal-content{
           
           
            border-bottom: 10px;
            border:0px !important;
          
            .modal-body{
                padding: 0px;
               
                overflow: hidden;
                border-bottom: 1px solid #eee;
            }

            .modal-footer{
              
                text-align: center;
                align-items: center;
                justify-content: center;
                background-color: #eee;
                padding-bottom:20px;
               
            }
        }


     
        
        .button-sucesso{
            background-color: green;
            color: #fff;
            border: 0px;
            margin: 15px auto;
            display: block;
            width: 100%;
            max-width: 250px;
            border-radius: 15px;
            padding: 5px 25px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;

            &:hover{
                opacity: 0.9;
            }

            &.padrao{
                background-color: #ccc;
                color: #333;
            }
        }

        .button-erro{
            background-color: #ce171f;
            color: #fff;
            border: 0px;
            text-transform: uppercase;
   
            margin: 5px 5px -30px;

            &:hover{
                opacity: 0.9;
            }
        }
        
        .button-close{
            background-color: #333;
            color: #fff;
            border: 0px;
            text-transform: uppercase;
        
            margin: 5px 5px -30px;

            &:hover{
                opacity: 0.9;
            }
        }
        
    }
   
  

    .modalProduct{
        padding-top: 15px;
        img{
            max-width: 800px;
            margin: 0 auto;
            display: block;
        }

        .modal-content{
            border-radius: 15px;
        } 
    }

    .pointer{
        cursor: pointer;
    }

    .hidden-mob{
        display: flex;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .visible-mob{
        display: none;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }


    @media (max-width: 768px){

        .hidden-mob{
            display: none !important;
        }

        .visible-mob{
            display: block;
        }

      

        .mob{
            margin-bottom: 30px;
        }

        .hits-empty-state{
            padding-bottom: 40px;
        }

        .hits-empty-state svg {
            margin-bottom: 0px !important;
        }
    }

 
    .ajustWidth{
        display: block;
        width: 100%;
        margin: 15px 0px;
        padding: 0px 25px; 
        height: 30px;
        margin-top: 40px;
    }

    .visible-xs{
        display: none;
    }

    @media (max-width: 899px){

        .visible-xs{
            display: initial;
        }

        .ais-RefinementList-list {
           display:flex;
           flex-direction:column;
        }
    }

    .selectSearch{
        width: 100%;
        max-width: 320px;
        display: block;
        margin: 0 auto;
        font-size: 11px;
        color: #333 !important;
        text-transform: uppercase;
        border-color: #ce171f;
        strong{
            color: #ff9196;
        }

        p{
            color: #fff;
            margin: 10px 0px;
        }
    }

    .hits-empty-state{
        text-align: center;

        svg{
            margin-bottom: 15px;
        }
    }

    .infos-plus{
        color: #333 !important;
        margin: 0px 0 0 10px !important;
        font-size: 11px !important;
    }

  

    .circle{
        width: 15px;
        height: 15px;
        border-radius: 15px;
        border: 1px solid #cfcfcf;
        position: relative;
        float: right;

        &.Branco{
            background-color: #fff;
        }

        &.Prata{
            background-color: #bec2cb;
        }

        &.Preto{
            background-color: #000;
        }

        &.left{
            float: left;
            margin-right: 5px;
        }
    }



    .accordion{
        button{
            width: 100%;
            display: block;
            background-color: transparent;
            border:0px;
            padding: 10px 0px;
            text-align: left;
    
            font-size: 16px;
            color: #333;
        }

        .collapse.show{
            border-bottom: 1px solid #efefef;
            margin-bottom: 20px;
            padding-bottom: 20px;
        }
    }


.image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg {
  height: 30px;
  width: 30px;
}

.image-gallery-thumbnail{
  width:100px;
  height:100px;

  margin-right: 5px;
  display:flex;
  justify-content: center;
  align-items:center;



}

.image-gallery-content  {

  &.fullscreen{
    .image-gallery-slide{
      img {
        width: 100%;
        height: 100%;
        object-fit: contain !important;
      }
    }
  }
}


.image-gallery-slide {

  display:flex;
  width: 100%;
  min-height: 500px;
  height:500px;
  max-height: 500px;

  ${customMedia.lessThan("mobile")`
            min-height: 300px;
      height:300px;
      max-height: 300px;
        `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
}


.image-gallery-thumbnail-inner{
  width:95px;
  height:95px;
  display:flex !important;
}
.image-gallery-thumbnail-image{
  width:100%;
  height:100%;
  object-fit:cover;

}

.image-gallery-thumbnail.active, .image-gallery-thumbnail:focus{
  border:2px solid  var(--default-color);
  transition:0s;
}
.image-gallery-thumbnail:hover{
  border:3px solid   var(--default-color);
}
.image-gallery-icon:hover{
  color:  var(--default-color);
}


@media (max-width: 576px){
  .image-gallery-fullscreen-button .image-gallery-svg, .image-gallery-play-button .image-gallery-svg {
    height: 24px;
    width: 24px;
  }
}


.center-img{
        display: block;
        margin: 15px auto;
    }

    .selectCategory{
        font-size: 12px;
        padding: 10px;
        align-self: center;
        background-color: #F7F7F7;
        border: none;
        height: 35px;
        margin: 10px 0px;
        width: 100%;

        &.inputCount{
            width: 50%;
            text-align: center;
        }

        &.xs{
            font-size: 13px;
            padding: 4px 0px;
            width: 40px;
            text-align: center;
        }
    }

    .box-select {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        max-width: 450px;
        width:100%;
        margin:0;
        align-self: center;
        justify-self: center;
        .select-name {
        font-size: 18px;
        color: var(--black);
        }
    }

    .success-payment {
        text-align: center;

        svg {
        width: 56px;
        display: block;
        margin: 15px auto;
        }

        strong {
        font-size: 15px;
        }
    }

    .final-pagamento{

        .btn-primary{
            background-color: #333;
            border-color: #333;
        }

        .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{
            background-color: #000;
            border-color: #000;
        }

        .btn-primary:hover {
            color: #fff;
            background-color: #000;
            border-color: #000;
        }
    }

    .canceled {
        background-color: red !important;
    }

    .success {
        background-color: green !important;
    }

    .pending_payment {
        background-color: #d7bd3f !important;
    }

    .awaiting_confirmation {
        background-color: #3fc2d7 !important;
    }

    .billed {
        background-color: #69a162 !important;
    }
    .shipped {
        background-color: #69a162 !important;
    }
    .completed {
        background-color: #207a15 !important;
    }

    .item-mb-10{
        margin-bottom: 10px;
    }

    .banner-topo{
        position: relative;
        display: block;
        width: 100%;

        .absoluta{
            width: 100%;
            display:  block;
            position: absolute;
            bottom: 30px;
            font-size: 32px;
          
            color: #fff;
        }
    }

    .modal-open .modal {
            overflow-y:hidden !important;
            padding-right:0px !important
        }

 
    

 

    .icon{
        pointer-events: none !important;
    }


   

    .bt-limpa-filtro{
        background-color: #333;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        font: inherit;
        font-size: 0.75rem;
   
        justify-content: center;
        padding: 12px;
        text-align: center;
        width: 100%;
        margin: 0px;
        border-radius: 25px !important;
        color: #fff;
    }

    //material ui changes
    .Mui-selected{
    background: var(--configurable-attributes-bgcolor-hover) !important;
 
  }

  
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--default-color) !important;

  }

   

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focusedd{
    outline-color: var(--default-color) !important;
  }
   
//   .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root .MuiListItemText-root{
//       color: #fff !important;
//   }
//   .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked{
//     color: #fff !important;
//   }
    
`;

export default GlobalStyles;
