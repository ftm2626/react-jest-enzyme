//function to make it easier to find attribute
export const FindByTestAttr = (component,attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

