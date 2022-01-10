import React from "react";
import { shallow } from "enzyme";
import { CheckProps, FindByTestAttr } from "../../../Utils";
import HeadLine from ".";

const setUp = (props = {}) =>{
    const components  = shallow(<HeadLine {...props}/> )
    return components
}


describe("headline component",()=>{

    describe("checking proptypes",()=>{

        it("should not throw a warning",()=>{
            const expectedProps ={
                header: 'test header',
                desc:'test Desc',
                TempArr:[{
                    fNAme:"is string",
                    lName: "is string",
                    age:1
                }]
                
            }

            // const  propErr = checkPropTypes(HeadLine.propTypes, expectedProps,"props", HeadLine.name)
            const  propErr = CheckProps(HeadLine, expectedProps)
            expect(propErr).toBeUndefined()
        })

    })

    describe("have props",()=>{

        let wrapper;
        beforeEach(()=>{
            const props ={
                header:'test header',
                desc:'test desc'
            }
            wrapper = setUp(props)
        })
        it('should render without errors',()=>{
            const component =  FindByTestAttr(wrapper,'headlineComponent')
            expect(component.length).toBe(1)
        })
        it('should render h1',()=>{
            const component =  FindByTestAttr(wrapper,'header')
            expect(component.length).toBe(1)
        })
        it('should render a desc',()=>{
            const component =  FindByTestAttr(wrapper,'desc')
            expect(component.length).toBe(1)
        })
    })

    describe("have NO props",()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })
        it('should not render',()=>{
            const component = FindByTestAttr(wrapper,"headlineComponent")
            expect(component.length).toBe(0)
        })
    })
})