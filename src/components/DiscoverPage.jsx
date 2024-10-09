import { Link } from 'react-router-dom';
import articles from '../data'
import { CiStar } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";
import { CiDollar } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { CiMedal } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import './DiscoverPage.css';

// eslint-disable-next-line react/prop-types
const DiscoverPage = ({isSidebarOpen}) => {
  return (
    <>
    {isSidebarOpen ? (
      <div className='cover-container2'>
        <div className = "head-discover" >
          <svg className = "discover-icon" aria-hidden="true" focusable="false" data-prefix="fak" data-icon="discover" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z"></path>
            </svg>
          <p className='discover-text'>Discover</p>
        </div>
        <hr className="separator-line1" />
        <div className='tags-container'>
          <button className = "tag-button-clicked">
            <CiStar className='icon'/>
            <p className = "icon-text">Top</p>
          </button>
          <button className='tag-button'>
            <HiMiniCpuChip className='icon1'/>
            <p className='icon1-text'>Tech & Science</p>
          </button>
          <button className='tag-button'>
            <CiDollar className='icon1'/>
            <p className='icon1-text'>Finance</p>
          </button>
          <button className='tag-button'>
            <IoColorPaletteOutline className='icon1'/>
            <p className='icon1-text'>Arts & Culture</p>
          </button>
          <button className='tag-button'>
            <CiMedal className='icon1'/>
            <p className='icon1-text'>Sports</p>
          </button>
          <button className='tag-button'>
            <IoTvOutline className='icon1'/>
            <p className='icon1-text'>Entertainment</p>
          </button>
        </div>
        <div className='discover-content'>
          <div className='content'>
          {articles.map((article) => (
            
          <div key = {article.id} className='blog-container1'>
            <Link to = {`/page/${article.id}`}>
            <img src = {article.image} className='blog-image'/>
            </Link>
            <h2 className='blog-name'>{article.name}</h2>
            <p className='blog-description'>{article.description}</p>
            <div className='blog-items'>
              <div className='blog-author'>
                <FaUserCircle />
                <p>{article.author}</p>
              </div>
              <FaBookmark  className='bookmark-icon'/>
            </div>
          </div>
        ))}
          </div>
          <div className='sidebox2'>
            <div className='sidebox-heading'>
              <h3>Make it yours</h3>
              <FaXmark className='close-icon'/>
            </div>
            <p className='sidebox-para'>Select topics and interests to customize your Discover experience.</p>
            <div className = "sidebox-tag-container">
              <div className='sidebox-container1'>
                <HiMiniCpuChip className='icon2'/>
                <p className='icon2-text'>Tech & Science</p>
              </div>
              <div className='sidebox-container1'>
                <CiDollar className='icon2'/>
                <p className='icon2-text'>Finance</p>
              </div>
            </div>
            <div className='sidebox-tag-container'>
              <div className='sidebox-container1'>
                <IoColorPaletteOutline className='icon2'/>
                <p className='icon2-text'>Arts & Culture</p> 
              </div>
              <div className='sidebox-container1'>
                <CiMedal className='icon2'/>
                <p className='icon2-text'>Sports</p>
              </div>
            </div>
            <div className='sidebox-container1'>
                <IoTvOutline className='icon2'/>
                <p className='icon2-text'>Entertainment</p>
              </div>
            <hr className="separator-line2" />
            <button className='save-button'>
              Save Interests
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className='cover-container3'>
        <div className = "head-discover" >
          <svg className = "discover-icon" aria-hidden="true" focusable="false" data-prefix="fak" data-icon="discover" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z"></path>
            </svg>
          <p className='discover-text'>Discover</p>
        </div>
        <hr className="separator-line1" />
        <div className='tags-container'>
          <button className = "tag-button-clicked">
            <CiStar className='icon'/>
            <p className = "icon-text">Top</p>
          </button>
          <button className='tag-button'>
            <HiMiniCpuChip className='icon1'/>
            <p className='icon1-text'>Tech & Science</p>
          </button>
          <button className='tag-button'>
            <CiDollar className='icon1'/>
            <p className='icon1-text'>Finance</p>
          </button>
          <button className='tag-button'>
            <IoColorPaletteOutline className='icon1'/>
            <p className='icon1-text'>Arts & Culture</p>
          </button>
          <button className='tag-button'>
            <CiMedal className='icon1'/>
            <p className='icon1-text'>Sports</p>
          </button>
          <button className='tag-button'>
            <IoTvOutline className='icon1'/>
            <p className='icon1-text'>Entertainment</p>
          </button>
        </div>
        <div className='discover-content'>
          <div className='content'>
          {articles.map((article) => (
            
          <div key = {article.id} className='blog-container1'>
            <Link to = {`/page/${article.id}`}>
            <img src = {article.image} className='blog-image'/>
            </Link>
            <h2 className='blog-name'>{article.name}</h2>
            <p className='blog-description'>{article.description}</p>
            <div className='blog-items'>
              <div className='blog-author'>
                <FaUserCircle />
                <p>{article.author}</p>
              </div>
              <FaBookmark  className='bookmark-icon'/>
            </div>
          </div>
        ))}
          </div>
          <div className='sidebox2'>
            <div className='sidebox-heading'>
              <h3>Make it yours</h3>
              <FaXmark className='close-icon'/>
            </div>
            <p className='sidebox-para'>Select topics and interests to customize your Discover experience.</p>
            <div className = "sidebox-tag-container">
              <div className='sidebox-container1'>
                <HiMiniCpuChip className='icon2'/>
                <p className='icon2-text'>Tech & Science</p>
              </div>
              <div className='sidebox-container1'>
                <CiDollar className='icon2'/>
                <p className='icon2-text'>Finance</p>
              </div>
            </div>
            <div className='sidebox-tag-container'>
              <div className='sidebox-container1'>
                <IoColorPaletteOutline className='icon2'/>
                <p className='icon2-text'>Arts & Culture</p> 
              </div>
              <div className='sidebox-container1'>
                <CiMedal className='icon2'/>
                <p className='icon2-text'>Sports</p>
              </div>
            </div>
            <div className='sidebox-container1'>
                <IoTvOutline className='icon2'/>
                <p className='icon2-text'>Entertainment</p>
              </div>
            <hr className="separator-line2" />
            <button className='save-button'>
              Save Interests
            </button>
          </div>
        </div>
      </div>
    )}

    </>
  )
}

export default DiscoverPage


