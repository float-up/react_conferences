import React from "react";
import {shallow} from "enzyme";
import {Loader} from "../Loader";

let wrapper = shallow(<Loader /> )
describe('Loader', () => {
    it('render Loader', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
