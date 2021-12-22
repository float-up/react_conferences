import React from "react";
import {shallow} from "enzyme";
import {Checkbox} from "../Checkbox";

const handleClick = jest.fn();
let wrapper = shallow(<Checkbox text="Ru" onChange={handleClick}/>)
describe('Checkbox', () => {
    it('test Checkbox render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('test props "text" in Checkbox', () => {
        expect(wrapper.find('span').text()).toEqual('Ru')
    })

    it('toggle Checkbox', () => {

        wrapper.find('input')
            .simulate('change', {target: {checked: true}})

        expect(handleClick).toHaveBeenCalled();
    })
})
