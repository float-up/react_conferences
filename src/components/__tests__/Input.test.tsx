import React from "react";
import {shallow} from "enzyme";
import Input from "../Input";

let onchange = jest.fn();
let wrapper = shallow(<Input placeholder="test" onChange={onchange} /> )
describe('Input', () => {
    it('test Input render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('test props "placeholder" in Input', () => {
        expect(wrapper.find('input').prop('placeholder')).toEqual('test')
    })

    it('test onChange into Input component', () => {
        wrapper.find('input').simulate('change', {target: {value: '123'}})

        expect(onchange).toHaveBeenCalled();
    })
})
