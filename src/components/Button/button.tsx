import { FaArrowRightLong } from "react-icons/fa6";
import "./button.css";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text?: string;
  url?: string;
}

const Button = ({ text,url }: ButtonProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if(url){
            navigate(url);
        }
    };
    return (
        <>
        <button className="adc-button" onClick={handleClick}>{text} <FaArrowRightLong/></button>
        </>
    );
};

export default Button;