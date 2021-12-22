import React from "react";
import {shallow} from "enzyme";
import {Button} from "../Button";

let onclick = jest.fn();
let wrapper = shallow(<Button text="Click me!" onClick={onclick} />)
describe('Button', () => {
    it('test Button render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('test props "text" in Button', () => {
        expect(wrapper.find('button').text()).toEqual('Click me!')
    })

    it('test onClick handler in Button', () => {
        wrapper.find('button').simulate('click', {target: {}})
        expect(onclick).toHaveBeenCalled();
    })
})
