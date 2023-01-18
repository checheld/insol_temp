import React, {useRef,  useEffect} from "react";
import styled from "styled-components";
import brandLight from './logo.png';
import brandDark from './logo-dark.png';
import { useLocation } from "react-router-dom";

const MainBrand = styled.div`
   img{
    width : ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
   }
   .v-light & , & {
        .logo-dark{
           display : block ;     
        }
        .logo-light{
            display : none;    
        }
   }
    
   .v-dark & {
       .logo-dark{
           display : none ;     
        }
        .logo-light{
            display : block;    
        }
   }
   .changed-color{

   }
   @media (height: 170px) {
    .changed-color{
        color: red !important;
    }
  }
`;

const Brand = ({width, height, alt}) => {

    const nav = useRef();
    const location = useLocation();
    var currentPath = location.pathname;

    useEffect(() => {
        currentPath === '/' && nav.current.classList.add("changed-color");
        currentPath !== '/' && nav.current.classList.remove("changed-color");
    }, [currentPath]);

    return (
        <MainBrand className="main-brand" width={width} height={height}>
            {/* <img className="logo-light" src={brandLight} alt={`${alt} - logo light`} width={width} height={height}/>
            <img className="logo-dark" src={brandDark} alt={`${alt} - logo dark`} width={width} height={height}/> */}
            <h5 className="logo-light">InSol Group</h5>
            <h5 className="logo-dark"  ref={nav}>InSol Group</h5>
        </MainBrand>
    );
}

MainBrand.defaultProps = {width: '80px', height: 'auto'}
Brand.defaultProps = {alt: "Droow"}

export default React.memo(Brand);