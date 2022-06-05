// import React from 'react'
import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2>Hello, my name is</h2>
                <h1 className="i-name">John A Hysong</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Full Stack Web Developer</div>
                        <div className="i-title-item">HTML</div>
                        <div className="i-title-item">CSS</div>
                        <div className="i-title-item">Javascript</div>
                        <div className="i-title-item">Node.js</div>
                    </div>
                </div>
                <div className="i-desc">
                    Currently finishing up education to become a full stack web developer. Working in HTML, CSS, Javascript, Node.js, APIs, MySQL, MongoDB, React.js and more.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro