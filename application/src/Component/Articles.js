import React ,{useEffect,useState} from "react";
import '../static/Articles.css';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faGripVertical} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';

import Datas from '../Data/MOCK_DATA.json';



function Articles(){
         const [data,setData] = useState([]);
         const [selected,setSelected] =useState(null);
         const [open,setOpen] = useState(false)

         
    useEffect(()=> {
        setData(Datas)
    },[])
    
    return(
        <div className="articles">
            { data.map((item) => (
                <div className="article">
                    <div className="post">
                        <button className="drag">
                            <FontAwesomeIcon icon={faGripVertical}   />
                        </button>
                        <input type="checkbox" id="select" className="select"/>
                        <div className="details">
                            <p className="title">{item.title}</p>
                            <div className="author_date">
                                <div className="icon_author">
                                    <FontAwesomeIcon icon={faUser} style={{color: "#2fb67c",}}  />
                                    <p className="author">{item.author}</p>
                                </div>
                                <div className="icon_calendar">
                                    <FontAwesomeIcon icon={faCalendar} style={{color: "#2fb67c",}}  />
                                    <p className="date">{item.date}</p>
                                </div>
                            </div>
                            <div className="icon_content">
                                <p className="content">{item.content}</p>
                                <button type="submit" className="read" onClick={()=> {
                                    setOpen(true);
                                    setSelected(item);
                                    }}>
                                    <FontAwesomeIcon icon={faEye} style={{color: "#4251f5",}}  />
                                    <span>Read full</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hashtag">
                        <button className="hash_button">#Sports</button>
                        <button className="hash_button">#Worldwide</button>
                        <button className="hash_button">#Local</button>
                    </div>
                    
                </div>
            ))}
            {

               open && <Modal item={selected} close={setOpen}/>
            }
        </div>
    );
    
}
export default Articles;