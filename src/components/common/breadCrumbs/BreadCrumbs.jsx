import { ReactComponent as RightArrow } from "../../../assets/icons/chevron_right.svg";
import './breadCrumbs.scss'

function BreadCrumbs({mainPage, subPage, navToMainPage}) {

   if (subPage) {
      return (
         <div className="bread-crumbs-container">
            <span className="bread-crumbs-main-page link" onClick={navToMainPage}>{mainPage}</span>
            <RightArrow className="bread-crumbs-arrow"/>
            <span className="bread-crumbs-sub-page">{subPage}</span>
         </div>
      );
   }
   else {
      return (
         <div className="bread-crumbs-container">
            <span className="bread-crumbs-main-page">{mainPage}</span>
         </div>
      );
   }
   
}

export default BreadCrumbs;
