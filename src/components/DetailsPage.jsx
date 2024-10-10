import './DetailsPage.css'
import {Link} from 'react-router-dom'
import { GoBookmark } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { LiaEyeSolid } from "react-icons/lia";
import { IoIosGitNetwork } from "react-icons/io";
import articles from '../data'
import { HiArrowSmLeft } from "react-icons/hi";

const DetailsPage = ({isSidebarOpen}) => {
  const { articleId } = useParams();
  const article = articles.find(blog => blog.id === parseInt(articleId));
  return (
    <>
    {isSidebarOpen ? (
    <div className='discover-container2'>
      <div className = 'details-navbar'>
        <Link to = "/" className='link'>
        <HiArrowSmLeft className='home-arrow'/>
        </Link>
        <p>...</p>
        <div className = 'container3'>
          <GoBookmark />
        </div>
        <div className = 'container1'>
          <IoIosLink />
        </div>
        <div className='container2'>
          <FaShare />
          Share
        </div>
      </div>
      <hr className="separator-line1" />
      <div className='blog-container'>
        <img src = {article.image} />
        <h1 className='blogdetails-name'>
          {article.name}
        </h1>
        <div className='blogdetails-details'>
          <div className='left-side'>
            <FaUserCircle className='blogdetails-author'/>
            <div>
              <h3 className='details-head'>Curated by {article.author}</h3>
              <p className='details-para' >{article.minRead} min read</p>
            </div>
          </div>
          <div className = 'right-side'>
            <div className = "right-side-details">
              <IoMdTime className='details-para1'/>
              <p className='details-para1'>{article.timePosted}</p>
            </div>
            <div className = "right-side-details">
              <LiaEyeSolid className='details-para1'/>
              <p className='details-para1'>{article.reads}</p>
            </div>
            <div className = "right-side-details">
              <IoIosGitNetwork className='details-para1'/>
              <p className='details-para1'>{article.shares}</p>
            </div>
          </div>
        </div>
        </div>
        <p className = 'blogdetails-description'>
          {article.description}
        </p>
        <div className='chat-bar-container'>
          <div className='chat-input'>
            <input type="text" className="chat" placeholder="Ask follow-up" />
            <div className='options'>
              <div className='option1'>
                <div className='toggle'></div>
              </div>
              <p className='option2'>Pro</p>
              <div className='option3'>
                <IoIosGitNetwork className='option2'/>                
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className='discover-container3'>
      <div className = 'details-navbar'>
        <p>...</p>
        <div className = 'container3'>
          <GoBookmark />
        </div>
        <div className = 'container1'>
          <IoIosLink />
        </div>
        <div className='container2'>
          <FaShare />
          Share
        </div>
      </div>
      <hr className="separator-line1" />
      <div className='blog-container'>
        <img src = {article.image} />
        <h1 className='blogdetails-name'>
          {article.name}
        </h1>
        <div className='blogdetails-details'>
          <div className='left-side'>
            <FaUserCircle className='blogdetails-author'/>
            <div>
              <h3 className='details-head'>Curated by {article.author}</h3>
              <p className='details-para' >{article.minRead} min read</p>
            </div>
          </div>
          <div className = 'right-side'>
            <div className = "right-side-details">
              <IoMdTime className='details-para1'/>
              <p className='details-para1'>{article.timePosted}</p>
            </div>
            <div className = "right-side-details">
              <LiaEyeSolid className='details-para1'/>
              <p className='details-para1'>{article.reads}</p>
            </div>
            <div className = "right-side-details">
              <IoIosGitNetwork className='details-para1'/>
              <p className='details-para1'>{article.shares}</p>
            </div>
          </div>
        </div>
        </div>
        <p className = 'blogdetails-description'>
          {article.description}
        </p>
        <div className='chat-bar-container'>
          <div className='chat-input'>
            <input type="text" className="chat" placeholder="Ask follow-up" />
            <div className='options'>
              <div className='option1'>
                <div className='toggle'></div>
              </div>
              <p className='option2'>Pro</p>
              <div className='option3'>
                <IoIosGitNetwork className='option2'/>                
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
    
  )
}

export default DetailsPage
