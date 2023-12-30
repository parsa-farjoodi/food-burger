import React, { useState } from 'react'
import "./Foods.css"
import { Container, Row, Col } from 'react-bootstrap'
import foodsCategory from '../../datas'



export default function Foods() {



    const allCategories = ["ALL", ...new Set(foodsCategory.map(food => food.category))]



    const [categories, setCategories] = useState(allCategories)
    const [allMenus, setAllMenus] = useState(foodsCategory)
    const [mainCategory, setMainCategory] = useState("ALL")

    const filterMenus = (category) => {

        if(category === "ALL") {
            setAllMenus(foodsCategory)
            return
        }

        let filteredMenus = foodsCategory.filter(food => food.category === category)
        setAllMenus(filteredMenus)

    }



    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='foodMenueContainer'>
                        <div className='foodMenuTitle'>
                            <div className='title'>
                                <h3>Our Foods</h3>
                            </div>
                        </div>
                        <div className='foodCategories'>
                            {categories.map((category, index) => (
                                <div
                                    className={category === mainCategory ? "foodCategory highlight" : "foodCategory"}
                                    key={index}
                                    onClick={() => {
                                        setMainCategory(category)
                                        filterMenus(category)
                                    }}
                                >
                                    <div className='foodCategoryTitle'>
                                        <span>{category}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='foods'>
                            {
                                allMenus.map((food) => (
                                    <div key={food.id} className='food'>
                                        <div className='foodImage'>
                                            <img src={food.img} />
                                        </div>
                                        <div className='foodTitle'>
                                            <h4>{food.name}</h4>
                                        </div>
                                        <div className='foodPrice'>
                                            <p>${food.prise}</p>
                                        </div>
                                        <div className='foodDetails'>
                                            <div className='foodExplaination'>
                                                <span>{food.explaination}</span>
                                            </div>
                                            <div className='foodButton'>
                                                <button>+ ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
