import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
                perspiciatis.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((list, index) => (
                    <div
                        onClick={() =>
                            setCategory((prev) =>
                                prev === list.menu_name ? "All" : list.menu_name
                            )
                        }
                        key={index}
                        className="explore-menu-list-item"
                    >
                        <img
                            className={category === list.menu_name ? 'active' : ''}
                            src={list.menu_image}
                            alt={list.menu_name}
                        />
                        <p>{list.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
