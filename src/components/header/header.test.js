import React from "react";
import { shallow } from "enzyme"
import Header from ".";
import { FindByTestAttr } from "../../../Utils";

const setUp = (props = {}) =>{
    const components  = shallow(<Header {...props}/> )
    return components
}




describe('header component',()=>{

    let component;

    //beforeEach runs before every test
    beforeEach(()=>{
        component = setUp()
    })

    //user it() or test() to test the code 
    it("it should render with out error",()=>{
        // 1. fetch the component directly 2. use a setup method 3.use beforeEach
        //  const component = shallow(<Header/>) //1. 
        //  const component = setUp() //2. 
        //  const wrapper = component.find(`data-test='headerComponent'`) // 3.
         const wrapper = FindByTestAttr(component,"headerComponent")
         expect(wrapper.length).toBe(1)
    })

    it("it should render logo",()=>{
        const wrapper = FindByTestAttr(component,"logoIMG")
        expect(wrapper.length).toBe(1)
   })

})
