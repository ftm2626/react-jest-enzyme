import  checkPropTypes  from "check-prop-types";


export const CheckProps = (component,expectedProps) =>{
    const propsErr = checkPropTypes(component.propTypes, expectedProps,"props", component.name)
    return propsErr; 
}


//function to make it easier to find attribute
export const FindByTestAttr = (component,attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

