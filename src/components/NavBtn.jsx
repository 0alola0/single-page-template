import {useState} from 'react';


const NavBtn = ({pageName, activeBase}) => {
    const [isHover, setIsHover] = useState(activeBase)
    const handleHoverOn = () => {setIsHover(true)}
    const handleHoverOff = () => {setIsHover(false)}

    const highlight = {
        color: isHover? "#EF5555" : "#2B3252",
    }
    const underline = {
        backgroundColor: isHover? "#EF5555" : "transparent",
        width: isHover? "18px" : "0",
        height: "1px",
        marginTop: "2px",
        transition: "width 0.2s ease-in-out",
    }

  return (
    <button style={highlight} className='nav_link_btn' onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        {pageName}
        <span style={underline} className='underline'></span>
    </button>
  );
}

export default NavBtn;
