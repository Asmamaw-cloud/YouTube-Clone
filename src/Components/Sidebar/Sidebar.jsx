import { IoHomeOutline } from 'react-icons/io5';
import './Sidebar.css'
import { GrGamepad, GrTechnology } from 'react-icons/gr';
import { FaBlog, FaCarSide } from 'react-icons/fa';
import { IoIosFootball } from 'react-icons/io';
import { MdMusicVideo, MdOutlineLiveTv } from 'react-icons/md';
import { GiNewspaper } from 'react-icons/gi';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({sidebar, category, setCategory}) => {
    return ( 
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-links ${category === 0 ? "active" : ""}`} onClick={()=>setCategory(0)}>
                    <IoHomeOutline className='side-icon '/>
                    <p>Home</p>
                </div>
                <div className={`side-links ${category === 20 ? "active" : ""}`} onClick={()=>setCategory(20)}>
                    <GrGamepad className='side-icon '/>
                    <p>Gaming</p>
                </div>
                <div className={`side-links ${category === 2 ? "active" : ""}`} onClick={()=>setCategory(2)}>
                    <FaCarSide className='side-icon '/>
                    <p>Automobiles</p>
                </div>
                <div className={`side-links ${category === 17 ? "active" : ""}`} onClick={()=>setCategory(17)}>
                    <IoIosFootball className='side-icon '/>
                    <p>Sport</p>
                </div>
                <div className={`side-links ${category === 24 ? "active" : ""}`} onClick={()=>setCategory(24)}>
                    <MdOutlineLiveTv className='side-icon '/>
                    <p>Entertainment</p>
                </div>
                <div className={`side-links ${category === 28 ? "active" : ""}`} onClick={()=>setCategory(28)}>
                    <GrTechnology className='side-icon '/>
                    <p>Tech</p>
                </div>
                <div className={`side-links ${category === 10 ? "active" : ""}`} onClick={()=>setCategory(10)}>
                    <MdMusicVideo className='side-icon '/>
                    <p>Music</p>
                </div>
                <div className={`side-links ${category === 22 ? "active" : ""}`} onClick={()=>setCategory(22)}>
                    <FaBlog className='side-icon '/>
                    <p>Blog</p>
                </div>
                <div className={`side-links ${category === 25 ? "active" : ""}`} onClick={()=>setCategory(25)}>
                    <GiNewspaper className='side-icon '/>
                    <p>News</p>
                </div>
                <hr />
                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-links">
                        <img src={jack} alt="" />
                        <p>PewDiePie</p>
                    </div>
                    <div className="side-links">
                        <img src={simon} alt="" />
                        <p>MrBeast</p>
                    </div>

                    <div className="side-links">
                        <img src={megan} alt="" />
                        <p>5-Minute Crafts</p>
                    </div>
                    <div className="side-links">
                        <img src={cameron} alt="" />
                        <p>Nas Daily</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;