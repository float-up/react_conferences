import React from "react";
import {shallow} from "enzyme";
import {ConferenceCard} from "../ConferenceCard";
import {IProgram} from "../../types/interfaces";

const info: IProgram = {
    "id": "1",
    "title": "Client rendering, server rendering, pre rendering. The full spectrum of JS website and application perfomance delivery",
    "lector": "Guillermo Rauch",
    "type": {
        "level": "INTERMEDIATE",
        "lang": "EN"
    }
}

let wrapper = shallow(<ConferenceCard confInfo={info}/>)
describe('ConferenceCard', () => {
    it('test ConferenceCard render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('test show title into ConferenceCard', () => {
        expect(wrapper.find('span').text()).toEqual('Client rendering, server rendering, pre rendering. The full spectrum of JS website and application perfomance delivery')
    })

    it('test show lector into ConferenceCard', () => {
        expect(wrapper.find('p.card-lector').text()).toEqual('Guillermo Rauch')
    })

    it('test show lector into ConferenceCard', () => {
        expect(wrapper.find('p.card-level').text()).toEqual('INTERMEDIATE / EN')
    })
})
