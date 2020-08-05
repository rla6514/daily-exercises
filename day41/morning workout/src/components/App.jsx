import React from "react";
import "./style.scss";


export default class Component extends React.Component {
  render(){
    return (
    <div id="page">

        <header>
            <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture.png" alt="Aperture science" className="logo"/>

            <div className="user">
                <span>chell@aperture.sc</span><br/>
                <a href="#">logout</a>
            </div>

            <nav>
                <a href="#">Home</a>
                <a href="#" className="current">Products</a>
                <a href="#">Stores</a>
                <a href="#">Customers</a>
            </nav>
        </header>

        <div id="main">
            <nav className="filter">
                <label htmlFor="filter">Filter</label>
                <input type="text" name="filter" id="filter" placeholder="enter search term"/>
            </nav>

            <div className="content">
                <h1>Products</h1>

                <div className="product-list">

                    <div className="product">
                        <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture/propulsion-gel.jpg" alt=""/>
                        <div className="name">Propulsion gel</div>
                    </div>

                    <div className="product">
                        <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture/weight-cube.jpg" alt=""/>
                        <div className="name">Weight cube</div>
                    </div>

                    <div className="product">
                        <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture/friendly-cube.jpg" alt=""/>
                        <div className="name">A friend</div>
                    </div>

                    <div className="product">
                        <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture/portal-gun.jpg" alt=""/>
                        <div className="name">Portal gun</div>
                    </div>

                    <div className="product">
                        <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture/defense-robot.jpg" alt=""/>
                        <div className="name">Home-defense robot</div>
                    </div>

                    <div className="product">
                        <img src="https://classNamees.codingbootcamp.cz/assets/classNamees/workouts/aperture/cake.jpg" alt=""/>
                        <div className="name">Cake (not a lie)</div>
                    </div>

                </div>

            </div>

        </div>

        <footer>
            &copy; 2027 Aperture Laboratories
        </footer>

    </div>
    
    );
  }
}